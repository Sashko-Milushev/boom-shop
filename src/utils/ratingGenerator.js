export function generateRatingStars(rating) {
    const maxRating = 5;
    let stars = '';

    for (let i = 0; i < maxRating; i++) {
        if (i < rating) {
            if (i + 0.5 === rating) {
                stars += '<span class="fas fa-star-half-alt"></span>';
            } else {
                stars += '<span class="fas fa-star"></span>';
            }
        } else {
            stars += '<span class="far fa-star"></span>';
        }
    }

    return stars;
}
