# Arkanovin Website

A company website built using **HTML, CSS, JavaScript, and Node.js**. The project serves static HTML pages and handles routing using a custom Node.js server.

## Features
- **Responsive Design:** Fully responsive UI using modern CSS techniques.
- **Static Page Serving:** Serves HTML, CSS, and JavaScript files dynamically.
- **Custom Node.js Server:** Handles routing and API requests.
- **API Integration:** Fetches and displays product data from `https://fakestoreapi.com/products`.
- **Automatic Redirection:** Redirects users to `./arka/index.html` from the main page.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js (built-in `http` module)
- **Dependencies:** `mime-types`, `node-fetch`, `nodemon`

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/smircodes/arkanovin-nodejs.git
   cd arkanovin-nodejs
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open the browser and visit `http://localhost:3000`

## Folder Structure
```
/arkanovin-nodejs
├── arka          # Main HTML files
├── public        # Static assets (CSS, JS, images)
├── app.js        # Node.js server script
├── package.json  # Project dependencies
├── index.html    # Redirect page
```

## Future Improvements
- Add database integration for storing dynamic content
- Implement authentication for user access
- Optimize performance and SEO

## License
This project is open-source and available under the MIT License.

