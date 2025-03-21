 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAf8OWTKRxSD5QaMVlovgZwVx4W1-p833U",
   authDomain: "cirro-96634.firebaseapp.com",
   projectId: "cirro-96634",
   storageBucket: "cirro-96634.firebasestorage.app",
   messagingSenderId: "961003638981",
   appId: "1:961003638981:web:06bcd4db9fc3c0f032e0ac",
   measurementId: "G-4V1XGCCEJD"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 const email= document.getElementById('email').value;
 const password= document.getElementById('password').value;

 const submit= document.getElementById('submit');
 submit.addEventListener("click",function(event){
     event.preventDefault()
     alert(5)
 })