
/*
D-TASK

Shunday class tuzing tuzing nomi Shop, 
va uni constructoriga 3 hil mahsulot pass bolsin, 
hamda classning 3ta methodi bolsin, biri qoldiq, 
biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin. 
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() 
return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() 
return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

/*
const moment = require("moment")
// const nowTime =  moment().format('MMMM Do YYYY, h:mm:ss a')
const nowTime =  moment().format('h:mm:ss')

class Shop {
    constructor(non, lagmon, cola){
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }
    qoldiq(){
        return `Hozirda soat ${nowTime} ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola mavjud`
    }
    sotish(product, sell){
        if(product === "non"  && sell <= this.non){
            this.non -= sell
        }else if (product === "lagmon" && sell <= this.lagmon){
            this.lagmon -= sell
        }else if(product === "cola" && sell <= this.cola){
            this.cola -= sell
        }else{
            console.log(`Siz kiritgan ${product} miqdori hozir mavjud emas`);
            console.log("Iltimos qoldiqqa qarab maxsulot tanlang");
        }
    }
    olish(product, buy){
        if(product === "non" && buy <= 15){
        this.non += buy
        }else if (product === "lagmon" && buy <= 20){
            this.lagmon += buy
        }else if(product === "cola" && buy <= 100){
            this.cola += buy
        }else{
            console.log(`Uzur buncha kop ${product} qabul qila olmaymiz`);
            console.log("Maxsulotni saqlash muddatiga etibor qaratishimiz xam kerak!");
            
        }
}};


const shop = new Shop(4, 5, 2);
shop.olish("cola", 101)
console.log(shop.qoldiq());
shop.sotish("non", 3);
console.log(shop.qoldiq());
*/

/*
E-TASK

Shunday function tuzing, 
u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin. 
MASALAN: getReverse("hello") return qilsin "olleh"
*/

function  getReverse(word){
    let word2 = [...word]
    const newWord = word2.reverse().join("")
    return newWord[0].toUpperCase() + newWord.slice(1)

}



const result = getReverse("nojravna")
console.log("result: ", result);



const str = "Ayting dostlar nima qildik vatan uchun";
const str1 = "Ayting dostlar nima qildik vatan uchun";
const str2 = "Ayting dostlar nima qildik vatan uchun";

console.log("umuman space yoq",str.split(""));
console.log("bitta space bor",str1.split(" "));
console.log("ikta space bor",str2.split("  "))