import { db } from "./firebase-config.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-storage.js";

const uploadForm = document.getElementById("upload-form");

uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("product-name").value;
    const description = document.getElementById("product-description").value;
    const imageFile = document.getElementById("product-image").files[0];

    if (imageFile) {
        const storage = getStorage();
        const imageRef = storageRef(storage, 'products/' + imageFile.name);

        // Upload the image to Firebase Storage
        try {
            const snapshot = await uploadBytes(imageRef, imageFile);
            const imageUrl = await getDownloadURL(snapshot.ref); // Get image URL

            // Store product data in Realtime Database
            const productRef = ref(db, "products");
            await push(productRef, {
                name,
                description,
                image: imageUrl // Store image URL
            });

            alert("Product uploaded successfully!");
            uploadForm.reset();
        } catch (error) {
            console.error("Error uploading product:", error);
        }
    }
});
