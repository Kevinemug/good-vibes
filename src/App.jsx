/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home/home";
import TestYourBrain from "./screens/Test/test";
import tvswall from './assets/images/tvswall.jpg'
import Navigation from "./components/Navigation/navigation";
import VideoBackground from "./screens/Home/video";
function App() {

  return (
    <>
    <BrowserRouter>
    <Navigation image={tvswall}/> 
    <div>
      <VideoBackground />
      <div className="content">
        <h1>Welcome to my app</h1>
        <p>This is some content</p>
      </div>
    </div>

<Routes>
  <Route exact path='/' Component={Home}/>
  <Route exact path='/test' Component={TestYourBrain}/>
  </Routes>   
   </BrowserRouter>
    </>
  )
}

export default App
