import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }

  const toggleMode= ()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor ='#0f2540';
    showAlert("Dark Mode Enabled","success");
    document.title='TextManu-DarkMode';
    // setInterval(()=>{
    //   document.title='it is changing now';
    // },1000);
    }else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("White Mode Enabled","success");
      document.title='TextManu-LightMode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextApp" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        <Switch>
         
          {/* exact is used so that react compares the path completely not partially */}
         <Route exact path="/">
         <TextForm showAlert={showAlert} heading="Enter Text" mode={mode}/>
         </Route>
        </Switch>
  
    </div>
    </Router>
    </>
  );
}

export default App;
