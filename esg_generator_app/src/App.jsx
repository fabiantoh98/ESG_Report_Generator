import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from './navbar';
import logo from "./logo.svg";
import "./App.css";
import ESGForm from "./components/ESGForm";

function App() {
  return (
    <div className="app">
      <div className="main">
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/'></Route>
            <Route path='/dashboard'></Route>
            <Route path='/form' element={<ESGForm/>}></Route>
            <Route path='/report'></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;