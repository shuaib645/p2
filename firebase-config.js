// Import the required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-storage.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj98gerP4l4ztKfG1rPo5UzK9dgKFjlII",
  authDomain: "myprojectp1-70080.firebaseapp.com",
  databaseURL: "https://myprojectp1-70080-default-rtdb.firebaseio.com",
  projectId: "myprojectp1-70080",
  storageBucket: "myprojectp1-70080.firebasestorage.app",
  messagingSenderId: "711696264195",
  appId: "1:711696264195:web:cfe0a6f7a0cf1e6f4ef236"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Export the initialized Firestore and Storage for use in other scripts
export { db, storage };
