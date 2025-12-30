console.log("Jack Ma maslaxatlari")
const list = [
    "1-Yaxshi talaba bo'ling",  //0-20
    "2-Tog'ri boshliq tanlang va koproq hatolar qiling",  //20-30
    "3-Uzingiz uchun ishlashni boshlang",  // 30-40
    "4-Siz kuchli bolgan narsalarni qiling", // 40-50
    "5-Yoshlarga investitsiya qiling",  // 50-60
    "6-Endi dam oling, foydasi yoq",  // 60~
];

// CALLBACK function
/*
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
*/

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


// Call via then catch

// maslaxatBering(34)
//     .then((data) => {
//         console.log("Javob:", data)
// })
//     .catch((err) => {
//         console.log("Error:", err)
// })
// console.log("Passed here 2")

// ================>  <================c




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