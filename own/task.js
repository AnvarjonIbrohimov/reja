/*
vC-TASK

Shunday function tuzing, u 2ta string parametr ega bolsin, 
hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin. 
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true.

@MITASK
*/

// B -TASK: 
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



/*
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/
function countLetter(letter, word) {
    const array = [...word.toLowerCase()]
    const letterWord = letter.toLowerCase()
    const result = array.filter(arr => arr === letterWord);
    
    console.log(result.length);
}
console.log("Birinchi usul");
countLetter("E", "Engineer ending element")


function countLette2(letter, word) {
    let word2 = word.toLowerCase()
    let count = 0;
    
    for (let i = 0; i < word2.length; i++) {
        if (word2[i] === letter) {
            count++;
        }
    }
    
    console.log(count);
}
console.log("Ikkinchi usul");

countLette2("a", "Anvarjon Akanikidaligmizda")




/*
Asynchronous: CALLBACK, ASYNC && PROMISE

DEFIMATION          CALL

callback         >  callback
async/await      >  then/catch || async/await
promise          >  then/catch || async/await

*/



console.log("Jack Ma maslaxatlari")
const list = [
    "1-Yaxshi talaba bo'ling",  //0-20
    "2-Tog'ri boshliq tanlang va koproq hatolar qiling",  //20-30
    "3-Uzingiz uchun ishlashni boshlang",  // 30-40
    "4-Siz kuchli bolgan narsalarni qiling", // 40-50
    "5-Yoshlarga investitsiya qiling",  // 50-60
    "6-Endi dam oling, foydasi yoq",  // 60~
];

// CALLBACK function Callback function — bu boshqa funksiyaga argument sifatida berilib, u funksiya ichida keyinroq chaqiriladigan funksiya.
function maslaxatBering( a, callback) {
    if (typeof a !== 'number') callback( "insert a number", null);
    else if( a <= 20 ) callback(null, list[0]);
    else if( a > 20 && a <= 30) callback(null, list[1]);
    else if( a > 30 && a <= 40) callback(null, list[2]);
    else if( a > 40 && a <= 50) callback(null, list[3]);
    else if( a > 50 && a <= 60) callback(null, list[4]);
    else{
        setTimeout(function(){
            callback(null, list[5]);
        }, 5000)
    };
};

console.log("Passed here 1")
maslaxatBering(30, (err, data) => {
    if(err) console.log("ERROR",err);
    else{
        console.log("Javob:", data)
    }
});
console.log("Passed here 2")
// =======================> Promise da async funtion <==========================
// //   ASYNC function
async function maslaxatBering( a) {
    if (typeof a !== 'number') throw new Error( "insert a number");
    else if( a <= 20 ) return list[0];
    else if( a > 20 && a <= 30) return list[1];
    else if( a > 30 && a <= 40) return list[2];
    else if( a > 40 && a <= 50) return list[3];
    else if( a > 50 && a <= 60) return list[4];
    else {
    return new Promise((resolve) => {
    let time = 10;

    const interval = setInterval(() => {
        console.log(`Kutilmoqda: ${time} sekund`);
        time--;

        if (time === 0) {
        clearInterval(interval);
        resolve(list[5]);
        }
    }, 1000);
    });
}
// =======================> await async function <==========================

};
async function run() {
    let javob = await maslaxatBering(70)
    console.log(javob)
    javob = await maslaxatBering(20);
    console.log(javob);
    javob = await maslaxatBering(41);
    console.log(javob);
}
run()

// =======================> then catch  <==========================

// Call via then catch

maslaxatBering(34)
    .then((data) => {
        console.log("Javob:", data)
})
    .catch((err) => {
        console.log("Error:", err)
})
console.log("Passed here 2")






