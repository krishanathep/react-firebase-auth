import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDid7wdYVVIQ403LURGpoYv_TPRyZ4RtiY",
    authDomain: "fir-project-2c749.firebaseapp.com",
    databaseURL: "https://fir-project-2c749.firebaseio.com",
    projectId: "fir-project-2c749",
    storageBucket: "fir-project-2c749.appspot.com",
    messagingSenderId: "326945188628",
    appId: "1:326945188628:web:aa5531e0a440c6e9a07001"
  };

  firebase.initializeApp(config)
  
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;