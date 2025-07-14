// const API_URL = 'https://jsonplaceholder.typicode.com/users';
// let Users = [];
// let headings = document.querySelector('#myTable thead');
// let view = document.querySelector('#myTable tbody');

// const getUsers = () => {
//     view.innerHTML = '';

//     Users.map((user)=>{
//         const row = document.createElement('tr');
//         for(let key in user){
//             let cell = document.createElement('td');
//             cell.textContent = user[key];

//             if(typeof user[key] == 'object')
//             {
//                 for(let key2 in user[key]){
//                     let cell2 = document.createElement('td');
//                     cell2.textContent = user[key][key2];
//                     row.appendChild(cell2);
//                 }
//             }
//             row.appendChild(cell);
//         }
//         view.append(row);
//     })
// }

// (()=>{
//     console.log(headings);
//     fetch(API_URL,{
//         method: 'GET',
//     })
//     .then((response)=>{
//         return response.json();
//     })
//     .then((users)=>{
//         Users = users;
//         let user = Users[0];
//         let row = document.createElement('tr');
//         for(let key in user){
//             let cell = document.createElement('th');
//             cell.textContent = key;
//             row.appendChild(cell);
//         }
//         headings.append(row);
//         getUsers();
//     })
//     .catch((error)=>{
//         console.error('Error',error);
//     })
    
// })();

const API_URL = 'https://jsonplaceholder.typicode.com/users';
let Users = [];
let headings = document.querySelector('#myTable thead');
let view = document.querySelector('#myTable tbody');

// Recursive function to flatten nested objects
const flattenObject = (obj, parentKey = '', result = {}) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            flattenObject(obj[key], `${parentKey}${key}.`, result);
        } else {
            result[`${parentKey}${key}`] = obj[key];
        }
    }
    return result;
};

const getUsers = () => {
    view.innerHTML = '';

    Users.map((user) => {
        const row = document.createElement('tr');
        const flatUser = flattenObject(user); // Flatten the object

        for (let key in flatUser) {
            let cell = document.createElement('td');
            cell.textContent = flatUser[key];
            row.appendChild(cell);
        }

        view.append(row);
    });
};

(() => {
    fetch(API_URL, {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((users) => {
        Users = users;

        // Flatten one user to get column headers
        const flatUser = flattenObject(Users[0]);
        const row = document.createElement('tr');
        for (let key in flatUser) {
            let cell = document.createElement('th');
            cell.textContent = key;
            row.appendChild(cell);
        }
        headings.append(row);

        getUsers();
    })
    .catch((error) => {
        console.error('Error', error);
    });
})();
