fs = require('fs');
var res = "";

res += "var Lib = {}\n"

data = fs.readFileSync("order.txt", 'utf8');
files = data.split('\r\n');
for (var i = 0; i < files.length; i++) {
    var contents = fs.readFileSync(files[i], 'utf8');
    res += contents + "\n";
}

res += "try {module.exports.Lib = Lib;}catch(exc){console.log('module not defined')}\n";

fs.writeFileSync("ultimateBattleLib.js", res);
