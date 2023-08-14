export function sortByPriceAsc(products) {
    products.sort((a, b) => {
        const aPrice = a.discountedPrice !== undefined ? a.discountedPrice : a.price;
        const bPrice = b.discountedPrice !== undefined ? b.discountedPrice : b.price;
        return aPrice - bPrice;
    });
}


export function sortByPriceDesc(products) {
    products.sort((a, b) => {
        const aPrice = a.discountedPrice !== undefined ? a.discountedPrice : a.price;
        const bPrice = b.discountedPrice !== undefined ? b.discountedPrice : b.price;
        return bPrice - aPrice;
    });
}


export function sortByRatingAsc(products) {
    products.sort((a, b) => a.rating - b.rating);
}


export function sortByRatingDesc(products) {
    products.sort((a, b) => b.rating - a.rating);
}
export function sortByNameAsc(products) {
    products.sort((a, b) => a.name.localeCompare(b.name));
}

export function sortByNameDesc(products) {
    products.sort((a, b) => b.name.localeCompare(a.name));
}