const express = require('express');
const path = require('path');
const app = express();

const rootPath = path.join(__dirname, '..'); 
const clientPath = path.join(rootPath, 'client');
const assetsPath = path.join(clientPath, 'assets');

app.use('/assets', express.static(assetsPath));

app.use(express.static(clientPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Client path: ${clientPath}`);
  console.log(`Assets path: ${assetsPath}`);
});
