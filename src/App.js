// import logo from './logo.svg';
// import './App.css';
import './block.css';
import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/Home';
// import Web from './pages/Web';
import Signup from './pages/signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndexPage from './pages/indexPage';
import Trendind from './pages/trendind';
import CompleteOrder from './pages/CompleteOrder';
import Successful from './pages/Successful';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <HomePage/> */}
      <div className="App">
      <Routes>
        <Route path="/" element={ <Signup/> } />
        <Route path="/main" element={ <IndexPage /> } />
        <Route path="/trending" element={ <Trendind /> } />
        <Route path="/completeOrder" element={ <CompleteOrder /> } />
        <Route path="/successful" element={ <Successful /> } />
      </Routes>
    </div>

    <ToastContainer />
    </div>
  );
}

export default App;
