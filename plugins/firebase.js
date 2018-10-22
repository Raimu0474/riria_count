import firebase from 'firebase'

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyBF49J22nfkVQWWgUrd98oIJukv3L6Rm0U",
    authDomain: "ririadan-bff47.firebaseapp.com",
    databaseURL: "https://ririadan-bff47.firebaseio.com",
    projectId: "ririadan-bff47",
    storageBucket: "ririadan-bff47.appspot.com",
    messagingSenderId: "573479195256"
  };
  firebase.initializeApp(config);
}

export default firebase