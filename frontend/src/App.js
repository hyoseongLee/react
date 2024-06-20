import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import Group from './component/Group';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
    <Header />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Group" element={<Group />} />
    </Routes>
    </div>
  );
}

export default App;
