import { sortByNameAsc, sortByNameDesc, sortByPriceAsc, sortByPriceDesc, sortByRatingAsc, sortByRatingDesc } from "../utils/sorting.js";
import { applyFiltersAndRender } from "./applyFilters.js";

// Apply sorting to the products array and render the sorted and filtered products
export function applySortingAndRender(container, products, sortingOption, productGrid, productCounter, currentDisplayedProducts, total_products) {
    // Get the price and rating input elements and their corresponding labels
    const priceInput = container.querySelector('input[name="price"]');
    const priceRangeLabel = container.querySelector('.price-range-label');
    const ratingInput = container.querySelector('input[name="rating"]');
    const ratingRangeLabel = container.querySelector('.rating-range-label')

    // Apply sorting based on the selected sorting option
    if (sortingOption === 'price-asc') {
        sortByPriceAsc(products);
    } else if (sortingOption === 'price-desc') {
        sortByPriceDesc(products);
    } else if (sortingOption === 'rating-asc') {
        sortByRatingAsc(products);
    } else if (sortingOption === 'rating-desc') {
        sortByRatingDesc(products);
    } else if (sortingOption === 'name-asc') {
        sortByNameAsc(products);
    } else if (sortingOption === 'name-desc') {
        sortByNameDesc(products);
    }

    // Apply filters with the updated products array and render the results
    applyFiltersAndRender(container, products, parseFloat(priceInput.value), parseFloat(ratingInput.value), productCounter, currentDisplayedProducts, total_products);
}
