let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let oparations = ['+', '-', '*', '/', '%'];

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerText;

    if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } 
    else if (value === 'AC') {
      display.value = '';
    } 
    else if (value === 'DEL') {
      display.value = display.value.slice(0, -1);
    } 
    else if (oparations.includes(value)) {
      if (oparations.includes(display.value.slice(-1))) {
        
        display.value = display.value.slice(0, -1);
        display.value +=value;
      } else {
        display.value += value;
      }
    } 
    else {
      display.value += value;
    }
  });
});
