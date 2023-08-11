export function showSuccessAlert(productName) {
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('success-alert');
    alertContainer.textContent = `Product "${productName}" added to cart!`;

    document.body.appendChild(alertContainer);

    setTimeout(() => {
        document.body.removeChild(alertContainer);
    }, 3000); 
}
