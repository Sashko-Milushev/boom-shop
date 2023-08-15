// Function to generate rating stars HTML based on a given rating
export function generateRatingStars(rating) {
    const maxRating = 5;
    let stars = '';

    // Loop through the maxRating to generate stars
    for (let i = 0; i < maxRating; i++) {
        if (i < rating) {
            // Check for half-star rating
            if (i + 0.5 === rating) {
                stars += '<span class="fas fa-star-half-alt"></span>'; // Add half-star
            } else {
                stars += '<span class="fas fa-star"></span>'; // Add full star
            }
        } else {
            stars += '<span class="far fa-star"></span>'; // Add empty star
        }
    }

    return stars; // Return the generated star HTML
}
