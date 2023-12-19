import React from 'react'

function Footer(props) {
    const fstyle={
        height:"150px", 
        backgroundColor:"#f17916",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div style={fstyle}>
          <b>NicheNavigator.com</b>
        </div>
      );
}

export default Footer