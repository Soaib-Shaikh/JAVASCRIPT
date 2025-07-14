const tableBody = document.getElementById("employeeTableBody");

function loadEmployees() {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  tableBody.innerHTML = "";
  employees.forEach((employee, index) => {
    const row = `<tr>
      <td>${employee.empid}</td>
      <td>${employee.empname}</td>
      <td>${employee.deparment}</td>
      <td>${employee.salary}</td>
      <td>${employee.attendence}%</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${index})">Delete</button>
        <button class="btn btn-warning btn-sm" onclick="editEmployee(${index})">Edit</button>
      </td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

function deleteEmployee(index) {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  if (confirm("Are you sure you want to delete this employee?")) {
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    loadEmployees();
  }
}

loadEmployees();


