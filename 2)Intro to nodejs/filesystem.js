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

//to make directory
fs.mkdirSync("mydir");

//to make file in my directory
fs.writeFileSync("mydir/myname.txt");

//inner content of directory
let content = fs.readdirSync("mydir");//read names of file in my directory
console.log(content);

for (let i = 0; i < content.length;i++){
      console.log("file",content[i],"is removed");
      fs.unlinkSync("mydir/"+content[i]);//to remove files form my directory
}
fs.rmdirSync("mydir");//remove my directory

let fileExists = fs.existsSync("mydir");
console.log(fileExists);//tells if dir is there or not
console.log(".........");
//tells if the path is a file or dir
let op=fs.lstatSync(__dirname + "\\filesystem.js");
let op2=op.isFile();
console.log(op2);
op2=op.isDirectory();
console.log(op2);

for (let i = 1; i <= 10; i++) {
       let dirpat='Lecture-${i}';
       fs.mkdirSync(dirpat);
       fs.writeFileSync(dirpat+"\\"+"readme.md",'# readme for ${dirpat}');
}
