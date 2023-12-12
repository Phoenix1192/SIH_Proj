import React from 'react'

function Page4(props) {
    return (
      <div id="ResultPage">
        <h1>Your personalised Analysis</h1>
      <div className="home-container" style={{margin:"50px 0px"}}>
      <div className="first">
      <img
          src="https://www.spotfire.com/content/dam/spotfire/images/graphics/inforgraphics/doughnut-chart-example.svg" // Replace with your image URL
          alt="Website Image"
          className="website-image"
          style={{maxWidth:"600px"}}
        />
      </div>
      <div className="second">
        <img
          src="https://datavizpyr.com/wp-content/uploads/2020/03/overlapping_histograms_with_matplotlib_Python_2.png" // Replace with your image URL
          alt="Website Image"
          className="website-image"
        />
      </div>
      </div>
      <p>Write something descriptive about the analysis using AI. Write something descriptive about the analysis using AI.Write something descriptive about the analysis using AI</p>
      </div>
      );
}

export default Page4