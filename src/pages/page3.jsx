import React from "react";
import Options from "../components/Options";
import { useState } from "react";

function Page3(props) {
  const [count, setCount] = useState(1);
  const dstyle={
    border: "1px solid #fff",
    padding: "40px",
    margin: "30px auto",
    width: "80%",
    borderRadius:"50px",
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
  }
  return (
    <div className="question-container" id="EvaluationPage" style={{padding:"200px 0px"}}>
      <h1>Questions</h1>
      <div className="dabba" style={dstyle}>
        {/* <Question></Question> */}
        <p style={{ textAlign: "left" }}><b>
          {count}. Question: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          magnam odit similique repellendus libero nihil ea, illo totam
          consequatur. Neque totam esse at harum suscipit illum ex vero magnam
          quo.</b>
        </p>
        <Options options={["best","excellent", "good", "worst"]}></Options>
        <div className="navi">
        {count !== 1 && <button onClick={()=>{setCount(count-1)}}type="button" className="btn btn-primary lef">
          {"Prev"}
        </button>}
        {count !== 10 && <button onClick={()=>{setCount(count+1)}}type="button" className="btn btn-primary rig">
          Next
        </button>}
        </div>
        
      </div>
    </div>
  );
}

export default Page3;
