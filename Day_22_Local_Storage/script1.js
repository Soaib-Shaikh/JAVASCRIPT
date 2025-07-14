let inputs = document.querySelectorAll('input');
let display = document.querySelector('table tbody');
let user = {};
const users = [];
let editId = null; // to track edit mode

// Listen to input changes
inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        const { name, value } = e.target;
        user = { ...user, [name]: value };
    });
});

// Submit or Update
const handleSubmit = () => {
    if (editId !== null) {
        // Update mode
        const index = users.findIndex((u) => u.id === editId);
        if (index !== -1) {
            users[index] = { ...user, id: editId };
            editId = null;
        }
    } else {
        // New entry
        users.push({ ...user, id: Date.now() });
    }

    document.querySelector('form').reset();
    document.querySelector("input[name='email']").focus();
    user = {}; // clear current user
    displayData();
};

// Display all users
const displayData = () => {
    display.innerHTML = '';
    users.forEach((user, index) => {
        const { id, email, password } = user;
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="handleDelete(${id})">Delete</button>
                <button class="btn btn-warning btn-sm" onclick="handleEdit(${id})">Edit</button>
            </td>
        `;
        display.appendChild(row);
    });
};

// Delete user
const handleDelete = (id) => {
    const index = users.findIndex((u) => u.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        displayData();
        alert('Are you sure want to delete this user data?');
    }
};

// Edit user
const handleEdit = (id) => {
    const userToEdit = users.find((u) => u.id === id);
    if (userToEdit) {
        inputs.forEach((input) => {
            input.value = userToEdit[input.name];
        });
        user = { ...userToEdit };
        alert('Are you sure want to edit this user data?');
        editId = id;
    }
};

