import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC7qaEstjJKVJ9YX3oNE-KVnctuXpSAbjY",
  authDomain: "elevation-muckupcoffeewebsite.firebaseapp.com",
  projectId: "elevation-muckupcoffeewebsite",
  storageBucket: "elevation-muckupcoffeewebsite.appspot.com",
  messagingSenderId: "290499747918",
  appId: "1:290499747918:web:c2c7e61940e583a71e631f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default database;