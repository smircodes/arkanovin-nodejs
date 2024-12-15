const http = require("http");
const fs = require("fs");
const fetch = require("node-fetch");
const getMimeType = require("mime-types").lookup;

console.log("Node js server run.");

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
// Test buildFileMap function
const fileMap = buildFileMap(".");
console.log(fileMap);

// ---------------- Create Server1 ------------------

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     const homePage = fs.readFileSync("./index.html", "utf8");
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(homePage);
//   } else if (req.url === "/about") {
//     const aboutPage = fs.readFileSync("./about.html", "utf8");
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(aboutPage);
//   } else if (req.url.startsWith("/static")) {
//     // Handle static files manually here
//   } else if (req.url === "/api/product") {
//     // Fetch and send API data
//   } else {
//     // const notFoundPage = fs.readFileSync("./404.html", "utf8");
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.end("<h1> Page Not Found ⛔</h1>");
//   }
// });

// ---------------- Create Server2 ------------------

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
