const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let word = "";
  
    for (let i = 0; i < expr.length; i = i + 10) {
      arr.push(expr.slice(i, i + 10));
    }
  
    for (let i in arr) {
      let letter = [];
      
      for (let j = 0; j <= 10; j = j + 2) {
        if (arr[i].slice(j, j + 2) === "11") {
          letter.push("-");
        } else if (arr[i].slice(j, j + 2) === "10") {
          letter.push(".");
        } else if (arr[i].slice(j, j + 2) === "**") {
          letter.push("**");
          j = 10;
        }
      }
  
      for (key in MORSE_TABLE) {
        if (letter.join("") === key) {
          word = word + MORSE_TABLE[key];
        } else if (letter.join("") === "**") {
          word = word + " ";
          break;
        }
      }
    }
    return word;
  }

module.exports = {
    decode
}