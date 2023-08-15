import { generateRatingStars } from "./ratingGenerator.js";
import { showSuccessAlert } from "./cartAlert.js";

export function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const productImage = document.createElement('img');
    productImage.src = product.imageUrl;
    productImage.alt = product.name;

    imageContainer.appendChild(productImage);

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const productShortDescription = document.createElement('p');
    productShortDescription.classList.add('short-description');
    productShortDescription.textContent = product.shortDescription;

    const productPrice = document.createElement('p');
    productPrice.classList.add('price');
    if (product.discountedPrice) {
        const regularPrice = document.createElement('span');
        regularPrice.classList.add('discounted-price');
        regularPrice.textContent = `$${product.price}`;
        regularPrice.style.textDecoration = 'line-through';

        const discountedPrice = document.createElement('span');
        discountedPrice.classList.add('regular-price');
        discountedPrice.textContent = `$${product.discountedPrice}`;

        productPrice.appendChild(discountedPrice);
        productPrice.appendChild(document.createTextNode(' '));
        productPrice.appendChild(regularPrice);
    } else {
        productPrice.textContent = `$${product.price}`;
    }

    const productRatingAndButton = document.createElement('div');
    productRatingAndButton.classList.add('rating-and-button');

    const productRating = document.createElement('div');
    productRating.classList.add('rating');
    productRating.innerHTML = generateRatingStars(product.rating);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add('add-to-cart');

    addToCartButton.addEventListener('click', () => {
        showSuccessAlert(product.name);
    });

    productRatingAndButton.appendChild(productRating);
    productRatingAndButton.appendChild(addToCartButton);
    productCard.appendChild(imageContainer);
    productCard.appendChild(productName);
    productCard.appendChild(productShortDescription);
    productCard.appendChild(productPrice);
    productCard.appendChild(productRatingAndButton);

    return productCard;
}

