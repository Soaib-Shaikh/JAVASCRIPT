const inputs = document.querySelectorAll('#product input');
let form = document.querySelector('#product');
let products = JSON.parse(localStorage.getItem('products')) || [];
let data = {};

inputs.forEach(input => {
    input.addEventListener('input', e => {
        const { name, value } = e.target;
        data = { ...data, [name]: value };
    });
});

form.addEventListener('submit',(e) => {
    e.preventDefault();
    products.push({ ...data, id: Date.now() });
    localStorage.setItem('products', JSON.stringify(products)); 
    alert('Product added successfully!');
    form.reset();
    inputs[0].focus();
   
})