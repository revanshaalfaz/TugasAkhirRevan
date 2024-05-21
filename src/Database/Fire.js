import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDjzl2GOkguIxf_sSjSEl6w5yny5K0PWYA",
  authDomain: "lockinfak.firebaseapp.com",
  databaseURL: "https://lockinfak-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lockinfak",
  storageBucket: "lockinfak.appspot.com",
  messagingSenderId: "572045721741",
  appId: "1:572045721741:web:772d7f219cd48989e262c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
