const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve the static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// For all other requests, serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
