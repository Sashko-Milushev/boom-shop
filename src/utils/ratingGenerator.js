export function generateRatingStars(rating) {
    const maxRating = 5; // Assuming the maximum rating is 5
    const starHTML = '&#9733;'; // Unicode character for a star
    const halfStarHTML = '&#9733;&#189;'; // Unicode character for half-filled star

    let stars = '';
    for (let i = 0; i < maxRating; i++) {
        if (i < rating) {
            if (i + 0.5 === rating) {
                stars += halfStarHTML; // Add half-filled star for decimal ratings
            } else {
                stars += starHTML; // Add filled star for whole ratings
            }
        } else {
            stars += '&#9734;'; // Add empty star for ratings below i
        }
    }

    return stars;
}
