const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, 'dist')));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'dist/index.hbs'));
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
