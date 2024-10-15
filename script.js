document.addEventListener('DOMContentLoaded', function() {    
    const categorySelect = document.getElementById('category-filter');
    const productCards = document.querySelectorAll('.product-card');
    const priceRange = document.querySelector('.price-slider');
    const priceDisplay = document.querySelector('#price-display');

    priceRange.addEventListener('input', function() {
        const maxPrice = parseInt(priceRange.value); 
        priceDisplay.textContent = `$${maxPrice}`;
        filterProductsByPrice(maxPrice); 
    });

    function filterProductsByPrice(maxPrice) {
        productCards.forEach(card => {
            const productPrice = parseInt(card.getAttribute('data-price')); 
            card.style.display = productPrice <= maxPrice ? 'block' : 'none';
        });
    }

    
    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value; 
        productCards.forEach(card => {
            const isCategoryMatch = selectedCategory === 'all-categories' || card.classList.contains(selectedCategory);
            
            card.style.display = isCategoryMatch ? 'block' : 'none';
        });
    });
});
