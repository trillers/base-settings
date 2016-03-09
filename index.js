var fs = require('fs');
var settings = null;
var absPath = '/apps/conf/vmark/config';

try{
    var configFileStr = fs.readFileSync(absPath).toString();
    settings = JSON.parse(configFileStr);
}catch(e){
    console.error(e);
    console.error('Fail to parse and load external settings file');
    throw new Error(e);
}

module.exports = settings;

