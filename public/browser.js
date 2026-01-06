console.log("FrontEnd JS ishga tushdi!");

function itemTmeplate(item){
    return `
    <li class="list-group-item item list-group-item-info d-flex align-items-center justify-content-between"
    data-id="${item._id}"  
    >
            <span data_id="<%= item._id%>" class="item-text">${item.reja}</span>
        
        <div>
            <button 
            data_id=${item._id} 
            class="edit-me btn btn-secondary btn-sm mr-1">
            EDIT
            </button>
            <button 
            data_id=${item._id} 
            class="delete-me btn btn-danger btn-sm"> DELETE
            </button>
        </div>

    </li>`
};
// Bu bizga 2tadan kam data bolsa All_Delete button kotinmaydi
function cleanAllButton() {
    const items = document.querySelectorAll(".item");

    const cleanAllBtn = document.getElementById("clean-all");

    if (items.length > 1) {
        cleanAllBtn.style.display = "block";
    } else {
        cleanAllBtn.style.display = "none";
    }
}


let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    //Bu inputga data kirganda uni qabul qilib inputni yangilab inputda focus qolishi uchun
    axios
    .post("/create-item", {
        reja: createField.value[0].toUpperCase() + createField.value.slice(1) 
    }) // createField.value => foydalanuvchi yozgan matn
    .then((tagData) => {
        document.getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTmeplate(tagData.data));
        createField.value = "";
        createField.focus();

        cleanAllButton(); // MUHIM tepada yasagan function buttonni korinmaydigan qiladigan
    })
    .catch((err) => {
        console.log("Iltimos qaytadan urinib koring!");
        
    })
});

// bu yerda biz DELETE ga tegishli API yasab oldik
document.addEventListener("click", function(e) {
    // console.log(e.target);
    
    if(e.target.classList.contains("delete-me")){
        if(confirm("Aniq ochirmoqchimisan?")){
            axios   // Server bilan ma’lumot almashish uchun kutubxona axios → express → DB
            .post("/delete-item", {id: e.target.getAttribute("data-id")})
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();

                cleanAllButton(); // MUHIM tepada yasagan function
                
            })
            .catch((err) => {
                console.log("Iltimos qaytadan urinib koring!");
                
            })
        }
    }

    // malumotlarni edit qilish uchun yasalyatgan API
    if(e.target.classList.contains("edit-me")){    // contains()class bor yoqligini tekshiradi
        let userInput = prompt("O'zgartirish kiriting",
            e.target.parentElement.parentElement.querySelector(".item-text")
            .innerHTML);
        if(userInput) {
            axios.post("/edit-item",{  //1
                id: e.target.getAttribute("data-id"), 
                new_input: userInput,
            })
            .then(() => { //5 
                // console.log(response.data);
                        // agar keyingi ikki qatorni qoymasak qachonki ekran obnavit bolganda edit bolgani korinadi
                        e.target.parentElement.parentElement
                        .querySelector(".item-text").innerHTML = userInput;
                    }).catch((err) => {
                        console.log("Sizning codelarda muammo bor!");
                    })
        }
    }
});

// hamma malumotlarni ALL_DELETE qilish uchun yasalgan API
// Bu hammasini ochirirsam boladi deb soraydi

document.getElementById("clean-all").addEventListener("click", function () {

    const items = document.querySelectorAll(".item");

    if (items.length <= 1) return;

    const listText = Array.from(items)
        .map(item => item.querySelector(".item-text").innerText)
        .join("\n- ");

    const isOk = confirm(
        "Quyidagi ma’lumotlar o‘chiriladi:\n\n- " +
        listText +
        "\n\nDavom etamizmi?"
    );

    if (!isOk) return;

    axios.post("/delete-all", { delete_all: true })
        .then(() => {
            document.location.reload();
        });
});


// bu shunchaki soramasdan xammasini ochirib tashlanadi

// document.getElementById("clean-all").addEventListener("click", function() {
//     axios.post("/delete-all", {delete_all: true}).then((response) => {
//     alert(response.data.state)
        
//             document.location.reload();
//         });
//     });

// document.addEventListener bizga nimaga kerak?
// document.addEventListener("click", function () {
//     console.log("Sahifada bosildi!");
    
// });
document.addEventListener("DOMContentLoaded", cleanAllButton); // shunda ekran yangilanda button korinib turadi