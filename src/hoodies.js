import { html, render } from './lib.js';
import { createProductCard } from './utils/createCard.js';
import { fetchDataForCategory } from './utils/fetchData.js';

export function showHoodies(ctx) {
    const content = html`
      <section class="product-category">
        <h2 class="category-title">Hoodies</h2>
        <p class="category-description">Discover our latest collection of stylish hoodies.</p>
        <div class="filter-and-sort">
            <!-- Filter and sorting components will be added here -->
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

    ctx.render(container); // Render the container with the products
}

