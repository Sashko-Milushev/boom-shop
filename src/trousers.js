import { html, render } from './lib.js';
import { fetchAndRenderProducts } from './globalUtils/fetchAndRender.js';

const productsPerPage = 4;
let currentDisplayedProducts = 0;
const category = 'trousers';


export function showTrousers(ctx) {

    const content = html`
    <section class="product-category">
    <div class="category-header">
        <h2 class="category-title">Trousers</h2>
        <p class="category-description">Discover our latest collection of casual trousers.</p>
        <div class="product-counter">0 out of 0 products</div>
        <div class="sorting">
            <h3>Sort by</h3>
            <select id="sorting-dropdown">
                <option value="price-asc">Price asc.</option>
                <option value="price-desc">Price desc.</option>
                <option value="rating-asc">Rating asc.</option>
                <option value="rating-desc">Rating desc.</option>
                <option value="name-asc">Name asc.</option>
                <option value="name-desc">Name desc.</option>
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

    fetchAndRenderProducts(container, ctx, category, currentDisplayedProducts, productsPerPage);

}