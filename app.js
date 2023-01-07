"use strict";
function shiftCipher(str, shift = 1) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let digit = str.charCodeAt(i);
        if (digit >= 97 && digit <= 122) {
            let symb = String.fromCharCode(((digit - 97 + shift) % 26) + 97);
            res += symb;
        }
        else {
            let symUp = String.fromCharCode(digit);
            res += symUp;
        }
    }
    return res;
}
let inputShift = [26, 27, 1000, 5];
["abz", "abz", "abz", "123-ASnKb"].forEach((elem, ind) => {
    console.log(`these letters ${elem} shift to the right by ${inputShift[ind]}, Result =  ${shiftCipher(elem, inputShift[ind])}`);
});
console.log("==============================================");
function shiftDecipher(str, shift = 1) {
    if (shift > 26) {
        shift %= 26;
    }
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let digit = str.charCodeAt(i);
        if (digit >= 97 && digit <= 123) {
            let symb = String.fromCharCode(((digit - 97 - shift + 26) % 26) + 97);
            res += symb;
        }
        else {
            let symUp = String.fromCharCode(digit);
            res += symUp;
        }
    }
    return res;
}
let inpShift = [3, 27, 1000, 6];
["dec", "bca", "mnl", "123-ASnKb"].forEach((elem, ind) => {
    console.log(`these letters ${elem} shift to the left by ${inpShift[ind]}, Result =  ${shiftDecipher(elem, inpShift[ind])}`);
});
//# sourceMappingURL=app.js.map