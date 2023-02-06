import logo from './logo.svg';
import './App.css';

function App() {

  const showNotification = () => {
    Notification.requestPermission().then((perm) => {
      console.log(perm)
    })
  }

  return (
    <button onClick={showNotification}>Show notification</button>
  );
}

export default App;
