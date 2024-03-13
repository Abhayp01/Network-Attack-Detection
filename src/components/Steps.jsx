import React from 'react'

function Steps() {
  return (
    <ul className="steps steps-vertical lg:steps-horizontal">
      <li className="step step-primary text-green-800">Register</li>
      <li className="step text-red-400">Detection</li>
      <li className="step text-red-400">Result</li>
      <li className="step text-red-400">Solutions</li>
    </ul>
  )
}

export default Steps