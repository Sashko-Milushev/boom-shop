export function generateRatingStars(rating) {
    const maxRating = 5; 
    const starHTML = '&#9733;'; 
    const halfStarHTML = '&#9733;&#189;';

    let stars = '';
    for (let i = 0; i < maxRating; i++) {
        if (i < rating) {
            if (i + 0.5 === rating) {
                stars += halfStarHTML;
            } else {
                stars += starHTML; 
            }
        } else {
            stars += '&#9734;'; 
        }
    }

    return stars;
}
