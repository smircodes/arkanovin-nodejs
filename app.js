const http = require("http");
const fs = require("fs");
const fetch = require("node-fetch");
const getMimeType = require("mime-types").lookup;

console.log("Node js server run.");

// Helper function to determine MIME type based on file extension
// const getMimeType = (filePath) => {
//   const ext = filePath.slice(filePath.lastIndexOf("."));
//   const mimeTypes = {
//     ".html": "text/html",
//     ".css": "text/css",
//     ".js": "application/javascript",
//     ".png": "image/png",
//     ".jpg": "image/jpeg",
//     ".jpeg": "image/jpeg",
//     ".woff": "font/woff",
//     ".svg": "image/svg+xml",
//   };
//   return mimeTypes[ext] || "application/octet-stream";
// };

const buildFileMap = (directory, baseUrl = "") => {
  const files = {};
  const entries = fs.readdirSync(directory); // List all entries (files + folders)

  entries.forEach((entry) => {
    const fullPath = `${directory}/${entry}`;
    const urlPath = `${baseUrl}/${entry}`;

    const isDirectory = fs.lstatSync(fullPath).isDirectory(); // Check if it's a folder

    if (isDirectory) {
      // Recursively process folders
      Object.assign(files, buildFileMap(fullPath, urlPath));
    } else {
      // Add file to the map
      files[urlPath] = {
        content: fs.readFileSync(fullPath), // Read file content
        type: getMimeType(fullPath), // Get file type
      };
    }
  });

  return files;
};
//Test buildFileMap function
const fileMap = buildFileMap(".");
console.log(fileMap);

// Create server
const server = http.createServer(async (req, res) => {
  console.log(`Request URL: ${req.url}`);

  let url = req.url === "/" ? "/index.html" : req.url; // Default to index.html if root is requested

  if (req.url === "/products") {
    // Handle API fetch for /products
    try {
      const apiResponse = await fetch("https://fakestoreapi.com/products");
      const products = await apiResponse.json();

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(products));
    } catch (error) {
      console.error("Error fetching Products:", error);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Failed to fetch products" }));
    }
  } else {
    // Serve static files
    const file = fileMap[url];

    if (file) {
      res.writeHead(200, { "Content-Type": file.type });
      res.end(file.content);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1> Page Not Found ⛔</h1>");
    }
  }
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
