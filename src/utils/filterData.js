export function applyFilters(products, priceRange, ratingRange) {
    return products.filter(product => {
        const priceInRange = (product.discountedPrice !== undefined ? product.discountedPrice : product.price) <= priceRange;
        const ratingInRange = product.rating >= ratingRange;
        return priceInRange && ratingInRange;
    });
}
