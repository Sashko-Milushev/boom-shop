import { createProductCard } from "./createCard.js";

export function loadMoreProducts(products, productGrid, productCounter, currentDisplayedProducts, productsPerPage) {
    const productsToShow = Math.min(productsPerPage, products.length - currentDisplayedProducts);

    const startIndex = currentDisplayedProducts;
    const endIndex = startIndex + productsToShow;

    for (let i = startIndex; i < endIndex; i++) {
        const productCard = createProductCard(products[i]);
        productGrid.appendChild(productCard);
    }

    currentDisplayedProducts += productsToShow;

    productCounter.textContent = `${currentDisplayedProducts} out of ${products.length} products`;
    return currentDisplayedProducts
}

