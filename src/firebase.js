import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAesFTvcSKuJ2OnqVr1BehMba7VUWm1WT8",
    authDomain: "seminario-teste2live.firebaseapp.com",
    databaseURL: "https://seminario-teste2live.firebaseio.com",
    projectId: "seminario-teste2live",
    storageBucket: "seminario-teste2live.appspot.com",
    messagingSenderId: "499887182877",
    appId: "1:499887182877:web:1e994b3fc6b97467d362f4"
};
  // Initialize Firebase
let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()
