import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import Group from './component/Group';
import Image from './component/Image';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
        <Routes>
                <Route exact path="/" element={<Header />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Group" element={<Group />} />
                <Route path="/Image" element={<Image />} />
        </Routes>

    </div>
  );
}

export default App;
