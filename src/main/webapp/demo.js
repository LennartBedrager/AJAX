document.getElementById("adduser").onclick = addUser;

function addUser(){
    //get data from UI via JS and build the object below
    var newUser = {
  age: 26,
  name: "Bandit Madsen",
  gender: "male",
  email: "bandit@jumpstack.com"
};

var settings = {
    body: JSON.stringify(newUser), // must match 'Content-Type' header
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, PUT, DELETE, etc.    
};

fetch("http://localhost:3000/users", settings)
        .then(res=>res.json())
        .then(data => document.getElementById("name").innerText = data.name)
}







