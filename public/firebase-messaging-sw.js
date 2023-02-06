importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js")

const firebaseConfig = {
    apiKey: "AIzaSyA0GGxLpa-vS-eQOwr45oR_XHz1sP3bIOQ",
    authDomain: "pwa-demo-2ff28.firebaseapp.com",
    projectId: "pwa-demo-2ff28",
    storageBucket: "pwa-demo-2ff28.appspot.com",
    messagingSenderId: "61028944759",
    appId: "1:61028944759:web:df86ccf6bef8a215106f72",
    measurementId: "G-N845Z1M2S9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((message) => {
    console.log(message)
})

var getToken = async () => {
    const token = await messaging.getToken();
    console.log(token);
}
getToken();