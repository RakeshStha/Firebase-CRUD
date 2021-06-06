
import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyD3z50V-5RjBNpocvRzT-Uoaku9LZ8fhZA",
    authDomain: "react-crud-1b81a.firebaseapp.com",
    databaseURL: "https://react-crud-1b81a-default-rtdb.firebaseio.com",
    projectId: "react-crud-1b81a",
    storageBucket: "react-crud-1b81a.appspot.com",
    messagingSenderId: "815428832294",
    appId: "1:815428832294:web:041ad2ce1d6209bf0eeae7"
  };

  var fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();