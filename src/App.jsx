import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import SideBar from './Component/SideBar/SideBar';
import { Toast } from 'bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Component/Blog/Blog';


function App() {
  return (
    <div className="App container">
      <Header></Header>
       <Home  ></Home>
       <Blog></Blog>
       <ToastContainer></ToastContainer>
        </div>
  )
}

export default App
