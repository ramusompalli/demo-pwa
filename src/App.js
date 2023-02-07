import logo from './logo.svg';
import OneSignal from 'react-onesignal';
import React, { useEffect } from 'react';
import createNotification from './apis/createNotification';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/home';
import OnlineCheckIn from './components/onlineCheckIn';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/checkIn',
    element: <OnlineCheckIn />,
  }
]);

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
      {/* <button onClick={showNotification}>Show notification</button>
      <button onClick={createNotification}>create notification</button> */}
      {/* <Home /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
