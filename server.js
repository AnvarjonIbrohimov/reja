const http = require("http");
const mongodb = require("mongodb");

let db;

const connectionString = 
    "mongodb+srv://201946044_db_user:UZr1sMbZQevfJXh4@cluster0.4lrlkyg.mongodb.net/Reja?appName=Cluster0";


// mongoose.connect() ==> MongoDB bazaga ulanish uchun ishlatiladi.

mongodb.connect(connectionString, {
    useNewUrlParser: true,      // URL ni yangi parser bilan o‘qiydi
    useUnifiedTopology: true        // MongoDB bilan barqaror ulanishni ta’minlaydi
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succed");
        module.exports = client;
        const app = require("./app")
        const server = http.createServer(app);  // http server yaratib beryabdi
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port:${PORT}, http://localhost:${PORT}`)
        });
    }
});





