// Sort the products array in ascending order based on price
export function sortByPriceAsc(products) {
    products.sort((a, b) => {
        const aPrice = a.discountedPrice !== undefined ? a.discountedPrice : a.price;
        const bPrice = b.discountedPrice !== undefined ? b.discountedPrice : b.price;
        return aPrice - bPrice;
    });
}

// Sort the products array in descending order based on price
export function sortByPriceDesc(products) {
    products.sort((a, b) => {
        const aPrice = a.discountedPrice !== undefined ? a.discountedPrice : a.price;
        const bPrice = b.discountedPrice !== undefined ? b.discountedPrice : b.price;
        return bPrice - aPrice;
    });
}

// Sort the products array in ascending order based on rating
export function sortByRatingAsc(products) {
    products.sort((a, b) => a.rating - b.rating);
}

// Sort the products array in descending order based on rating
export function sortByRatingDesc(products) {
    products.sort((a, b) => b.rating - a.rating);
}

// Sort the products array in ascending order based on name
export function sortByNameAsc(products) {
    products.sort((a, b) => a.name.localeCompare(b.name));
}

// Sort the products array in descending order based on name
export function sortByNameDesc(products) {
    products.sort((a, b) => b.name.localeCompare(a.name));
}
