var parser = require('./parse');
var absPath = './config';
var settings = parser(absPath);
console.log();
console.log(JSON.stringify(settings, null, 4));
console.log();
