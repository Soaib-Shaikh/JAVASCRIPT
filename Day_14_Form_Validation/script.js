let form = document.getElementById('login-form');
let inputs = document.querySelectorAll('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let errors = {};
    inputs.forEach((input)=>{
        if(input.value.trim() === ''){
            let name = input.name;
            let value = input.value;

            errors = {...errors, [name]:value};
            document.getElementById(`success-${input.name}`).innerText= '';
            document.getElementById(`error-${input.name}`).innerText= `${input.name} is required.`;
        }
        else{
            document.getElementById(`error-${input.name}`).innerText= '';
            document.getElementById(`success-${input.name}`).innerText= `${input.name} is success.`
        }
    })
    if(Object.keys(errors).length==0){
        form.submit();
    }
    
})