/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home/home";
import TestYourBrain from "./screens/Test/test";
import tvswall from './assets/images/tvswall.jpg'
import Navigation from "./components/Navigation/navigation";
import VideoBackground from "./screens/Home/video";
import './App.css'
import Recipe from "./screens/Recipes/recipe";
import More from "./common/more";
function App() {

  return (
    <>
    <BrowserRouter>
    <Navigation /> 

<Routes>
  <Route exact path='/' Component={Recipe}/>
  <Route exact path='/test' Component={TestYourBrain}/>
  <Route exact path='/recipe' Component={Home}/>
  <Route exact path='/more' Component={More}/>
  </Routes>   
   </BrowserRouter>
    </>
  )
}

export default App
