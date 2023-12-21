import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Footer from "./pages/footer";
import Chatbot from "./components/chatbot";
import FinalPage from "./components/FinalPage";

import Navbar from "./components/Navbar";
import { useState } from "react";

import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const changeState = () => {
    setToggle(!toggle);
  };

  const [user,setUser]=useState(false);
  const changeLog = () => {
    setUser(!user);
  }

  return (
    <div className="App">
      <Navbar buttonClick={changeState} changeLog={changeLog} user={user} />
      <div className="wholebox">
        <Page1 mess={"Home Page"} />
        <Page2 mess={"Streams"} />
        <button className="lastbut TakeTest" id="lastbut">Get Counselling</button>
        <FinalPage/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
