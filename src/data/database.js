import 'firebase/firebase-app';

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDugVo87COu3xojUKeyMuo6BW3YoqfSH_o',
    authDomain: 'colors-19f8b.firebaseapp.com',
    projectId: 'colors-19f8b',
    storageBucket: 'colors-19f8b.appspot.com',
    messagingSenderId: '290252048419',
    appId: '1:290252048419:web:1dc197842fe15c39c54996',
    databaseURL:
        'https://colors-19f8b-default-rtdb.europe-west1.firebasedatabase.app/',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
