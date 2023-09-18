import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type,
    })
  }
  const toggleslide=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showalert("Dark mode has been enabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("Light mode has been enabled","success")
    }
  }
  return (

    <>
    <Router>

    <Navbar heading='Textutils' about='About' mode={mode} toggleslide={toggleslide}/>
    <Alert alert={alert} mode={mode}/>
    <div className="conatiner my-3">

    <Routes>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path='/' element={<Text mode={mode} toggleslide={toggleslide}/>}/>
    </Routes>
    </div>
    {/* <div className="container my-3">

<About></About>
</div> */}
</Router>

    </>
  );
}

export default App;