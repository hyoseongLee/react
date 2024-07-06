import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import Group from './component/Group';
import Image from './component/Image';
import Calender from './component/Calender';
import { Routes, Route, } from "react-router-dom";
import Carousel from "react-multi-carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="Group" element={<Group />} />
        <Route path="Image" element={<Image />} />
        <Route path="Calender" element={<Calender />} />
      </Routes>
    </div>
  );
}

export default App;