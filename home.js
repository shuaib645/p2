import { db } from "./firebase-config.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const productContainer = document.getElementById("product-container");

// Fetch products from Realtime Database
const loadProducts = () => {
    const productsRef = ref(db, "products");

    onValue(productsRef, (snapshot) => {
        productContainer.innerHTML = ""; // Clear the container
        const data = snapshot.val();
        if (data) {
            Object.entries(data).forEach(([key, product]) => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" width="100%">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                `;
                productContainer.appendChild(productCard);
            });
        } else {
            productContainer.innerHTML = "<p>No products available</p>";
        }
    }, (error) => {
        console.error("Error fetching products:", error);
    });
};

loadProducts();
