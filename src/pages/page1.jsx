import React from 'react'
import HomePage from '../components/homepage'
import HomePage2 from '../components/homepage2';
import HomePage3 from '../components/homepage3';
import HomePage4 from '../components/hompage4';

function Page1(props) {
    return (
        <div className="one-page-container" id='HomePage'>
          <HomePage/>
          <HomePage2/>
          <HomePage3/>
          <HomePage4/>
        </div>
      );
}

export default Page1