// <li>Bugatti veyron</li>
//         <li>Porsche spyder 911</li>
//         <li>Dodge charger 1979</li>
//         <li>Gtr skyline r34</li>

let ul = document.getElementById("list-items");

let names=["Bugatti Veyron","Porsche spyder 911","Dodge charger 1979","Gtr skyline r34"];

function showDetails(){
    let div = document.createElement("div");
    let name = event.target.textContent;
    let p = document.createElement("p");
    p.textContent=name;

    div.id="popup-div";

    div.appendChild(p);

    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.id = "close-button";

    div.appendChild(closeButton);

    document.body.appendChild(div);

    closeButton.addEventListener("click",function (){
        document.body.removeChild(div);
    })
}

for(let i =0 ; i<4; i++) {
    let li = document.createElement("li");
    li.class="list-item";
    li.textContent =`${names[i]}`;
    ul.appendChild(li);
    li.addEventListener("click",showDetails);
}


