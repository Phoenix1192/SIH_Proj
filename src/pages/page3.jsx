import React from 'react'

function Page1(props) {
    return (
        <div className="one-page-container" id="EvaluationPage">
          <h1>{props.mess}</h1>
          {"Aptitude test and games."}
        </div>
      );
}

export default Page1