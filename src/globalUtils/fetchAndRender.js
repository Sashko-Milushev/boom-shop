import { applySortingAndRender } from "./applySorting.js";
import { setupFilters } from "./setupFilters.js";
import {fetchDataForCategory} from '../utils/fetchData.js';
import { loadMoreProducts } from "../utils/loadMoreFunctionality.js";


export async function fetchAndRenderProducts(container, ctx, category, currentDisplayedProducts, productsPerPage) {
    const productsData = await fetchDataForCategory(category);

    const total_products = productsData.length;

    const productGrid = container.querySelector('.product-grid');
    const productCounter = container.querySelector('.product-counter');
    const sortingDropdown = container.querySelector('#sorting-dropdown');

    const loadMoreButton = container.querySelector('.load-more-button');
    let displayedProducts = loadMoreProducts(productsData, productGrid, productCounter, currentDisplayedProducts, productsPerPage);
    currentDisplayedProducts += displayedProducts;
    let rendered_products = productsData.slice(0, currentDisplayedProducts)

    loadMoreButton.addEventListener('click', () => {
        displayedProducts = loadMoreProducts(
            productsData,
            productGrid,
            productCounter,
            currentDisplayedProducts,
            productsPerPage
        );

        currentDisplayedProducts = displayedProducts

        if (currentDisplayedProducts >= productsData.length) {
            loadMoreButton.style.display = 'none';
        }

        rendered_products = productsData.slice(0, currentDisplayedProducts)
        setupFilters(rendered_products, container, ctx, productGrid, currentDisplayedProducts, productCounter, total_products);
    });

    rendered_products = productsData.slice(0, currentDisplayedProducts)
    setupFilters(rendered_products, container, ctx, productGrid, currentDisplayedProducts, productCounter, total_products);
    applySortingAndRender(container, rendered_products, sortingDropdown.value, productGrid, productCounter, currentDisplayedProducts, total_products);

    sortingDropdown.addEventListener('change', () => {
        applySortingAndRender(container, rendered_products, sortingDropdown.value, productGrid, productCounter, currentDisplayedProducts, total_products);
    });
    ctx.render(container);

}