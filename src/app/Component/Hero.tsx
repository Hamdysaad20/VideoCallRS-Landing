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
              <div className="flex justify-center w-full">
                <button
                  onClick={() => {
                    window.location.href = "https://github.com/security-union/videocall-rs";
                  }}
                  className="flex items-center  max-w-[250px] justify-center px-6 py-3 text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 w-full"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="black"

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
                  className="flex items-center justify-center w-full max-w-[250px] px-6 py-3 text-black bg-[#efff55] rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                >  Join the community 
                  <span className="text-lg flex gap-2">
                    
                  
                  </span>
                </button>
              </div>
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

