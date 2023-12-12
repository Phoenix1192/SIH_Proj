import React from "react";
import Options from "../components/Options";
import { useState } from "react";

function Page3(props) {
  const [count, setCount] = useState(1);
  return (
    <div className="question-container" id="EvaluationPage">
      <div className="dabba">
        {/* <Question></Question> */}
        <h5 style={{ textAlign: "left" }}>
          Question: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          magnam odit similique repellendus libero nihil ea, illo totam
          consequatur. Neque totam esse at harum suscipit illum ex vero magnam
          quo.
        </h5>
        <Options options={["best","excellent", "good", "worst"]}></Options>
        <div className="navi">
        {count !== 0 && <button onClick={()=>{setCount(count-1)}}type="button" className="btn btn-primary lef">
          {"Prev" + count}
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
