import { applyFilters } from "../utils/filterData.js";
import { createProductCard } from "../utils/createCard.js";

export function applyFiltersAndRender(container, products, priceRange, ratingRange, productCounter, currentDisplayedProducts, total_products) {
    const filteredProducts = applyFilters(products, priceRange, ratingRange);

    const productGrid = container.querySelector('.product-grid');
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
    const displayedProductsCount = Math.min(currentDisplayedProducts, filteredProducts.length);
    productCounter.textContent = `${displayedProductsCount} out of ${total_products} products`;
}
