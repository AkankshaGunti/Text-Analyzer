import { useState } from 'react';
import Navbar from './components/CreatedNavbar'
import TextForms from './components/TextForms';
import DisAlert from './components/DisAlert';
import About from './components/About';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode,setMode] = useState("dark");
  const toggleDarkMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  const [alert,setAlert] = useState(null);
  const showAlert = (msg,type) =>{
    setAlert(
      {
        msg:msg,
        type :type
      }
      );
      setTimeout( () =>{
        setAlert(null);},
        1500);
  }
  return (
   <>
   <div data-bs-theme={mode}>
    <Navbar title ="Text Utils" about ="About" mode={mode} toggleDarkMode={toggleDarkMode} showAlert={showAlert}/>
    <DisAlert alert = {alert}/>
    <TextForms heading="Enter your text to analyze" showAlert={showAlert} />
    <About/>
    </div>
   </>
  );
}

export default App;
