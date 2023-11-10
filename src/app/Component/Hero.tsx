"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  const [username, setUsername] = useState("");
  const [meetingId, setMeetingId] = useState("");

  const handleUsernameChange = (event:any) => {
    setUsername(event.target.value);
  };

  const handleMeetingIdChange = (event:any) => {
    setMeetingId(event.target.value);
  };

  const handleConnectClick = () => {
    console.log(`Connecting ${username} to meeting ${meetingId}`);
    // Add your connect logic here
  };

  return (
    <div
    style={{ fontFamily: "MyFontBold", maxWidth: "1400px" }}
    
    className="container box-content mx-auto px-4 " data-path="0.1">
      <div
        className="flex flex-wrap items-center -m-6 pt-32 pb-36 dark:text-white"
        data-path="0.1.0"
      >
        <div className="w-full lg:w-1/2 p-6" data-path="0.1.0.0">
          <div className="lg:max-w-xl" data-path="0.1.0.0.0">
            <p
              className="mb-8 font-heading max-w-max px-5 py-2.5 uppercase font-semibold text-xs tracking-wider bg-gradient-blue2 rounded-full dark:text-gray-200"
              data-config-id="auto-txt-13-2"
              data-path="0.1.0.0.0.0"
            >
              <div className="flex items-center">
                <span className="mr-2">made with Rust 🦀</span>
            
               
              </div>
            </p>
            <h1
              className="mb-6 font-heading text-7xl p-2 tracking-wide	  md:text-10xl xl:text-12xl font-bold dark:text-white"
              data-config-id="auto-txt-14-2"
              data-path="0.1.0.0.0.1"
            >
              VideoCall-rs: Connect with your audience anywhere
            </h1>
            <p
              className="mb-9 text-gray-600 p-2	 text-lg dark:text-gray-400"
              data-config-id="auto-txt-15-2"
              data-path="0.1.0.0.0.2"
            >
              VideoCall-rs is a versatile, open-source video conferencing tool
              in Rust, ideal for telemedicine and customer service applications.
            </p>

            <div className="flex space-x-4 justify-center w-full m-auto ">
              {/* <div className="flex justify-center w-full">
                <button
                  onClick={() => {
                    window.location.href = "https://github.com/security-union/videocall-rs";
                  }}
                  className="flex items-center w-full max-w-[250px] justify-center px-6 py-3 text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 w-full"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C5.373 0 0 5.373 0 12c0 5.275 3.438 9.732 8.205 11.317.6.111.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.204.084 1.838 1.236 1.838 1.236 1.07 1.836 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.383 1.235-3.222-.135-.306-.54-1.527.105-3.18 0 0 1.005-.324 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.554 3.285-1.23 3.285-1.23.645 1.653.24 2.874.12 3.18.765.84 1.23 1.905 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 21.73 24 17.274 24 12c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                  <span className="text-lg">
                    Give us a star on GitHub
                  </span>
                </button>
              </div>
              <div className="flex justify-center w-full">
                <button 
                  onClick={() => {
                    window.location.href = "https://discord.gg/hRhHcC6gX8";
                  }}
                  className="flex items-center justify-center w-full max-w-[250px] px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                >
                  <span className="text-lg flex gap-2">
                    <div
                      className="grid place-items-center"
                      style={{ width: "20px", height: "20px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 127.14 96.36"
                        width="100%"
                        height="100%"
                      >
                        <defs>
                          <style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#fff;}" }} />
                        </defs>
                        <g id="图层_2" data-name="图层 2">
                          <g id="Discord_Logos" data-name="Discord Logos">
                            <g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White">
                              <path
                                className="cls-1"
                                d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    Join the community 
                  </span>
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <div className=" lg:w-1/2  justify-center flex m-auto p-6" data-path="0.1.0.1">
          <Image
            className="block mx-auto w-11/12"
            src="/images/profiles.png"
            alt=""
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

