let fs = require("fs");
let buffer = fs.readFileSync("abs.js");//read file
console.log("data in buffer", buffer);//in buffer format
console.log("normal data  " + buffer);//in normal format

//creat file--->
fs.openSync("abx.txt", "w");
//--> openSync("file_name","mode or format");

//create
fs.writeFileSync("funds.txt", "$1000000000");//if no file create a file name given data
//--> writeFileSync("name_ofFile.format","data of file");
//if file is there replace the given data

//to update in the file
       fs.appendFileSync("abx.txt","form space");