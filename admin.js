import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const uploadForm = document.getElementById("upload-form");

uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("product-name").value;
    const description = document.getElementById("product-description").value;

    const imageFile = document.getElementById("product-image").files[0];
    const reader = new FileReader();

    reader.onload = async () => {
        const base64Image = reader.result;

        try {
            await addDoc(collection(db, "products"), {
                name,
                description,
                image: base64Image,
            });
            alert("Product uploaded successfully!");
            uploadForm.reset();
        } catch (error) {
            console.error("Error uploading product:", error);
        }
    };

    reader.readAsDataURL(imageFile);
});
