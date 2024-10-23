let add = document.getElementById("add");

let ul = document.querySelector("ul");

function deleteItem(e){
    let li = e.target.closest("li");
    li.remove();
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
    })
}

function addItem(e){
    let input = document.getElementById("input").value;

    if(input){

        let li = document.createElement("li");
        let deleteButton  = document.createElement("button");
        let editButton = document.createElement("button");

        deleteButton.textContent="Delete";
        editButton.textContent="Edit";

        deleteButton.addEventListener("click",deleteItem);
        editButton.addEventListener("click",editItem);


        li.textContent=input;
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        ul.appendChild(li);

        document.getElementById("input").value="";
    }
}

add.addEventListener("click",addItem);

