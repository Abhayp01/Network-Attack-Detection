import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
function App() {
  return (
    <>
      <nav className="navbar flex items-center justify-between flex-wrap p-3">
        <div className="ml-7 flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-semibold tracking-tight">
            <TypeAnimation
              sequence={[
                "Network Attack Analysis",
                3000,
                "Power of Machine Learning",
                2000,
                "Real Time Attack Detection",
                2000,
                "Security for Future",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </div>
        <div className="mr-10">
          <button className="log">Login</button>
        </div>
      </nav>
      <h1 className="text-white text-1xl text-center mt-4">
        We are still Working on the WebApp Till then get to know the capability
        of our app
      </h1>
      <div></div>
      <div className="flex-col lg:flex p-3 justify-center">
        <div className="w-[600px] p-4">
          <figure class="md:flex card bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p class="text-lg font-medium">
                  The Network Attack Detection System is an innovative security
                  solution that employs advanced machine learning techniques to
                  monitor and analyze network traffic in real-time. Designed to
                  identify a wide array of cyber threats, including DOS, Probe,
                  R2L, and U2R attacks, this system captures and processes
                  network packets to detect anomalies indicative of malicious
                  activities. With its intuitive GUI, comprehensive protection
                  capabilities, and customizable alerts, it serves as a vital
                  tool for network administrators and cybersecurity
                  professionals aiming to safeguard their digital
                  infrastructures against unauthorized access and data breaches.
                </p>
              </blockquote>
              <figcaption class="font-medium"></figcaption>
            </div>
          </figure>
        </div>
        <div className="w-[600px] p-4">
          <figure class="md:flex card bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <div className="flex items-center">
                  <h1 className="text-lg font-bold">Desktop Application:</h1>
                  <img
                    className="w-5 h-5 mt-1 ml-3"
                    src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
                    alt=""
                  />
                </div>

                <p className="text-lg font-medium">
                  <ul>
                    <li>
                      <span className="font-bold">Python:</span> Powers core
                      functionalities, including data processing and machine
                      learning.
                    </li>
                    <li>
                      <span className="font-bold">Tkinter:</span> Provides a
                      user-friendly graphical interface.
                    </li>
                    <li>
                      <span className="font-bold">Scapy: </span>Enables detailed
                      network packet capture and analysis.
                    </li>
                    <li>
                      <span className="font-bold">Scikit-learn:</span>{" "}
                      Implements machine learning algorithms for accurate threat
                      detection.
                    </li>
                  </ul>
                </p>
                <br />
                <div className="flex items-center">
                  <h1 className="text-lg font-bold">Web Application:</h1>
                  <img
                    className="w-5 h-5 mt-1 ml-3"
                    src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                    alt=""
                  />
                  <img
                    className="w-[70px] mt-1 ml-3"
                    src="https://lh3.googleusercontent.com/proxy/hyFAYoSo80UWM5-ihWefZe0p6rLZQVy4XASh5RVtBj2Z9SSuhCLtnEYCaMyik3KNsi5fRNKj18YeDAK8f6BwoafPQulQIdcB_5vwuSrGIg"
                    alt=""
                  />
                </div>

                <p className="text-lg font-medium">
                  <ul>
                    <li>
                      <span className="font-bold">Flask (Python):</span> Manages
                      backend operations and serves machine learning model
                      predictions.
                    </li>
                    <li>
                      <span className="font-bold">React:</span> Creates a
                      dynamic and responsive user interface on the frontend.
                    </li>
                  </ul>
                </p>
              </blockquote>
              <figcaption class="font-medium"></figcaption>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

export default App;
