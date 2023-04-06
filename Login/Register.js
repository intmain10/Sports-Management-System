 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
 import { getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

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

 submit_s.addEventListener("click", (e) => {
   var email = document.getElementById("email_s").value;
   var password = document.getElementById("password_s").value;
   var name = document.getElementById("name").value;
   var username = document.getElementById("username").value;
   var Phone = document.getElementById("p_num").value;

   createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {

       const user = userCredential.user;
       // ...
       set(ref(database, "users/" + user.uid), {
         email: email,
         password: password,
         Name: name,
         Username: username,
         Phone_number: Phone,
         //profile_picture : imageUrl
       })
         .then(() => {
           // Data saved successfully!
           alert("Registration Successful...\n Login Now");
           location.replace('Login.html');
         })
         .catch((error) => {
           // The write failed...
           alert(error);
         });
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
       alert(errorMessage);
     });
 });