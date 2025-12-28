let products = JSON.parse(localStorage.getItem('products')) || [];
let card = document.querySelector('#product-card .row');

const displayProducts = () => {
    card.innerHTML = '';

    products.forEach((product, index) => {
        let { image, pname, price, description, id } = product;

        let col = document.createElement('div');
        col.classList.add('col-md-3', 'mb-4'); // spacing for grid

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${image}" class="card-img-top" alt="${pname}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${pname}</h5>
                    <h6 class="text-success">₹ ${price}</h6>
                    <p class="card-text flex-grow-1">${description}</p>
                    <button class="btn btn-primary mt-auto addCartBtn" data-id="${id}">
                        <i class="bi bi-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;

        card.appendChild(col);
    });

    // 🔹 Add to Cart click event
    const addButtons = document.querySelectorAll('.addCartBtn');
    addButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            addToCart(id);
        });
    });
};

displayProducts(); 

