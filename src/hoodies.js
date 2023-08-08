import { html } from './lib.js';
import { createProductCard } from './utils/createCard.js';

export function showHoodies(ctx) {
    const content = html`
      <section class="product-category">
        <h2 class="category-title">Hoodies</h2>
        <div class="product-grid">
          <!-- Product cards will be added here -->
        </div>
      </section>
    `;
  
    fetchAndRenderHoodiesProducts(content, ctx);
  }

  async function fetchAndRenderHoodiesProducts(content, ctx) {
    const hoodiesData = await fetchDataForCategory('hoodies'); 
    
    const productGrid = content.querySelector('.product-grid');
    hoodiesData.forEach(product => {
      const productCard = createProductCard(product);
      productGrid.appendChild(productCard);
    });
  
    ctx.render(content);
  }

