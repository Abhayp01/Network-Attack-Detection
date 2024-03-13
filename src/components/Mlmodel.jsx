import React from 'react'

function Mlmodel() {
  return (
    <div className="ml-model mt-10">
      <h1 className='flex justify-center font-extrabold text-5xl mt-10 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>ML Model</h1>
      <div className="flex flex-wrap justify-center gap-4">

        <div className="attack-type bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md">
          <h3 className="font-bold">DDoS Attacks (Denial of Service)</h3>
          <p>These attacks aim to overwhelm a network's resources, rendering it inaccessible to legitimate users. They exploit vulnerabilities in network infrastructure, such as routers, to launch coordinated requests that overload the system.</p>
        </div>


        <div className="attack-type bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md">
          <h3 className="font-bold">PROBE Attacks</h3>
          <p>Probe attacks involve scanning a network to gather information about its vulnerabilities. Attackers use this data to plan further intrusions, making early detection crucial to prevent potential exploits.</p>
        </div>

        <div className="attack-type bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md">
          <h3 className="font-bold">R2L Attacks (Unauthorized Access from a Remote Machine)</h3>
          <p>R2L attacks are unauthorized attempts to access a network from a remote location. These attacks often exploit authentication weaknesses to gain access to network resources.</p>
        </div>

        <div className="attack-type bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md">
          <h3 className="font-bold">U2R Attacks (Unauthorized Access to Root)</h3>
          <p>U2R attacks involve gaining unauthorized access to root or administrative privileges. Attackers exploit vulnerabilities to escalate their access levels, allowing them to control the system and its data.</p>
        </div>
      </div>

    </div>
  )
}

export default Mlmodel