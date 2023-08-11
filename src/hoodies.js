import { html, render } from './lib.js';
import { createProductCard } from './utils/createCard.js';
import { fetchDataForCategory } from './utils/fetchData.js';
import { applyFilters } from './utils/filterData.js';

export function showHoodies(ctx) {
    const content = html`
      <section class="product-category">
        <h2 class="category-title">Hoodies</h2>
        <p class="category-description">Discover our latest collection of stylish hoodies.</p>
        <div class="filter-and-sort">
            <div class="filter-section">
                <h3>Filter by Price</h3>
                <input type="range" name="price" min="0" max="100" value="100">
                <span class="price-range-label">$0 - $100</span>
            </div>
            <div class="filter-section">
                <h3>Filter by Rating</h3>
                <input type="range" name="rating" min="0" max="5" step="0.1" value="0">
                <span class="rating-range-label">0 - 5</span>
            </div>
        </div>
        <div class="product-grid">
          <!-- Product cards will be added here -->
        </div>
      </section>
    `;

    const container = document.createElement('div');
    render(content, container);

    fetchAndRenderHoodiesProducts(container, ctx);
}

async function fetchAndRenderHoodiesProducts(container, ctx) {
    const hoodiesData = await fetchDataForCategory('hoodies');

    const productGrid = container.querySelector('.product-grid');
    hoodiesData.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });

    setupFilters(hoodiesData, container, ctx, productGrid);
    ctx.render(container); 
}


function setupFilters(products, container, ctx) {
    const priceInput = container.querySelector('input[name="price"]');
    const priceRangeLabel = container.querySelector('.price-range-label');
    const ratingInput = container.querySelector('input[name="rating"]');
    const ratingRangeLabel = container.querySelector('.rating-range-label');

    priceInput.addEventListener('input', () => {
        priceRangeLabel.textContent = `$0 - $${priceInput.value}`;
        applyFiltersAndRender(container, products, parseFloat(priceInput.value), parseFloat(ratingInput.value), priceRangeLabel, ratingRangeLabel);
    });
   
    ratingInput.addEventListener('input', () => {
        ratingRangeLabel.textContent = `Rating: ${ratingInput.value}`;
        applyFiltersAndRender(container, products, parseFloat(priceInput.value), parseFloat(ratingInput.value), priceRangeLabel, ratingRangeLabel);
    });
}


function applyFiltersAndRender(container, products, priceRange, ratingRange, priceRangeLabel) {
    const filteredProducts = applyFilters(products, priceRange, ratingRange);

    const productGrid = container.querySelector('.product-grid');
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}
