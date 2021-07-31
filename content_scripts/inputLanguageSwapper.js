charMapperEnToHebAndHebToEn = {
    // En to Heb
    'q': '/',
    'w': '\'',
    'e': 'ק',
    'r': 'ר',
    't': 'א',
    'y': 'ט',
    'u': 'ו',
    'i': 'ן',
    'o': 'ם',
    'p': 'פ',
    'a': 'ש',
    's': 'ד',
    'd': 'ג',
    'f': 'כ',
    'g': 'ע',
    'h': 'י',
    'j': 'ח',
    'k': 'ל',
    'l': 'ך',
    'z': 'ז',
    'x': 'ס',
    'c': 'ב',
    'v': 'ה',
    'b': 'נ',
    'n': 'מ',
    'm': 'צ',
    // Heb to En
    '/': 'q',
    '\'': 'w',
    'ק': 'e',
    'ר': 'r',
    'א': 't',
    'ט': 'y',
    'ו': 'u',
    'ן': 'i',
    'ם': 'o',
    'פ': 'p',
    ']': '[',
    '[': ']',
    'ש': 'a',
    'ד': 's',
    'ג': 'd',
    'כ': 'f',
    'ע': 'g',
    'י': 'h',
    'ח': 'j',
    'ל': 'k',
    'ך': 'l',
    'ף': ';',
    'ז': 'z',
    'ס': 'x',
    'ב': 'c',
    'ה': 'v',
    'נ': 'b',
    'מ': 'n',
    'צ': 'm',
    'ת': ',',
    'ץ': '.',
    '.': '/'
}

// console.log("In swapper script");
var inputs, inputFieldIndex, inputStr, newStr;
newStr = "";
inputs = document.getElementsByTagName('input');
// let inputFieldIndex = browser.storage.local.get("inputFieldIndexKey");
inputFieldIndex = parseInt(sessionStorage.getItem('inputFieldIndexKey'));
inputStr = inputs[inputFieldIndex].value;
// alert(inputStr);
for (var i = 0; i < inputStr.length; i++) {
    // if the char is no defined its remain the same (not converted)
    var convertedChar = charMapperEnToHebAndHebToEn[inputStr.charAt(i)];
    if(convertedChar == undefined){
        newStr += inputStr.charAt(i);
    }
    else{ 
        newStr += convertedChar;
    }
  }
inputs[inputFieldIndex].value = newStr;
// console.log("exit swapper script");