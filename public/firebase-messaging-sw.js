importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js")

const firebaseConfig = {
    apiKey: "AIzaSyAMFPVQyRkJIPAEx5vuXS9kK22xAYmXzLY",
    authDomain: "push-demo-e6c01.firebaseapp.com",
    projectId: "push-demo-e6c01",
    storageBucket: "push-demo-e6c01.appspot.com",
    messagingSenderId: "777905774892",
    appId: "1:777905774892:web:957adc7c5584c5891e8c89",
    measurementId: "G-3BKPGRG1SG"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

var getToken = async() => {
    const token = await messaging.getToken();
    console.log(token);
}
getToken();