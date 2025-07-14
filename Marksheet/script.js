document.getElementById('marks-calc').addEventListener('click', () => {
        let nameInput = document.getElementById('name');
        let name = nameInput.value;
        let HTML = parseFloat(document.getElementById('marks1').value);
        let CSS = parseFloat(document.getElementById('marks2').value);
        let Javascript = parseFloat(document.getElementById('marks3').value);

        let totalMarks = HTML + CSS + Javascript;
        let avgMarks = totalMarks / 3;
        let grade = '';

        if(avgMarks >= 90){
            grade = 'A+';
        }
        else if(avgMarks >= 80){
            grade = 'A';
        }
        else if(avgMarks >= 70){
            grade = 'B+';
        }
        else if(avgMarks >= 60){
            grade = 'B';
        }
        else if(avgMarks >= 50){
            grade = 'C+';
        }
        else if(avgMarks >= 40){
            grade = 'C';
        }
        else if(avgMarks >= 33){
            grade = 'D';
        } else {
            grade = 'Fail';
        }
        document.getElementById('marks-disp').innerText = grade;
    });