const uploadForm = document.getElementById("upload-form");

uploadForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("product-name").value;
    const description = document.getElementById("product-description").value;
    const imageFile = document.getElementById("product-image").files[0];

    // Convert the image to Base64
    const reader = new FileReader();
    reader.onload = () => {
        const base64Image = reader.result;

        // Store product data with Base64 image in Firebase
        db.collection("products").add({
            name,
            description,
            image: base64Image, // Save Base64 string
        }).then(() => {
            alert("Product uploaded successfully!");
            uploadForm.reset();
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    };

    reader.readAsDataURL(imageFile);
});
