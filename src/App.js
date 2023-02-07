import logo from './logo.svg';
import './App.css';
import OneSignal from 'react-onesignal';
import React, { useEffect } from 'react';
import createNotification from './apis/createNotification';

function App() {

  const showNotification = () => {
    Notification.requestPermission().then((perm) => {
      console.log(perm)
    })
  }

  useEffect(() => {
    OneSignal.init({
      appId: "102bdd57-2a9e-4d85-bfde-f14a51e0bb6f"
    });
  }, []);

  return (
    <>
      <button onClick={showNotification}>Show notification</button>
      <button onClick={createNotification}>create notification</button>
    </>
  );
}

export default App;
