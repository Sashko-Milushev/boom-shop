// Import necessary functions
import { generateRatingStars } from "./ratingGenerator.js";
import { showSuccessAlert } from "./cartAlert.js";

// Function to create a product card element
export function createProductCard(product) {
    // Create a div element for the product card
    const productCard = document.createElement('div');
    productCard.classList.add('product-card'); // Add CSS class

    // Create a div for the image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container'); // Add CSS class
    const productImage = document.createElement('img');
    productImage.src = product.imageUrl; // Set image URL
    productImage.alt = product.name; // Set image alt attribute

    // Append the product image to the image container
    imageContainer.appendChild(productImage);

    // Create a heading for the product name
    const productName = document.createElement('h3');
    productName.textContent = product.name;

    // Create a paragraph for the short product description
    const productShortDescription = document.createElement('p');
    productShortDescription.classList.add('short-description'); // Add CSS class
    productShortDescription.textContent = product.shortDescription;

    // Create a paragraph for the product price
    const productPrice = document.createElement('p');
    productPrice.classList.add('price'); // Add CSS class
    if (product.discountedPrice) {
        // If there's a discounted price, create elements for both prices
        const regularPrice = document.createElement('span');
        regularPrice.classList.add('discounted-price'); // Add CSS class
        regularPrice.textContent = `$${product.price}`; // Set regular price

        const discountedPrice = document.createElement('span');
        discountedPrice.classList.add('regular-price'); // Add CSS class
        discountedPrice.textContent = `$${product.discountedPrice}`; // Set discounted price

        // Append prices to the product price element
        productPrice.appendChild(discountedPrice);
        productPrice.appendChild(document.createTextNode(' '));
        productPrice.appendChild(regularPrice);
    } else {
        // If no discount, set the regular price
        productPrice.textContent = `$${product.price}`;
    }

    // Create a div for product rating and add-to-cart button
    const productRatingAndButton = document.createElement('div');
    productRatingAndButton.classList.add('rating-and-button'); // Add CSS class

    // Create a div for displaying product rating
    const productRating = document.createElement('div');
    productRating.classList.add('rating'); // Add CSS class
    productRating.innerHTML = generateRatingStars(product.rating); // Generate rating stars

    // Create a button for adding the product to the cart
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add('add-to-cart'); // Add CSS class

    // Add click event listener to the add-to-cart button
    addToCartButton.addEventListener('click', () => {
        showSuccessAlert(product.name);
    });

    // Append rating and button elements to the rating-and-button container
    productRatingAndButton.appendChild(productRating);
    productRatingAndButton.appendChild(addToCartButton);

    // Append all elements to the product card
    productCard.appendChild(imageContainer);
    productCard.appendChild(productName);
    productCard.appendChild(productShortDescription);
    productCard.appendChild(productPrice);
    productCard.appendChild(productRatingAndButton);

    // Return the created product card element
    return productCard;
}
