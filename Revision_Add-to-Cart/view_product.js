let products = JSON.parse(localStorage.getItem('products')) || [];
const productTbl = document.querySelector('#productTbl tbody');
let form = document.querySelector('#product');
let editId = localStorage.getItem('editId'); 

const displayProducts = () => {
    productTbl.innerHTML = '';

    products.forEach((product,index) => {
    let { image, pname, price, description, id } = product;

    let row = document.createElement('tr');

    row.innerHTML = `
         <td>${index + 1}</td>
         <td>
            <img src="${image}" alt="${pname}" width="70" height="70"/>
         </td>
         <td>${pname}</td>
         <td>${price}</td>
         <td>${description}</td>
         <td class="d-flex gap-3 mt-3">
            <button class="btn btn-danger" onclick="deleteProduct(${id})" >Delete</button>
            <button class="btn btn-warning" onclick="editProduct(${id})" >Edit</button>
        </td>
    `;

    productTbl.appendChild(row);

})
};

displayProducts();


const deleteProduct = (id) => {
    products = products.filter(product => product.id != id);
    localStorage.setItem('products', JSON.stringify(products)); 
    displayProducts();
}
    
const editProduct = (id) => {
    products = products.find(product => product.id == id);
    localStorage.setItem('editProduct', JSON.stringify(products));
    window.location.href = 'edit_product.html';
}