// Menu toggle pour la version mobile
const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.getElementById('menu-items');

menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});

// Filtrage des produits par catégorie et par prix
const filterSelect = document.getElementById('category');
const priceRange = document.getElementById('price-range');
const products = document.querySelectorAll('.product');

filterSelect.addEventListener('change', filterProducts);
priceRange.addEventListener('input', filterProducts);

function filterProducts() {
    const category = filterSelect.value;
    const maxPrice = priceRange.value;

    products.forEach(product => {
        // Récupération du prix en dollars (sans ETH)
        const priceText = product.querySelector('p').innerText;
        const priceDollar = parseInt(priceText.split(' ')[0].replace('$', ''));

        // Vérification de la catégorie et du prix
        if ((category === 'all' || product.dataset.category === category) && priceDollar <= maxPrice) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
