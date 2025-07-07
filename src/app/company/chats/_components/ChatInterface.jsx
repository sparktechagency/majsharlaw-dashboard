"use client"

import { useState } from "react"

export default function ChatInterface() {
  const [selectedChat, setSelectedChat] = useState("lian")
  const [message, setMessage] = useState("")

  const contacts = [
    {
      id: "aisha",
      name: "Aisha Patel",
      lastMessage: "We convened yesterday.",
      time: "10:45 AM",
      avatar: "/assets/user.png",
    },
    {
      id: "carlos",
      name: "Carlos Mendoza",
      lastMessage: "We assembled yesterday.",
      time: "10:45 AM",
      avatar: "/assets/user.png",
    },
    {
      id: "zara",
      name: "Zara Khan",
      lastMessage: "We met up yesterday.",
      time: "10:45 AM",
      avatar: "/assets/user.png",
    },
    {
      id: "ethan",
      name: "Ethan Brooks",
      lastMessage: "We came together yesterday.",
      time: "10:45 AM",
      avatar: "/assets/user.png",
    },
    {
      id: "nina",
      name: "Nina Schmidt",
      lastMessage: "We connected yesterday.",
      time: "10:45 AM",
      avatar: "/assets/user.png",
    },
    {
      id: "jamal",
      name: "Jamal Robinson",
      lastMessage: "We got together yesterday.",
      time: "10:45 AM",
      avatar: "/assets/user.png",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "lian",
      text: "Hi how are you?",
      time: "10:36 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "me",
      text: "Hellow I am fine",
      time: "10:37 AM",
      isOwn: true,
    },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  const selectedContact = contacts.find((c) => c.id === selectedChat)

  return (
    <div className="flex h-screen bg-white">
      {/* Contacts Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ea40ab6]"
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedChat(contact.id)}
              className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                selectedChat === contact.id ? "bg-gray-50" : ""
              }`}
            >
              <img
                src={contact.avatar || "/assets/user.png"}
                alt={contact.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 truncate">{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 flex items-center">
          <img
            src="/assets/user.png"
            alt={selectedContact?.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <h2 className="text-lg font-medium text-gray-900">{selectedContact?.name || "Lian O'Sullivan"}</h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
              <div className="flex items-start space-x-2 max-w-xs lg:max-w-md">
                {!msg.isOwn && (
                  <img
                    src="/assets/user.png"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                )}
                <div>
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      msg.isOwn ? "bg-[#6ea40ab6] text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ea40ab6]"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage} className="p-2 text-[#6DA40A] hover:text-green-700 focus:outline-none cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
