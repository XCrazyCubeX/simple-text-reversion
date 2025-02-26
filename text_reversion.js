// use node text_reversion.js inside your terminal to run the code
// you can also run the code in the browser and use the console from there

// npm install readline-sync if not installed

// looped reversal
function looped_reversal(text) {

    /**
     * 
     * param: text
     * return reversed_text
     * 
     */

     let reversed_text = ""

     for (let char of text) {
        reversed_text = char + reversed_text
     }

     return reversed_text
}

// recursion reversal

    /**
     * 
     * param: text
     * return text
     * 
     */

function recursion_reversal(text) {
    if (text.length === 0) {
        return "";
    }

    else {
        return text[text.length - 1] + recursion_reversal(text.slice(0, -1));
    }
}


const readline = require("readline-sync")

let type = parseInt(readline.question("choose type: 1. loop / 2. recursion: "))

if (type === 1) {
    let text = readline.question("write anything: ")

    console.log(looped_reversal(text))
}

else if (type === 2 ) {
    let text = readline.question("write anything: ")
    console.log(recursion_reversal(text))
}

else {
    console.log("invalid choice")
}