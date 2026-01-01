// 1- masala 
//  async va awaitdan foydalanib 1. suv qaynatilmoqda.... 3secunddan keyin  ,   suv qaynadi ,  choyni damlang.... 3 secunddan keyin  ,  choy tayyor boldi deb consolega chiqaring
function kutish(secund){
    return new Promise (resolve => setTimeout(resolve,secund))
};
async function choyDamlash() {
    console.log("1. Suv qaynatilmoqda...");
    await kutish(3000);
    console.log("2. Suv qaynadi, choyni damlang...");

    await kutish(3000);
    console.log("3. Choy tayyot boldi marhamat.");
};
// choyDamlash();
//===============================================================================================

// 2- masala 
// 2 sekund => "Telefon zaryadga qo‘yildi..."
// 3 sekund => "50% zaryad oldi..."
// 2 sekund =>"100% bo‘ldi, zaryaddan olishingiz mumkin!!"
function waiting(sec) {
    return new Promise (resolve => {
        setTimeout(resolve, sec);
})
};
async function phoneCharging() {
    console.log("Sizning telefoningiz zaryadka qoyildi...");
    
    await waiting(2000);
    console.log("Telefon 50% zaryad oldi...");

    await waiting(3000);
    console.log("100% boldi, zaryaddan olishingiz mumkin!");
};
//===============================================================================================
// phoneCharging();

// 3- masala 
// consolega 1.  Serverga murojaat qilindi...
// (2 sekund kutadi)
//  2. Ma'lumot yuklanmoqda...
// (2 sekund kutadi)
// 3. Ma'lumot yuklandi: { id: 1, name: 'Boburbek', status: 'active' } va songida
// consolega  
// console.log("Ma'lumot yuklandi: ", data);
//   console.log(data.name, " Hush kelibsiz");
// ko'rinishida  ishlaydigan cod 
const data = { id: 1, name: 'Boburbek', status: 'active' }
function waiting2 (sec2){
    return new Promise(resolve => {
        setTimeout(resolve, sec2)
    })
};

async function indormation() {
    console.log("1. Serverga murojat qilindi...");
    
    await waiting2(2000);
    console.log("Malumot yuklanmoqda...");

    await waiting2(2000);
    console.log("Malumot yuklandi", data);
    console.log(data.name , "Hush kelibsiz");
};
// indormation()
//===============================================================================================



// try...catch nima?
// 👉 try...catch – bu xatoliklarni (error) tutish va ularni boshqarish uchun ishlatiladi.
// Normal holatda kodda xato bo‘lsa, dastur to‘xtab qoladi. Lekin try...catch ishlatilsa, biz xatoni “ushlab” olamiz va dastur davom etadi.  
// try {
//   let b = c + 5; //  c o'zgaruvchi e'lon qilinmagan
//   console.log(b);
// } catch (error) {
//   console.log("Xatolik yuz berdi:", error.message); // bu yerda c elon qilinmagani uchun tryda xatolik yuz berdi shuning uchun catch ishladi 

// } 
// // Xatolik yuz berdi: c is not defined 




//===============================================================================================
//4- masala  
// quyidagi 5 ta foydalanuvchi orasidan boburbek ismli foydalanuvvchi bor bolsa uni malumotlarini chiqarsin 
// agar yoq bolsa foydalanuvchi malumotlari topilmadi deb chiqarsin 
// bor holatni ham yoq holatni ham  ishlatib koring
// async await try catchlardan foydalaning 
// server foydalanuvchi malumotlarini 1 sekunddan keyin beradi

const malumotlar = [
    { id: 1, name: "Ali", age: 25, city: "Tashkent" },
    { id: 2, name: "Doston", age: 30, city: "Samarkand" },
    { id: 3, name: "Boburbek", age: 22, city: "Busan" },
    { id: 4, name: "Laylo", age: 28, city: "Fergana" },
    { id: 5, name: "Boburbek", age: 27, city: "Bukhara" },
];
console.log(malumotlar[2].name);
function dataWaiting() {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve(malumotlar);
    }, 5000);
    });
}

