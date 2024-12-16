const productContainer = document.getElementById("product-container");

db.collection("products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const product = doc.data();
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100%">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        productContainer.appendChild(productCard);
    });
});
