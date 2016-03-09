var fs = require('fs');
var fJSON = require("fbbk-json");
module.exports = function(absPath){
    var settings = {};
    try{
        var configFileStr = fs.readFileSync(absPath).toString();
        settings = fJSON.parse(configFileStr);
    }catch(e){
        console.error(e);
        console.error('Fail to parse and load external settings file');
        throw new Error(e);
    }
    return settings;
};