async function ismMalumotlari(name){
    try{
        const data = await dataWaiting();
        // shu xolatda filter orniga find() methodidan xam foydalansa boladi
        const user = data.find(usersInfo => usersInfo.name.toLowerCase() === name.toLowerCase())
        if (!user) {
            throw new Error ("Foydalanuvchining malumotlari topilmadi!")
        }
        console.log("Foydalanuvchi topildi:", `Ismi: ${user.name} Yoshi: ${user.age} Yashash manzili: ${user.city}`);
    }catch(error){
        console.log("Xatolik yuz berdi:", error.message);
        
    }
    
};
// ismMalumotlari("Boburbek");
//===============================================================================================

//5- masala  Promise bilan ishlash
// 0–9 oralig‘ida tasodifiy son chiqaring.
// Agar u juft bo‘lsa resolve, toq bo‘lsa reject.
// .then() va .catch() bilan natijani chiqaring. 
// Math.floor(2.9)  // 2  → pastga yaxlitlaydi
// Math.ceil(2.1)   // 3  → yuqoriga yaxlitlaydi
// Math.round(2.4)  // 2
// Math.round(2.5)  // 3
function tasodifiySon() {
    return new Promise((resolve, reject) => {
    const raqam = Math.round(Math.random() * 10);

    if (raqam % 2 === 0) {
        resolve(`Juft son chiqdi: ${raqam}`);
    } else {
        reject(`Toq son chiqdi: ${raqam}`);
    }
    });
}

tasodifiySon()
//     .then(natija => console.log(natija))
//     .catch(error => console.log(error));

//===============================================================================================

// 6- masala 
//Bizda getUser degan funksiyamiz bor.
// Bu funksiya serverga ulanayotgandek qilib ishlaydi.
// Agar true berilsa — foydalanuvchi ma’lumotini qaytaradi.
// Agar false berilsa — xato (reject) qaytaradi.
//   bu holatni async / await va try...catch orqali hal qiling
function getUser(isSuccess) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
        resolve({
            id: 1,
            name: "Boburbek",
            age: 22,
            city: "Busan"
        });
        } else {
        reject("Foydalanuvchi ma'lumotlarini olishda xato");
        }
    }, 1000); // server 1 sekunddan keyin javob beradi
});
}

async function foydalanuvchiOlish(isSuccess) {
    try {
    const user = await getUser(isSuccess);
    console.log("Foydalanuvchi:", user);
    } catch (error) {
    console.log("Xatolik:", error);
    }
}
foydalanuvchiOlish(false)


//===============================================================================================

// 7- masala 
// Non tayyorlanmoqda ... 
// 2secunddan song 
// Tuxum qovurilmoqda ...
// Va yana 2 secunddan keyin 
// Nonushta tayyor marhamat, Yoqimli ishtaha 
function kutish(kut) {
    return new Promise(resolve => setTimeout(resolve, kut));
}

async function nonushtaTayyorlash() {
    console.log("Non tayyorlanmoqda ...");

    await kutish(2000);
    console.log("Tuxum qovurilmoqda ...");

    await kutish(2000);
    console.log("Nonushta tayyor, marhamat! Yoqimli ishtaha!");
}
// nonushtaTayyorlash();
//===============================================================================================

// 8- masala  7- masalaga qoshimcha shartlar berilgan  
// Non tayyorlanmoqda ... 
// 2secunddan song 
// Tuxum qovurilmoqda ...
// Va yana 2 secunddan keyin 
// Nonushta tayyor marhamat, Yoqimli ishtaha  

// huddi shu masalaga qoshimcha shart
//Tuxum bor bo‘lsa → “🍳 Tuxum qovurilmoqda...”  yani yuqoridagi jarayon davom etadi 
// Tuxum tugagan bo‘lsa → “🍓 Murabbo bilan non tayyorlanmoqda...”
// Har bosqich orasida 2 soniya kutish.
// Yakunda: “☕️ Nonushta tayyor!”
function kutish3(wait) {
    return new Promise(resolve => setTimeout(resolve, wait));
}

async function tuxumPishirish(tuxumBor) {
    console.log("Non tayyorlanmoqda...");
    await kutish3(2000);

    if (tuxumBor) {
    console.log("Tuxum qovurilmoqda...");
    } else {
        console.log("Tuxum qolmaganligi uchun!");
        
    console.log("Murabbo bilan non tayyorlanmoqda...");
    }

    await kutish3(2000);
    console.log("Nonushta tayyor! Yoqimli ishtaha");
}
// tuxumPishirish(false)

