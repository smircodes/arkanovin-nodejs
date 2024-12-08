const http = require("http");
const { readFileSync } = require("fs");

console.log("Nodejs Server to serve static files");

//get all files
const homePage = readFileSync("./arka/index.html");
const homeHeaderStyle = readFileSync("./arka/style/header-style.css");
const homeMainLogic = readFileSync("./arka/js/main.js");
const homeStyleFont = readFileSync("./arka/style/fonts.css");
const homeStyle = readFileSync("./arka/style/style.css");
const mediaLogoLight = readFileSync("./arka/media/logo-light.png");
const mediaLogoDark = readFileSync("./arka/media/logo-dark.png");
const mediaProjectSlide = readFileSync("./arka/media/project-slide.png");
const mediaProject1 = readFileSync("./arka/media/project1.png");
const mediaProject2 = readFileSync("./arka/media/project2.png");
const mediaProject3 = readFileSync("./arka/media/project3.png");
const mediaProject4 = readFileSync("./arka/media/project4.png");
const mediaCat1 = readFileSync("./arka/media/cat1.png");
const mediaCat2 = readFileSync("./arka/media/cat2.png");
const mediaCat3 = readFileSync("./arka/media/cat3.png");
const mediaCat4 = readFileSync("./arka/media/cat4.png");
const mediaCat5 = readFileSync("./arka/media/cat5.png");
const mediaBrands = readFileSync("./arka/media/brands.png");
const mediaSchuco = readFileSync("./arka/media/Schuco.png");
const mediaOrama = readFileSync("./arka/media/Orama.png");
const mediaFooter = readFileSync("./arka/media/footer-bg.png");
const iranYekanFont = readFileSync(
  "./arka/style/fonts/iranyekanwebregular.woff"
);

const server = http.createServer((req, res) => {
  // console.log(req.method);
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (req.url === "/style/header-style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeHeaderStyle);
    res.end();
  } else if (req.url === "/style/fonts.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyleFont);
    res.end();
  } else if (req.url === "/style/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  } else if (req.url === "/js/main.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeMainLogic);
    res.end();
  } else if (req.url === "/media/logo-light.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaLogoLight);
    res.end();
  } else if (req.url === "/media/logo-dark.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaLogoDark);
    res.end();
  } else if (req.url === "/media/project-slide.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaProjectSlide);
    res.end();
  } else if (req.url === "/media/project1.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaProject1);
    res.end();
  } else if (req.url === "/media/project2.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaProject2);
    res.end();
  } else if (req.url === "/media/project3.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaProject3);
    res.end();
  } else if (req.url === "/media/project4.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaProject4);
    res.end();
  } else if (req.url === "/media/cat1.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaCat1);
    res.end();
  } else if (req.url === "/media/cat2.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaCat2);
    res.end();
  } else if (req.url === "/media/cat3.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaCat3);
    res.end();
  } else if (req.url === "/media/cat4.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaCat4);
    res.end();
  } else if (req.url === "/media/cat5.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaCat5);
    res.end();
  } else if (req.url === "/media/brands.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaBrands);
    res.end();
  } else if (req.url === "/media/Orama.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaOrama);
    res.end();
  } else if (req.url === "/media/Schuco.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaSchuco);
    res.end();
  } else if (req.url === "/media/footer-bg.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(mediaFooter);
    res.end();
  } else if (req.url === "/style/fonts/iranyekanwebregular.woff") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(iranYekanFont);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>❌page not found❌</h1>");
    res.end();
  }
});
server.listen(3000);
