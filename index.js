var fs = require('fs');
var settings = null;
var absPath = '';

try{
    var configFileStr = fs.readFileSync(absPath).toString();
    var pathFragments = absPath.split('.');
    var fileSuffix = pathFragments[pathFragments.length-1];
    switch (fileSuffix) {
        case 'json':
            settings = JSON.parse(configFileStr);
            break;
        default:
            throw new Error('format of file must be json');
    }
}catch(e){
    console.error('Require base-settings failed.');
    throw new Error(e);
}

module.exports = settings;

