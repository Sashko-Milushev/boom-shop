import { applyFiltersAndRender } from "./applyFilters.js";

// Set up filters for the products
export function setupFilters(products, container, ctx, productGrid, currentDisplayedProducts, productCounter, total_products) {
    // Get the price input, price range label, rating input, and rating range label elements
    const priceInput = container.querySelector('input[name="price"]');
    const priceRangeLabel = container.querySelector('.price-range-label');
    const ratingInput = container.querySelector('input[name="rating"]');
    const ratingRangeLabel = container.querySelector('.rating-range-label');

    // Add an input event listener to the price input
    priceInput.addEventListener('input', () => {
        priceRangeLabel.textContent = `$0 - $${priceInput.value}`;
        applyFiltersAndRender(container, products, parseFloat(priceInput.value), parseFloat(ratingInput.value), productCounter, currentDisplayedProducts, total_products);
    });

    // Add an input event listener to the rating input
    ratingInput.addEventListener('input', () => {
        ratingRangeLabel.textContent = `Rating: ${ratingInput.value}`;
        applyFiltersAndRender(container, products, parseFloat(priceInput.value), parseFloat(ratingInput.value), productCounter, currentDisplayedProducts, total_products);
    });
}
