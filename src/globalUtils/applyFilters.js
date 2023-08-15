import { applyFilters } from "../utils/filterData.js";
import { createProductCard } from "../utils/createCard.js";

// Apply filters to the products array and render the filtered products
export function applyFiltersAndRender(container, products, priceRange, ratingRange, productCounter, currentDisplayedProducts, total_products) {
    // Apply filters to the products array based on price and rating ranges
    const filteredProducts = applyFilters(products, priceRange, ratingRange);

    // Get the product grid element from the container
    const productGrid = container.querySelector('.product-grid');
    // Clear the existing content in the product grid
    productGrid.innerHTML = '';
    
    // Loop through each filtered product and create product cards
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });

    // Determine the count of displayed products based on filters
    const displayedProductsCount = Math.min(currentDisplayedProducts, filteredProducts.length);
    // Update the product counter with the count of displayed products and total products
    productCounter.textContent = `${displayedProductsCount} out of ${total_products} products`;
}
