
import firebase from 'firebase';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Navabar from './component/Navabar';

const config = {
  apiKey: 'AIzaSyBJVLjm-CeJC1rSeGRJK-tRJHnLHiHLQD8',
  authDomain: 'limuba.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);
function App() {
  return (
    <Router>
      <div className="App">
        <Navabar/>
    </div>
    </Router>
  );
}

export default App;
