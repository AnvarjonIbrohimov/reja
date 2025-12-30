
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