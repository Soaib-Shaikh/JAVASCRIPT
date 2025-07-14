let empTable = document.querySelector('#empTable tbody');

let employees = JSON.parse(localStorage.getItem('employees')) || [];

function getdata (){
    empTable.innerHTML = "";

    employees.map((emp, index) => {
        let{ename,salary,post,manager,id} = emp;
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${ename}</td>
            <td>${salary}</td>
            <td>${post}</td>
            <td>${manager}</td>
            <td class="d-flex justify-content-between">
                <button onclick="handledelete(${id})" class="btn btn-danger">Delete</button>
                <button onclick="handleEdit(${id})" class="btn btn-warning">Edit</button>
            </td>

        `;

        empTable.appendChild(row);
    });
}

getdata();

const handledelete =(id)=>{
    let newdata = employees.filter((emp)=>{
        return emp.id !== id;
    })

    employees = newdata;
    localStorage.setItem('employees', JSON.stringify(newdata));
    getdata();
}

const handleEdit = (id) => {
    let empIndex = employees.findIndex(emp => emp.id === id);
    if (empIndex === -1) return;

    let emp = employees[empIndex];
    let ename = prompt("Enter employee name:", emp.ename);
    let salary = prompt("Enter salary:", emp.salary);
    let post = prompt("Enter post:", emp.post);
    let manager = prompt("Enter manager:", emp.manager);

    if (ename === null || salary === null || post === null || manager === null) return;
    employees[empIndex] = { ...emp, ename, salary, post, manager };

    localStorage.setItem('employees', JSON.stringify(employees));
    getdata();
}



