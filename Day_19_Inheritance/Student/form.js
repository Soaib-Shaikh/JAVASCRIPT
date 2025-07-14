document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const student = {
    rollno: document.getElementById("rollno").value.trim(),
    name: document.getElementById("name").value.trim(),
    course: document.getElementById("course").value.trim(),
    html: document.getElementById("html").value,
    css: document.getElementById("css").value,
    javascript: document.getElementById("javascript").value,
    attendence: document.getElementById("attendence").value
  };

  if (Object.values(student).some(val => val === "")) {
    alert("Please fill all fields.");
    return;
  }

  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  this.reset();
});
