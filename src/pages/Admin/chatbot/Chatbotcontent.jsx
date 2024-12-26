import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n";
import { KeenIcon, Menu, MenuItem, MenuToggle } from "@/components";
import { CommonAvatars } from "@/partials/common";
import axios from "axios";

const ChatbotContent = () => {
  const [sessions, setSessions] = useState([{ id: 1, messages: [] }]); // Chat sessions
  const [activeSession, setActiveSession] = useState(1); // ID of the active session
  const [userMessage, setUserMessage] = useState(""); // Current user message
  const { isRTL } = useLanguage();

  // API URL and token configuration
  const API_URL = "http://185.15.211.247:5000/api/chat";
  const setToken = "hhhhh"; // Replace with your token logic

  // Set token dynamically if available in localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Handle sending a message
  const handleSendMessage = async () => {
    if (userMessage.trim()) {
      const updatedSessions = sessions.map((session) =>
        session.id === activeSession
          ? {
              ...session,
              messages: [...session.messages, { sender: "user", text: userMessage }],
            }
          : session
      );
      setSessions(updatedSessions);
      setUserMessage("");

      const chatHistory = updatedSessions
        .find((session) => session.id === activeSession)
        .messages.map((msg) => `${msg.sender === "user" ? "You" : "Bot"}: ${msg.text}`)
        .join("\n");

      try {
        const response = await axios.post(
          API_URL,
          {
            user_message: userMessage,
            chat_history: chatHistory,
          },
          {
            headers: {
              Authorization: `Bearer ${setToken}`, // Use dynamic token
              "Content-Type": "application/json",
            },
          }
        );

        const botResponse = response.data["AI Response"] || "No response from bot";

        setSessions((prevSessions) =>
          prevSessions.map((session) =>
            session.id === activeSession
              ? {
                  ...session,
                  messages: [...session.messages, { sender: "bot", text: botResponse }],
                }
              : session
          )
        );
      } catch (error) {
        console.error("Error fetching bot response:", error);

        setSessions((prevSessions) =>
          prevSessions.map((session) =>
            session.id === activeSession
              ? {
                  ...session,
                  messages: [
                    ...session.messages,
                    { sender: "bot", text: "Oops! Something went wrong. Please try again later." },
                  ],
                }
              : session
          )
        );
      }
    }
  };

  // Add a new session
  const handleNewSession = () => {
    const newSessionId = sessions.length + 1;
    setSessions([...sessions, { id: newSessionId, messages: [] }]);
    setActiveSession(newSessionId);
  };

  // Switch active session
  const handleSwitchSession = (id) => {
    setActiveSession(id);
  };

  // Get messages for the active session
  const activeMessages = sessions.find((session) => session.id === activeSession)?.messages || [];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Chat Section */}
        <div className="col-span-2">
          <div className="bg-white shadow rounded-lg p-4">
            <div
              className="overflow-y-auto h-96 p-4 border border-gray-200 rounded-lg"
            >
              <div className="chat-box">
                {activeMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    } items-center mb-3`}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-black"
                      } max-w-[60%]`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Section */}
            <div className="flex justify-between mt-4">
              <input
                type="text"
                className="flex-grow border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Type your message"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={handleSendMessage}
                disabled={!userMessage.trim()}
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Chat Sessions Section */}
        <div>
          <div className="bg-white shadow rounded-lg p-4">
            <p className="font-semibold">Chat Sessions</p>
            <ul className="mt-4">
              {sessions.map((session) => {
                const firstMessage =
                  session.messages.length > 0
                    ? session.messages[0].text
                    : "No messages yet"; // Show the first message or placeholder

                return (
                  <li
                    key={session.id}
                    className={`cursor-pointer py-2 px-4 rounded-lg ${
                      session.id === activeSession
                        ? "font-bold text-blue-500"
                        : "text-gray-700"
                    }`}
                    onClick={() => handleSwitchSession(session.id)}
                  >
                    {firstMessage}
                  </li>
                );
              })}
            </ul>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={handleNewSession}
            >
              + New Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ChatbotContent };
