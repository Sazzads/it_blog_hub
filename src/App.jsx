import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import SideBar from './Component/SideBar/SideBar';

function App() {
  const [readTime,setReadTime]=useState("");
  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    }
    else {
      localStorage.setItem("readTime", time)
      setReadTime(time);
    }
  };

  return (
    <div className="App container">
      <Header></Header>
      <div className="main row ">
        <div className="home-container col-md-8">
          <Home handleReadTime={handleReadTime}></Home>
        </div>
        <div className="side-cart col-md-4 card">
          <SideBar readTime={readTime}></SideBar>
        </div>
      </div>

    </div>
  )
}

export default App
