import { html, render } from './lib.js';
import { createProductCard } from './utils/createCard.js';
import { fetchDataForCategory } from './utils/fetchData.js';
import { applyFilters } from './utils/filterData.js';
import { loadMoreProducts } from './utils/loadMoreFunctionality.js'

const productsPerPage = 4;
let currentDisplayedProducts = 0
let total_products = 0
let rendered_products = []



export function showHoodies(ctx) {

    const content = html`
    <section class="product-category">
    <div class="category-header">
        <h2 class="category-title">Hoodies</h2>
        <p class="category-description">Discover our latest collection of stylish hoodies.</p>
        <div class="product-counter">0 out of 0 products</div>
        <div class="sorting">
            <h3>Sort by</h3>
            <select id="sorting-dropdown">
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <!-- Add more sorting options if needed -->
            </select>
        </div>
    </div>
    
    <div class="filters">
        <div class="filter-section">
            <h3>Filter by Price</h3>
            <input id="input-range" type="range" name="price" min="0" max="100" value="100">
            <span class="price-range-label">$0 - $100</span>
        </div>
        <div class="filter-section">
            <h3>Filter by Rating</h3>
            <input id="input-range" type="range" name="rating" min="0" max="5" step="0.1" value="0">
            <span class="rating-range-label">0 - 5</span>
        </div>
    </div>
    <div class="product-grid">
        <!-- Product cards will be added here -->
    </div>
    <button class="load-more-button">Load more</button>
</section>


    `;

    const container = document.createElement('div');
    render(content, container);

    fetchAndRenderHoodiesProducts(container, ctx);

}

async function fetchAndRenderHoodiesProducts(container, ctx) {
    const hoodiesData = await fetchDataForCategory('hoodies');

    total_products = hoodiesData.length;

    const productGrid = container.querySelector('.product-grid');
    const productCounter = container.querySelector('.product-counter');

    const loadMoreButton = container.querySelector('.load-more-button');
    let displayedProducts = loadMoreProducts(hoodiesData, productGrid, productCounter, currentDisplayedProducts, productsPerPage);
    currentDisplayedProducts += displayedProducts;
    rendered_products = hoodiesData.slice(0, currentDisplayedProducts)

    loadMoreButton.addEventListener('click', () => {
        displayedProducts = loadMoreProducts(
            hoodiesData,
            productGrid,
            productCounter,
            currentDisplayedProducts,
            productsPerPage
        );

        currentDisplayedProducts = displayedProducts

        if (currentDisplayedProducts >= hoodiesData.length) {
            loadMoreButton.style.display = 'none';
        }

        rendered_products = hoodiesData.slice(0, currentDisplayedProducts)
        setupFilters(rendered_products, container, ctx, productGrid, currentDisplayedProducts, productCounter, total_products);
    });

    rendered_products = hoodiesData.slice(0, currentDisplayedProducts)
    setupFilters(rendered_products, container, ctx, productGrid, currentDisplayedProducts, productCounter, total_products);
    ctx.render(container);
}

function setupFilters(products, container, ctx, productGrid, currentDisplayedProducts, productCounter, total_products) {
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


function applyFiltersAndRender(container, products, priceRange, ratingRange, productCounter, currentDisplayedProducts, total_products) {
    const filteredProducts = applyFilters(rendered_products, priceRange, ratingRange);

    const productGrid = container.querySelector('.product-grid');
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
    const displayedProductsCount = Math.min(currentDisplayedProducts, filteredProducts.length);
    productCounter.textContent = `${displayedProductsCount} out of ${total_products} products`;
}
