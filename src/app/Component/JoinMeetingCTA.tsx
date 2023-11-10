"use client"

import React, { useState } from "react";




                function JoinMeetingCTA() {
                    const [username, setUsername] = useState("");
                    const [meetingId, setMeetingId] = useState("");

                    const handleUsernameChange = (event:any) => {
                        setUsername(event.target.value);
                    };

                    const handleMeetingIdChange = (event:any) => {
                        setMeetingId(event.target.value);
                    };
                    const handleConnectClick = (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        window.location.href = `https://rustlemania.com/meeting/${username}/${meetingId}`;
                    };
  

                    return (
                        <div
                        
                        style={{fontFamily: 'MyFontBold'}}
                        className="flex justify-center box-content text-center py-32 bg-slate-800 dark:bg-neutral-700/20  w-full">
                            <div className="flex flex-col justify-center items-center w-full md:w-1/2">
                                <h2 className="text-6xl capitalize font-bold text-white mb-4">
                                    Join the Meeting
                                </h2>
                                <p className="text-white text-lg mb-4" style={{ fontFamily: "Arial", fontSize: "1.2rem" }}>
                                    Enter your name and meeting ID to join the meeting
                                </p>
                            
                                    <form className="flex flex-col md:flex-row w-full items-center justify-center " onSubmit={handleConnectClick}>
                                        <input
                                            type="text"
                                            placeholder="UserName"
                                            value={username}
                                            onChange={handleUsernameChange}
                                            className="border border-gray-400/20 rounded-md px-4 py-2 mb-4 md:mr-2 w-full md:w-auto text-lg transition-all duration-300 flex-1 bg-gray-800"
                                            style={{ maxWidth: "300px", width: "100%" }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="MeetingID"
                                            value={meetingId}
                                            onChange={handleMeetingIdChange}
                                            className="border border-gray-400/20 rounded-md px-4 py-2 mb-4 md:ml-2 w-full md:w-auto text-lg transition-all duration-300 flex-1 bg-gray-800"
                                            style={{ maxWidth: "300px", width: "100%" }}
                                        />
                                        <button
                                            type="submit"
                                            className="border border-gray-400 rounded-md px-4 py-2 mb-4 md:ml-2 w-full md:w-auto text-lg transition-all duration-300 flex-1 hover:bg-blue-500 hover:text-white"
                                            style={{ maxWidth: "200px", width: "100%" }}
                                        >
                                            Connect
                                        </button>
                                    </form>
                                
                            </div>
                        </div>
                    );
                   
                }

      

export default JoinMeetingCTA;


