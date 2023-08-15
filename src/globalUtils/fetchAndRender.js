import { applySortingAndRender } from "./applySorting.js";
import { setupFilters } from "./setupFilters.js";
import { fetchDataForCategory } from '../utils/fetchData.js';
import { loadMoreProducts } from "../utils/loadMoreFunctionality.js";

// Fetches and renders products for the given category
export async function fetchAndRenderProducts(container, ctx, category, currentDisplayedProducts, productsPerPage) {
    // Fetch product data for the given category
    const productsData = await fetchDataForCategory(category);

    // Calculate the total number of products
    const total_products = productsData.length;

    // Get the product grid and product counter elements
    const productGrid = container.querySelector('.product-grid');
    const productCounter = container.querySelector('.product-counter');

    // Get the sorting dropdown element
    const sortingDropdown = container.querySelector('#sorting-dropdown');

    // Get the load more button element
    const loadMoreButton = container.querySelector('.load-more-button');

    // Load and display initial products
    let displayedProducts = loadMoreProducts(productsData, productGrid, productCounter, currentDisplayedProducts, productsPerPage);
    currentDisplayedProducts += displayedProducts;
    let rendered_products = productsData.slice(0, currentDisplayedProducts);

    // Add a click event listener to the load more button
    loadMoreButton.addEventListener('click', () => {
        displayedProducts = loadMoreProducts(productsData, productGrid, productCounter, currentDisplayedProducts, productsPerPage);

        currentDisplayedProducts = displayedProducts;

        if (currentDisplayedProducts >= productsData.length) {
            loadMoreButton.style.display = 'none';
        }

        rendered_products = productsData.slice(0, currentDisplayedProducts);
        setupFilters(rendered_products, container, ctx, productGrid, currentDisplayedProducts, productCounter, total_products);
    });

    rendered_products = productsData.slice(0, currentDisplayedProducts);
    setupFilters(rendered_products, container, ctx, productGrid, currentDisplayedProducts, productCounter, total_products);
    applySortingAndRender(container, rendered_products, sortingDropdown.value, productGrid, productCounter, currentDisplayedProducts, total_products);

    // Add a change event listener to the sorting dropdown
    sortingDropdown.addEventListener('change', () => {
        applySortingAndRender(container, rendered_products, sortingDropdown.value, productGrid, productCounter, currentDisplayedProducts, total_products);
    });

    // Render the content
    ctx.render(container);
}
