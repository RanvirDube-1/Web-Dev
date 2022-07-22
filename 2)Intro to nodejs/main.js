let input = process.argv.slice(2);//take input in command line
let fs = require("fs");
let path = require("path");
console.log(input);
let com = input[0];
switch (com) {
    case "tree":
        treefn(input[1]);
        break;
    case "organize":
        organizefn(input[1]);
        break;
    case "help":
        helpfn();
        break;
    default:
        console.log("not found!");
}
function treefn(dirpath) {
    console.log("tree command implement for", dirpath);
}
function organizefn(dirpath) {
    console.log("organise command implement for", dirpath);
    //1.input ->directory path
    //2.create--organnize files
    //3.identify--identify file type
    //4.copy /cut files to that organise directory
    if (dirpath == undefined) {
        console.log("enter the path");
    } else {
        //check if the path is there or not
        let de = fs.existsSync(dirpath);
        if (de) {
            //step 2
            let mp = path.join(dirpath, "organized_files");
            if (fs.existsSync(mp) == false) {
                fs.mkdirSync("mp");//if file is there do not make file
            }
        } else {
            console.log("not correct path");
            return;
        }
    }
    organizeuse(dirpath,mp);//source file and destination file
}
function helpfn(dirpath) {
    console.log("list of all command ");
    console.log("node main.js tree dirpat")
    console.log("node main.js organise dirpat")
    console.log("node main.js help")
}