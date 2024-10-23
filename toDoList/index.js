let add = document.getElementById("add");

let ul = document.querySelector("ul");

function loadItems(){
    const items= JSON.parse(localStorage.getItem("items"))||[];
    items.forEach(item=>{
        createList(item.text);
    })
}

function deleteItem(e){
    let li = e.target.closest("li");
    li.remove();
    updateLocalStorage();
}

function createList(item){
    let li = document.createElement("li");
    let deleteButton  = document.createElement("button");
    let editButton = document.createElement("button");

    deleteButton.textContent="Delete";
    editButton.textContent="Edit";

    deleteButton.addEventListener("click",deleteItem);
    editButton.addEventListener("click",editItem);


    li.textContent=item;
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    ul.appendChild(li);
}

function editItem(event){
let li = event.target.closest("li");
let inputField = document.createElement("input");
inputField.value= li.firstChild.textContent;

    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    li.textContent='';
    li.appendChild(inputField);
    li.appendChild(saveButton);

        saveButton.addEventListener("click", function (){
        let deleteButton = document.createElement("button");
        let editButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        editButton.textContent = "Edit";

        deleteButton.addEventListener("click", deleteItem);
        editButton.addEventListener("click", editItem);

        li.textContent=inputField.value;
        li.appendChild(deleteButton);
        li.appendChild(editButton);
            updateLocalStorage();

        })
}

function addItem(e){
    let input = document.getElementById("input").value;

    if(input){

        createList(input)
        updateLocalStorage();
        document.getElementById("input").value="";
    }
}

function updateLocalStorage(){
    const items=[];
    ul.querySelectorAll("li").forEach(li=>{
        items.push({text:li.firstChild.textContent});
    })
    localStorage.setItem("items",JSON.stringify(items));
}

add.addEventListener("click",addItem);
loadItems();
