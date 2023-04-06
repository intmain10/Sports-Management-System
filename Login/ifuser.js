
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    import { getAuth, signOut} from "firebase/auth";
    import { getDatabase, set, ref, update } from "firebase/database";

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCkxDdnOEALKrK1bplCMVV46Meen4xkK9g",
        authDomain: "sgp-1-489bd.firebaseapp.com",
        projectId: "sgp-1-489bd",
        storageBucket: "sgp-1-489bd.appspot.com",
        messagingSenderId: "1029725973881",
        appId: "1:1029725973881:web:106c385d5ec13c7ab5d3a8",
        measurementId: "G-KC1ZS9XXZC"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();
    const database = getDatabase();
