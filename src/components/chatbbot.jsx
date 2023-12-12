import React from 'react'

function Chatbot(props) {
    const cstyle={
        width:"70px",
        height:"70px",
        borderRadius:"50px",
        backgroundColor:"#333",
        position:"fixed",
        right:"15px",
        bottom:"15px",
        zIndex:"1"
    }
    return (
        <div style={cstyle}></div>
      );
}

export default Chatbot