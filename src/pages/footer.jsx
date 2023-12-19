import React from 'react'

function Footer(props) {
    const fstyle={
        height:"150px", 
        backgroundColor:"#3F42A1",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div style={fstyle}>
          <b style={{color:"white"}}>CareerBuddy.com</b>
        </div>
      );
}

export default Footer