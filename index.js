document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 2; // Initial count
    const cartBadge = document.querySelector(".cart-badge");

    // Simulate adding items to cart
    document.querySelector(".bi-cart3").addEventListener("click", function () {
        cartCount++;
        cartBadge.textContent = cartCount;
    });
});
