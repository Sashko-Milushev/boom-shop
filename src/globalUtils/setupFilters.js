import { applyFiltersAndRender } from "./applyFilters.js";

export function setupFilters(products, container, ctx, productGrid, currentDisplayedProducts, productCounter, total_products) {
    const priceInput = container.querySelector('input[name="price"]');
    const priceRangeLabel = container.querySelector('.price-range-label');
    const ratingInput = container.querySelector('input[name="rating"]');
    const ratingRangeLabel = container.querySelector('.rating-range-label');


    priceInput.addEventListener('input', () => {
        priceRangeLabel.textContent = `$0 - $${priceInput.value}`;
        applyFiltersAndRender(container, products, parseFloat(priceInput.value), parseFloat(ratingInput.value), productCounter, currentDisplayedProducts, total_products);
    });

    ratingInput.addEventListener('input', () => {
        ratingRangeLabel.textContent = `Rating: ${ratingInput.value}`;
        applyFiltersAndRender(container, products, parseFloat(priceInput.value), parseFloat(ratingInput.value), productCounter, currentDisplayedProducts, total_products);
    });
}
