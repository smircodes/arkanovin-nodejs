const http = require("http");
const fs = require("fs");

console.log("Nodejs Server to serve static files");

// Determine MIME type based on file extension
const getMimeType = (filePath) => {
  const ext = filePath.slice(filePath.lastIndexOf(".")); // Get file extension
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".woff": "font/woff",
    ".svg": "image/svg+xml",
  };
  return mimeTypes[ext] || "application/octet-stream"; // Default type
};

// Function to scan directory and build a file map
const buildFileMap = (directory, baseUrl = "") => {
  const files = {};
  const entries = fs.readdirSync(directory); // List all files and folders in directory

  for (const entry of entries) {
    const fullPath = `${directory}/${entry}`;
    const urlPath = `${baseUrl}/${entry}`; // Create URL path

    if (fs.lstatSync(fullPath).isDirectory()) {
      // If entry is a folder, call buildFileMap recursively
      Object.assign(files, buildFileMap(fullPath, urlPath));
    } else {
      // If entry is a file, read its content and store in map
      const mimeType = getMimeType(fullPath);
      files[urlPath] = {
        content: fs.readFileSync(fullPath), // Read file content
        type: mimeType, // Get file type
      };
    }
  }

  return files;
};

// Create the file map for the "./arka" folder
const files = buildFileMap("./arka");

// Create server
const server = http.createServer((req, res) => {
  console.log(`Request URL: ${req.url}`);
  const file = files[req.url];
  if (file) {
    // File exists, serve it with the correct content type
    res.writeHead(200, { "Content-Type": file.type });
    res.end(file.content);
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>❌ Page Not Found ❌</h1>");
  }
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
