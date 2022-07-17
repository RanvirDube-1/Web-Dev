let calk = require("chalk");
let figlet = require("figlet");
function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

async function delayedGreeting() {
    console.log(calk.red(figlet.textSync("the god of")));
    await sleep(2000);
    console.log(calk.green(figlet.textSync("cp and web dev")));
    await sleep(2000);
    console.log(calk.red(figlet.textSync("Ranvir. D . camp")));
}

delayedGreeting();