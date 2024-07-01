import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import Group from './component/Group';
import Image from './component/Image';
import { Routes, Route, } from "react-router-dom";
import Carousel from "react-multi-carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="Login" element={<Login />} />
        <Route path="Group" element={<Group />} />
        <Route path="Image" element={<Image />} />
      </Routes>
    </div>
  );
}

export default App;

// 1. 라우터 메인이 나왔다 안나왔다 지맘대로임.
// 2. 이미지 넣는 방법을 모르겠음.
// 3. 캐로셀 사용방법을 모르겠음.