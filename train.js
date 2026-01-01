//Shunday function tuzing, u 1ta string parametrga ega bolsin, 
// hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin. 
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.\n\n@MITASK
function countDigits(str) {
    return str
    .split("")                    // stringni har bir belgiga ajratadi
    .filter(ch => ch >= '0' && ch <= '9') // faqat raqamlarni qoldiradi
    .length;                      // nechta raqam borligini sanaydi
}
console.log(countDigits("ad2a54y79wet089452erfwe456sfgb9"));
console.log("npm run train");
