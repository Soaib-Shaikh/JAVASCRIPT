const tableBody = document.getElementById("studentTableBody");

function loadStudents() {
  const students = JSON.parse(localStorage.getItem("students")) || [];

  tableBody.innerHTML = "";
  students.forEach((student, index) => {
    const row = `<tr>
      <td>${student.rollno}</td>
      <td>${student.name}</td>
      <td>${student.course}</td>
      <td>${student.html}</td>
      <td>${student.css}</td>
      <td>${student.javascript}</td>
      <td>${student.attendence}%</td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button></td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

function deleteStudent(index) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    loadStudents();
  }
}

loadStudents();
