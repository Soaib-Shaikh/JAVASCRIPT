// let users = JSON.parse(localStorage.getItem('users')) || [];
// let user = {};
// let inputs = document.querySelectorAll('input');
// let display = document.querySelector('table tbody');
// let editIndex = null;

// inputs.forEach((input) => {
//     input.addEventListener('input', (e) => {
//         const { name, value } = e.target;
//         user = { ...user, [name]: value };
//     })
// })

// const handleSubmit = () => {
//     if (editIndex === null) {
//         users.push({ ...user, id: Date.now() });
//     }
//     else {
//         users = users.map((u) => {
//             if (u.id === editIndex) {
//                 return { ...user, id: editIndex }; 
//             } else {
//                 return u; 
//             }
//         });
//         editIndex = null;
//     }
//     document.querySelector('form').reset();
//     localStorage.setItem(JSON.stringify(users));
//     viewData();
// }

// const viewData = () => {
//     display.innerHTML = '';
//     users.forEach((user, index) => {
//         const { id, email, password } = user
//         let row = document.createElement('tr');

//         row.innerHTML = `
//             <td>${index + 1}</td>
//             <td>${email}</td>
//             <td>${password}</td>
//             <td>
//                 <button onclick="handleDelete(${id});" class="btn btn-danger">Delete</button>
//                 <button onclick="handleEdit(${id});" class="btn btn-warning">Edit</button>
//             </td>
//         `
//         display.appendChild(row);
//     })
// }

// const handleDelete = (id) => {
//     users = users.filter(users.id == id);
//     localStorage.setItem(JSON.stringify(users));
//     alert('Are You want to delete this user?');
//     viewData();
// }

// const handleEdit = (id) => {

// }


let users = JSON.parse(localStorage.getItem('users')) || [];
let user = {};
let inputs = document.querySelectorAll('input');
let display = document.querySelector('table tbody');
let editIndex = null;

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        const { name, value } = e.target;
        user = { ...user, [name]: value };
    });
});

const handleSubmit = () => {
    if (editIndex === null) {
        users.push({ ...user, id: Date.now() });
    }
    else {
        users = users.map((value) => {
            if (value.id === editIndex) {
                return { ...user, id: editIndex }; 
            } else {
                return value; 
            }
        });
        editIndex = null;
    }

    document.querySelector('form').reset();
    localStorage.setItem('users', JSON.stringify(users));
    user = {};
    viewData();
};

const viewData = () => {
    display.innerHTML = '';
    users.forEach((user, index) => {
        const { id, email, password } = user;
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td>
                <button onclick="handleDelete(${id})" class="btn btn-danger btn-sm">Delete</button>
                <button onclick="handleEdit(${id})" class="btn btn-warning btn-sm">Edit</button>
            </td>
        `;
        display.appendChild(row);
    });
};

const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this user?')) {
        users = users.filter(u => u.id !== id);
        localStorage.setItem('users', JSON.stringify(users));
        viewData();
    }
};

const handleEdit = (id) => {
    alert('Are you sure you want to delete this user?');
    const newUser = users.find(user => user.id === id);
    if (newUser) {
        inputs.forEach((input) => {
            input.value = newUser[input.name] || '';
        });
        user = { ...newUser };
        editIndex = id;
    }
};

viewData();
