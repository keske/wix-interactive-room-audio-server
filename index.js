const fs = require('fs');

// Babel
require('@babel/register')(JSON.parse(fs.readFileSync('./.babelrc')));
require('@babel/polyfill');

// Application
require('./src/app.js');
