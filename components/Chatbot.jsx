import { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I assist you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      const newMessage = { id: Date.now(), text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInput('');

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now() + 1, text: 'I am here to help!', sender: 'bot' }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto border rounded-lg shadow-lg h-[500px] bg-gray-100">
      {/* Chat Header */}
      <div className="bg-[#0073b1] text-white p-4 font-bold rounded-t-lg">
        LinkedIn Chatbot
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex mb-4 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-[#0073b1] text-white rounded-br-none'
                  : 'bg-gray-200 text-gray-800 rounded-bl-none'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-white border-t flex items-center space-x-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-[#0073b1] text-white px-4 py-2 rounded-full hover:bg-[#005f8d]"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
