let path = require("path");
// path.join() joins two segment path

//to give extension or to tell extension
let opman = path.extname(path.join(__dirname, "abs.js"));
console.log(opman);

//if file it will give file else if folder it will give folder
let name=path.basename(__dirname);//__dirname is  returns the directory name of the current module
//path.basename();-->used to get the filename portion of a path to the file.

console.log(name);
name=path.basename(path.join(__dirname,"abs.js"));
console.log(name);
