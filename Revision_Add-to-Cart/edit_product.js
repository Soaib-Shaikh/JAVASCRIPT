const inputs = document.querySelectorAll('#product input');
let form = document.querySelector('#product');
let products = JSON.parse(localStorage.getItem('products')) || [];
let data = JSON.parse(localStorage.getItem('editProduct')) || {};

inputs.forEach(input => {
    input.value = data[input.name] || '';
})

inputs.forEach(input => {
    input.addEventListener('input', e => {
        const { name, value } = e.target;
        data = { ...data, [name]: value };
    });
});

form.addEventListener('submit',(e) => {
    e.preventDefault(); 
    products = products.map(value => {
        if(value.id == data.id){
            return data;
        }
        return value;
    })
    localStorage.setItem('products', JSON.stringify(products)); 
    alert('Product updated successfully!');
    window.location.href = 'view-product.html';
})