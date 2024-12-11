const http = require("http");
const { readFileSync } = require("fs");

console.log("Nodejs Server to serve static files");

/*
-------------------------------------------
Refactor & cleaner 
-------------------------------------------
*/

// Helper function to determine MIME type based on file extension

const getMimeType = (ext) => {
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".woff": "font/woff",
    ".svg": "image/svg+xml",
  };
  return mimeTypes[ext] || "application/octet-stream";
};

// Load all files synchronously at the start
const files = {
  "/": { content: readFileSync("./arka/index.html"), type: "text/html" },
  "/style/header-style.css": {
    content: readFileSync("./arka/style/header-style.css"),
    type: "text/css",
  },

  "/style/fonts.css": {
    content: readFileSync("./arka/style/fonts.css"),
    type: "text/css",
  },
  "/style/style.css": {
    content: readFileSync("./arka/style/style.css"),
    type: "text/css",
  },
  "/js/main.js": {
    content: readFileSync("./arka/js/main.js"),
    type: "application/javascript",
  },
  "/media/logo-light.png": {
    content: readFileSync("./arka/media/logo-light.png"),
    type: "image/png",
  },
  "/media/logo-dark.png": {
    content: readFileSync("./arka/media/logo-dark.png"),
    type: "image/png",
  },
  "/media/project-slide.png": {
    content: readFileSync("./arka/media/project-slide.png"),
    type: "image/png",
  },
  "/media/project1.png": {
    content: readFileSync("./arka/media/project1.png"),
    type: "image/png",
  },
  "/media/project2.png": {
    content: readFileSync("./arka/media/project2.png"),
    type: "image/png",
  },
  "/media/project3.png": {
    content: readFileSync("./arka/media/project3.png"),
    type: "image/png",
  },
  "/media/project4.png": {
    content: readFileSync("./arka/media/project4.png"),
    type: "image/png",
  },
  "/media/cat1.png": {
    content: readFileSync("./arka/media/cat1.png"),
    type: "image/png",
  },
  "/media/cat2.png": {
    content: readFileSync("./arka/media/cat2.png"),
    type: "image/png",
  },
  "/media/cat3.png": {
    content: readFileSync("./arka/media/cat3.png"),
    type: "image/png",
  },
  "/media/cat4.png": {
    content: readFileSync("./arka/media/cat4.png"),
    type: "image/png",
  },
  "/media/cat5.png": {
    content: readFileSync("./arka/media/cat5.png"),
    type: "image/png",
  },
  "/media/brands.png": {
    content: readFileSync("./arka/media/brands.png"),
    type: "image/png",
  },
  "/media/Orama.png": {
    content: readFileSync("./arka/media/Orama.png"),
    type: "image/png",
  },
  "/media/Schuco.png": {
    content: readFileSync("./arka/media/Schuco.png"),
    type: "image/png",
  },
  "/media/footer-bg.png": {
    content: readFileSync("./arka/media/footer-bg.png"),
    type: "image/png",
  },
  "/style/fonts/iranyekanwebregular.woff": {
    content: readFileSync("./arka/style/fonts/iranyekanwebregular.woff"),
    type: "font/woff",
  },
};

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
