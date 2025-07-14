let inputs = document.querySelectorAll('input');
let display = document.getElementById('userTable');
let user = {};
let users = [];

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        let { name, value } = e.target;
        user = { ...user, [name]: value };
    });
});

// Form submit
const handleSubmit = () => {
    if (user.email && user.password) {
        let data = localStorage.getItem('users');
        if (data) {
            users = JSON.parse(data);
        }

        if (user.editId) {
            // Update existing user
            users = users.map(u => u.id === user.editId ? { ...user } : u);
        } else {
            // Add new user
            user.id = Date.now();
            users.push(user);
        }

        localStorage.setItem('users', JSON.stringify(users));
        displayData();
        document.querySelector('form').reset();
        user = {}; // Reset user object
    } else {
        alert('Please fill in all fields');
    }
};

// Display table data
const displayData = () => {
    let data = localStorage.getItem('users');
    display.innerHTML = '';
    if (data) {
        users = JSON.parse(data);
        users.forEach((user, index) => {
            let { id, email, password } = user;
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
    }
};

// Delete function
const handleDelete = (id) => {
    users = users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Are You want to delete this user?');
    displayData();
};

// Edit function
const handleEdit = (id) => {
    const editUser = users.find(user => user.id === id);
    if (editUser) {
        document.querySelector('input[name="email"]').value = editUser.email;
        document.querySelector('input[name="password"]').value = editUser.password;
        user = { ...editUser, editId: id }; // Marking for edit
        alert('Are you sure you want to edit this user?');
    }
};

// Initial display when page loads
displayData();
