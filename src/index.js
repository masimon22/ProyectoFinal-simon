import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD21tUj54eOioyAyE4yC08YqlzEAn1MOog",
  authDomain: "ecommerce-attrezzo.firebaseapp.com",
  projectId: "ecommerce-attrezzo",
  storageBucket: "ecommerce-attrezzo.appspot.com",
  messagingSenderId: "242602188183",
  appId: "1:242602188183:web:6e14e1e75a3c9dc09278d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

