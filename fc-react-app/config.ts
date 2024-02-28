/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.apiKey,
	authDomain: "friendly-chainsaw-a1a56.firebaseapp.com",
	projectId: "friendly-chainsaw-a1a56",
	storageBucket: "friendly-chainsaw-a1a56.appspot.com",
	messagingSenderId: "301312576381",
	appId: "1:301312576381:web:76a39c36afc6be0b8a1a14",
};

// console.log(process.env.apiKey);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
