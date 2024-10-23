const users = [
    { "id": 1, "name": "John Doe", "username": "johndoe", "email": "johndoe@example.com", "address": "123 Main St" },
    { "id": 2, "name": "Jane Doe", "username": "janedoe", "email": "janedoe@example.com", "address": "456 Market St" },
    { "id": 3, "name": "Jim Smith", "username": "jimsmith", "email": "jimsmith@example.com", "address": "789 Oak St" },
    { "id": 4, "name": "Sara Wilson", "username": "sarawilson", "email": "sarawilson@example.com", "address": "111 Maple Ave" },
    { "id": 5, "name": "Bob Johnson", "username": "bobjohnson", "email": "bobjohnson@example.com", "address": "222 Elm St" },
    { "id": 6, "name": "Amy Williams", "username": "amywilliams", "email": "amywilliams@example.com", "address": "333 Pine St" },
    { "id": 7, "name": "Michael Brown", "username": "michaelbrown", "email": "michaelbrown@example.com", "address": "444 Cedar St" },
    { "id": 8, "name": "Emily Davis", "username": "emilydavis", "email": "emilydavis@example.com", "address": "555 Birch St" },
    { "id": 9, "name": "William Martinez", "username": "williammartinez", "email": "williammartinez@example.com", "address": "666 Cedar St" },
    { "id": 10, "name": "Ashley Rodriguez", "username": "ashleyrodriguez", "email": "ashleyrodriguez@example.com", "address": "777 Pine St" }
];

let tbody = document.querySelector("tbody");


users.forEach(user=>{
    let row = document.createElement("tr");

    let id = document.createElement("td");
    id.textContent=user.id;
    row.appendChild(id);

    let name = document.createElement("td");
    name.textContent=user.name;
    row.appendChild(name);

    let userName = document.createElement("td");
    userName.textContent=user.username;
    row.appendChild(userName);

    let email = document.createElement("td");
    email.textContent=user.email;
    row.appendChild(email);

    let address = document.createElement("td");
    address.textContent=user.address;
    row.appendChild(address);

    tbody.appendChild(row);
})


