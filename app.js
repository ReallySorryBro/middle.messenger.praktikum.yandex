const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
