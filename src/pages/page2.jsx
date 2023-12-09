import React from 'react'

function Page1(props) {
    return (
        <div className="one-page-container" id='CareerPage'>
          <h1>{props.mess}</h1>
          {"All the potential paths one can choose."}
        </div>
      );
}

export default Page1