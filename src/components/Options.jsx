import React from 'react'
import "./Options.css"
function Options({options}) {
    return (
        <ol className="opt" type="a">
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ol>
      );
}

export default Options