import React, { useState, useRef, useEffect } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: 'Olá! Sou o assistente virtual para aquisição de direitos creditórios. Para começarmos, preciso de algumas informações. Qual o nome da sua empresa?',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: inputText,
          history: messages.map((m) => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text,
          })),
        }),
      });

      const data = await response.json();

      const botMessage = {
        id: messages.length + 2,
        text: data.response,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Erro no chat:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: messages.length + 2,
          text: 'Desculpe, ocorreu um erro. Tente novamente mais tarde.',
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white shadow-xl">
      {/* Header com a cor azul escuro */}
      <div className="bg-[#0A1E3C] text-white px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
          <span className="text-white text-xl">⚖️</span>
        </div>
        <div>
          <h2 className="font-semibold text-base">Assistente de Propostas</h2>
          <p className="text-xs text-green-300">Online • responde rápido</p>
        </div>
      </div>

      {/* Área de mensagens com fundo cinza claro */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F3F4F6]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-[#0A1E3C] mr-2 flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-sm">⚖️</span>
              </div>
            )}
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                msg.sender === 'user'
                  ? 'bg-[#00A86B] text-white rounded-br-none'  // balão do usuário em verde
                  : 'bg-white text-gray-800 rounded-bl-none shadow-sm' // balão do bot em branco
              } ${msg.isError ? 'bg-red-500 text-white' : ''}`}
            >
              <p className="text-sm">{msg.text}</p>
              <span
                className={`text-[10px] block text-right mt-1 ${
                  msg.sender === 'user' ? 'text-green-100' : 'text-gray-400'
                }`}
              >
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}

        {/* Indicador de digitação */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-full bg-[#0A1E3C] mr-2 flex-shrink-0 flex items-center justify-center">
              <span className="text-white text-sm">⚖️</span>
            </div>
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Área de input */}
      <div className="bg-white border-t border-gray-200 px-3 py-2 flex items-center gap-2">
        <button className="p-2 text-gray-500 hover:text-[#0A1E3C] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </button>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          placeholder="Digite sua mensagem..."
          className="flex-1 resize-none border-0 focus:ring-0 focus:outline-none text-sm py-2 max-h-24 bg-gray-50 rounded-lg px-3"
          rows="1"
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputText.trim()}
          className={`p-2 rounded-full ${
            inputText.trim()
              ? 'bg-[#00A86B] text-white hover:bg-[#008f5c] shadow-md'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          } transition-all`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
