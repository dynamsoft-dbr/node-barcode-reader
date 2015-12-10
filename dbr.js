var dbr = require('./build/Release/dbr');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please input a barcode image path: ", function(answer) {
  // e.g. F:\git\Dynamsoft-Barcode-Reader\Images\AllSupportedBarcodeTypes.tif
  dbr.decodeFile(
    answer,
    function(msg){
      var result = null;
      for (index in msg) {
        result = msg[index]
        console.log(result['format']);
        console.log(result['value']);
        console.log("##################");
      }
    }
  );

  rl.close();
});
