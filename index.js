// function submitData(name, email) {
//     const configurationObject = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             'name': name,
//             'email': email
//         })
//     }

//     fetch('http://localhost:3000/users', configurationObject)
//     .then(res => res.json())
//     .then(body => addNewContact(body.id))

//     .catch(function (error) {
//         alert("Bad things!");
//         console.log(error.message);
//     });
// }

// function addNewContact(newID) {
//     document.getElementsByTagName('body')[0].innerHTML = newID;
//     document.body.append(message)
// }

// submitData('name', 'name@name.com')

const userURL = "http://localhost:3000/users"

let formData = {
    name: "Steve",
    email: "steve@steve.com"
};

const confObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData),
};

function submitData() {
    return fetch(userURL, confObj)
    .then(res => res.json())
    .then(getId)
    .catch(errorMessage)
};

const bodyTag = document.querySelector('body')

function getId(object) {
    document.body.innerHTML = object.id
    const li = document.createElement('li')
    li.innerText = object.id
    bodyTag.appendChild(li)
}

function errorMessage(error) {
    document.body.innerHTML = error.message
    const newLi = document.createElement('li')
    newLi.innerText = error.message
    bodyTag.appendChild(newLi)
}
