export function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImage = document.createElement('img');
    productImage.src = product.imageUrl; 
    productImage.alt = product.name;
  
    const productName = document.createElement('h3');
    productName.textContent = product.name;
  
    const productShortDescription = document.createElement('p');
    productShortDescription.classList.add('short-description');
    productShortDescription.textContent = product.shortDescription; 
  
    const productPrice = document.createElement('p');
    productPrice.classList.add('price');
    const displayPrice = product.discountedPrice || product.price; 
    productPrice.textContent = `$${displayPrice}`;
  
    const productRating = document.createElement('div');
    productRating.classList.add('rating');
    // TODO Create the rating stars here based on the product.rating value
  
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add('add-to-cart');
    // TODO Add event listener to handle adding the product to the cart
  
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productShortDescription);
    productCard.appendChild(productPrice);
    productCard.appendChild(productRating);
    productCard.appendChild(addToCartButton);
  
    return productCard;
  }
  