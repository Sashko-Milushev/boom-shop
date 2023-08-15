import { createProductCard } from "./createCard.js";

// Function to load more products onto the page
export function loadMoreProducts(products, productGrid, productCounter, currentDisplayedProducts, productsPerPage) {
    // Calculate the number of products to show in this load
    const productsToShow = Math.min(productsPerPage, products.length - currentDisplayedProducts);

    // Determine the start and end indexes for the products to be displayed
    const startIndex = currentDisplayedProducts;
    const endIndex = startIndex + productsToShow;

    // Loop through the products within the specified range and create product cards
    for (let i = startIndex; i < endIndex; i++) {
        const productCard = createProductCard(products[i]);
        productGrid.appendChild(productCard);
    }

    // Update the counter for displayed products
    currentDisplayedProducts += productsToShow;

    // Update the product counter text
    productCounter.textContent = `${currentDisplayedProducts} out of ${products.length} products`;

    // Return the updated count of displayed products
    return currentDisplayedProducts;
}
