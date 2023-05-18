import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCOVEEgE8jCi0IdKWuRuDk52SUqMpENznM",
    authDomain: "toytopia-safoun.firebaseapp.com",
    projectId: "toytopia-safoun",
    storageBucket: "toytopia-safoun.appspot.com",
    messagingSenderId: "523270093006",
    appId: "1:523270093006:web:243639f52c9d2b4ad4f89f"
};

const app = initializeApp(firebaseConfig);

export default app;