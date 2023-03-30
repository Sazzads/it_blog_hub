import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import SideBar from './Component/SideBar/SideBar';

function App() {


  return (
    <div className="App">
      <Header></Header>
      <div className="main row ">
        <div className="home-container col-md-8">
          <Home></Home>
        </div>
        <div className="side-cart col-md-4 card">
          <SideBar></SideBar>
        </div>
      </div>

    </div>
  )
}

export default App
