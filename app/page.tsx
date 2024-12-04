'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 3,
  });
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="space-y-4">
        {messages.map(m => (
          <div key={m.id} className="whitespace-pre-wrap">
            <div>
              <div className="font-bold">{m.role}</div>
              <p>
                {m.content.length > 0 ? (
                  m.content
                ) : (
                  <span className="italic font-light">
                    {'calling tool: ' + m?.toolInvocations?.[0].toolName}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />

        <div className="fixed bottom-0 left-0 w-full bg-gray-800 border-t border-gray-700">
  <div className="container mx-auto p-4">
    <div className="relative flex items-center">
     
      <textarea
        rows={1}
        placeholder="Type your message here..."
        className="w-full resize-none rounded-md bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none px-4 py-2 shadow-sm"
      ></textarea>
      
   
      <button
        className="absolute right-2 top-2 text-blue-500 hover:text-blue-400"
        aria-label="Send"
      >
    
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-9.41-5.431a1 1 0 00-1.342 1.342l5.43 9.41a1 1 0 001.498.128L21 3M15 12h-3m0 0H9m3 0v3m0-3V9" />
        </svg>
      </button>
    </div>
  </div>
</div>

      </form>
    </div>
  );
}