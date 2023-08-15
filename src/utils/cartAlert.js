// Function to show a success alert when a product is added to the cart
export function showSuccessAlert(productName) {
    // Create a container for the success alert
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('success-alert');
    alertContainer.textContent = `Product "${productName}" added to cart!`;

    // Append the alert container to the body of the document
    document.body.appendChild(alertContainer);

    // Set a timeout to remove the alert container after 3 seconds
    setTimeout(() => {
        document.body.removeChild(alertContainer);
    }, 3000); 
}
