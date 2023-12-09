import React from 'react'

function Page1(props) {
    return (
        <div className="one-page-container" id='HomePage'>
          <h1>{props.mess}</h1>
          {"Here we tell about what our website is for."}
        </div>
      );
}

export default Page1