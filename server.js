console.log("Web serverni boshlash!!");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err)
    }else {
        user = JSON.parse(data)
    }
})

// 1 expressga kirib kelayotgan malumotlarga aloqador kodlar yoziladi
app.use(express.static("public"));  // (css html)xar qanday browserdan kirib kelayotgah=n malumotlar uchun public foldor ochiq degani
app.use(express.json());   //(json ormatni oqib beradi) kirib kelayotgan json formatdagi datani object holatga ogirib beradi klient va web server ortasidagi data json korinishida boladi
app.use(express.urlencoded({extended: true})); // HTML formadan kelgan ma’lumotni o‘qib beradi <form method="POST"> orqali yuborilgan data uchun

// 2 sessionlarga aloqador Foydalanuvchini eslab qolish login bo‘ldi / bo‘lmadi user ma’lumoti saqlanadi

// 3 views code
app.set("views", "views");  // HTML (ejs) fayllar qayerda joylashganini aytyapmiz yani (view) ichida ejs orqali HTML frontend ni yasaymi 
app.set("view engine", "ejs");   // Qaysi shablon tilidan foydalanishni aytyapmiz 

// 4 Routing code
// app.get("/hello", function(req, res){        
//     res.end(`<h1 style="background: aqua">Hello world  by Alex</h1>`)
// });
// app.get("/gift", function(req, res){        
//     res.end(`<h1 style="background: aqua">Siz sovg'alar bolimidasiz</h1>`)
// });
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"})
})
app.get("/author", (req, res) => {
    res.render("author", {user: user})
})
app.get("/", function (req, res) {
    res.render("harid")
})

/*
app.get → GET so‘rovni ushlaydi
"/" → asosiy sahifa (localhost:3000/)
req → kelgan so‘rov
res → javob
res.end("Hello world") → brauzerga javob yuboradi
*/
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port:${PORT}`)
});


