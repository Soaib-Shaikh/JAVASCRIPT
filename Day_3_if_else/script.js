document.getElementById('marks-calc').addEventListener('click', () => {
        let GRID = document.getElementById('grid');
        let nameInput = document.getElementById('name');
        let name = nameInput.value;
        let HTML_CSS = parseFloat(document.getElementById('marks1').value);
        let C_CPP  = parseFloat(document.getElementById('marks2').value);
        let Javascript = parseFloat(document.getElementById('marks3').value);

        let totalMarks = HTML_CSS + C_CPP + Javascript;
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
        else{
            document.getElementById('marks-disp').innerHTML = "You are not eligible for the certificate";
            return;
        }
        document.getElementById('marks-disp').innerHTML = grade;
    });

document.getElementById('marks-clear').addEventListener('click', () => {
    document.getElementById('grid').value = '';
    document.getElementById('name').value = '';
    document.getElementById('marks1').value = '';
    document.getElementById('marks2').value = '';
    document.getElementById('marks3').value = '';
    document.getElementById('marks-disp').innerHTML = '';

    document.getElementById('marks-clear') = '';
});