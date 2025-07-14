class Employee {
      constructor(empid, empname, department, salary, attendence) {
        this.empid = empid;
        this.empname = empname;
        this.department = department;
        this.salary = parseFloat(salary);
        this.attendence = attendence;
      }

      display() {
        console.log(`ID: ${this.empid}, Name: ${this.empname}, Dept: ${this.department}, Salary: ₹${this.salary}, Attendance: ${this.attendence}%`);
      }
    }

    class Person  extends Employee {
      constructor(empid, empname, department, salary, attendence) {
        super(empid, empname, department, salary, attendence);
      }

      employeeInfo() {
        super.display();
      }
    }

    const employees = [];

    function addEmployee() {
      const empid = document.getElementById("empid").value.trim();
      const empname = document.getElementById("empname").value.trim();
      const department = document.getElementById("department").value.trim();
      const salary = document.getElementById("salary").value.trim();
      const attendence = document.getElementById("attendence").value.trim();

      if (!empid || !empname || !department || !salary || !attendence) {
        alert("Please fill all fields.");
        return;
      }

      const employee = new Person(empid, empname, department, salary, attendence);
      employees.push(employee);
      displayEmployees();
      clearForm();
    }

    function formatSalary(amount) {
      return "₹" + parseFloat(amount).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }

    function displayEmployees() {
      const tableBody = document.getElementById("employeeTableBody");
      tableBody.innerHTML = "";

      employees.forEach((employee, index) => {
        const row = `<tr>
            <td class="highlight">${employee.empid}</td>
            <td>${employee.empname}</td>
            <td>${employee.department}</td>
            <td>${formatSalary(employee.salary)}</td>
            <td>${employee.attendence}%</td>
            <td><button class="btn btn-danger btn-sm" onclick="deleteEmployee(${index})">Delete</button></td>
        </tr>`;
        tableBody.innerHTML += row;
      });
    }

    function deleteEmployee(index) {
      if (confirm("Are you sure you want to delete this employee?")) {
        employees.splice(index, 1);
        displayEmployees();
      }
    }

    function clearForm() {
      document.getElementById("employeeForm").reset();
    }