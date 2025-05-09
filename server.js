const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080; // Use environment variable for port or default to 8080

// Serve static files from the 'public' directory (or current directory for this setup)
// For simplicity, we'll serve from the root and explicitly map asset folders.
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port} or http://<your-local-ip>:${port}`);
  console.log(`Accessible externally via http://<your-external-ip>:${port} (if firewall and port forwarding are configured)`);
});