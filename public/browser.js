console.log("FrontEnd JS ishga tushdi!");

function itemTmeplate(item){
    return `
    <li
        class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
    >
        <span data_id="<%= item._id%>" class="item-text">${item.reja}</span>
        
        <div>
            <button 
            data_id=${item._id} 
            class="edit-me btn btn-secondary btn-sm mr-1">
            Ozgartirish
            </button>
            <button 
            data_id=${item._id} 
            class="delete-me btn btn-danger btn-sm">Ochirish
            </button>
        </div>

    </li>`
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();


    axios
    .post("/create-item", {reja: createField.value})
    .then((tagData) => {
        document.getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTmeplate(tagData.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan urinib koring!");
        
    })
})