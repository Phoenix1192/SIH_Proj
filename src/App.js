import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';

import Navbar from "./components/Navbar";
import { useState } from 'react';

import './App.css';

function App() {
  const [toggle,setToggle]=useState(false);
  const changeState=()=>{
      setToggle(!toggle);
  }

  return (
    <div className="App">
      <Navbar buttonClick={changeState}/>
      <Page1 mess={"Home Page"}/>
      <Page2 mess={"Career Page"}/>
      <Page3 mess = {"Evaluation Page"}></Page3>
      <Page4 mess = {"Result/Chatbot Page"}></Page4>
    </div>
  );
}

export default App;
