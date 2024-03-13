import React from 'react'

function Mlmodel() {
  return (
    <div className="ml-model">
      <h2 className="my-4 gradient-text text-xl font-extrabold uppercase">Types of Network Attacks</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {/* DDoS Attacks */}
        <div className="attack-type bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md">
          <h3 className="font-bold">DDoS Attacks (Denial of Service)</h3>
          <p>These attacks aim to overwhelm a network's resources, rendering it inaccessible to legitimate users. They exploit vulnerabilities in network infrastructure, such as routers, to launch coordinated requests that overload the system.</p>
        </div>

        {/* PROBE Attacks */}
        <div className="attack-type bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md">
          <h3 className="font-bold">PROBE Attacks</h3>
          <p>Probe attacks involve scanning a network to gather information about its vulnerabilities. Attackers use this data to plan further intrusions, making early detection crucial to prevent potential exploits.</p>
        </div>

        {/* R2L Attacks */}
        <div className="attack-type bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md">
          <h3 className="font-bold">R2L Attacks (Unauthorized Access from a Remote Machine)</h3>
          <p>R2L attacks are unauthorized attempts to access a network from a remote location. These attacks often exploit authentication weaknesses to gain access to network resources.</p>
        </div>

        {/* U2R Attacks */}
        <div className="attack-type bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-md">
          <h3 className="font-bold">U2R Attacks (Unauthorized Access to Root)</h3>
          <p>U2R attacks involve gaining unauthorized access to root or administrative privileges. Attackers exploit vulnerabilities to escalate their access levels, allowing them to control the system and its data.</p>
        </div>
      </div>

    </div>
  )
}

export default Mlmodel