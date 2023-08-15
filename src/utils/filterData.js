// Filters the given products based on price and rating ranges
export function applyFilters(products, priceRange, ratingRange) {
    // Use the filter method to iterate through each product and apply filters
    return products.filter(product => {
        // Check if the product's price (either discounted or regular) is within the given price range
        const priceInRange = (product.discountedPrice !== undefined ? product.discountedPrice : product.price) <= priceRange;

        // Check if the product's rating is equal to or higher than the given rating range
        const ratingInRange = product.rating >= ratingRange;

        // Return whether both price and rating are within the specified ranges
        return priceInRange && ratingInRange;
    });
}
