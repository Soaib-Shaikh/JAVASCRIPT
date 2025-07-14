document.getElementById("employeeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const employee = {
    empid: document.getElementById("empid").value.trim(),
    empname: document.getElementById("empname").value.trim(),
    department: document.getElementById("department").value.trim(),
    salary: document.getElementById("salary").value,
    attendence: document.getElementById("attendence").value
  };

  if (Object.values(employee).some(val => val === "")) {
    alert("Please fill all fields.");
    return;
  }

  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  employees.push(employee);
  localStorage.setItem("employees", JSON.stringify(employees));

  this.reset();
});
