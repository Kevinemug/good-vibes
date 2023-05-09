/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home/home";
import TestYourBrain from "./screens/Test/test";
import tvswall from './assets/images/tvswall.jpg'
import Navigation from "./components/Navigation/navigation";
import VideoBackground from "./screens/Home/video";
import './App.css'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navigation /> 

<Routes>
  <Route exact path='/' Component={Home}/>
  <Route exact path='/test' Component={TestYourBrain}/>
  </Routes>   
   </BrowserRouter>
    </>
  )
}

export default App
