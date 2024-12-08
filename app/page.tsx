// 'use client';

// import { useChat } from 'ai/react';

// export default function Chat() {
//   const { messages, input, handleInputChange, handleSubmit } = useChat({
//     maxSteps: 3,
//   });
//   return (
//     <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
//       <div className="space-y-4">
//         {messages.map(m => (
//           <div key={m.id} className="whitespace-pre-wrap">
//             <div>
//               <div className="font-bold">{m.role}</div>
//               <p>
//                 {m.content.length > 0 ? (
//                   m.content
//                 ) : (
//                   <span className="italic font-light">
//                     {'calling tool: ' + m?.toolInvocations?.[0].toolName}
//                   </span>
//                 )}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit}>
//         <input
//           className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
//           value={input}
//           placeholder="Say something..."
//           onChange={handleInputChange}
//         />

//       </form>
//     </div>
//   );
// }

'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 3,
  });

  return (
    <div className="flex flex-col w-1/2 mx-auto h-screen">
      {/* Header */}
      <header className="text-center py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 shadow-md">
        <h1 className="text-3xl font-bold text-white">TutorBot</h1>
        <p className="text-sm text-white italic">by Ian Farai Madhara</p>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100 shadow-inner">
        {messages.map((m) => (
          <div
            key={m.id}
            // className="whitespace-pre-wrap p-3 rounded-lg mb-3 bg-white shadow-md"
            className={`whitespace-pre-wrap p-3 mb-3 rounded-lg ${
              m.role === 'user' ? 'bg-blue-100 text-left' : 'bg-green-100'
            }`}
          >
            <div className="font-bold text-gray-700">{m.role}</div>
            <p className="text-gray-800">
              {m.content.length > 0 ? (
                m.content
              ) : (
                <span className="italic font-light">
                  {'calling tool: ' + m?.toolInvocations?.[0].toolName}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white border-t border-gray-300 flex items-center"
      >
        <input
          className="flex-1 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          placeholder="Say something to TutorBot..."
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="ml-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
}

