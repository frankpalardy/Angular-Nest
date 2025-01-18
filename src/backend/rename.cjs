const fs = require('fs');
const path = require('path');

const oldPath = path.join(__dirname, 'dist', 'main.js');
const newPath = path.join(__dirname, 'dist', 'main.mjs');

fs.rename(oldPath, newPath, (err) => {
  if (err) throw err;
  console.log('Renamed main.js to main.mjs');
});

