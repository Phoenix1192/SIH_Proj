import React from "react";
import { useState } from "react";
import Qtypes from "../components/Questions";

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
      <Qtypes/>
    </div>
  );
}

export default Page3;
