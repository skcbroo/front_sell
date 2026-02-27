import React, { useState, useRef, useEffect } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Mensagem de boas-vindas ao entrar na página
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

  // Rola automaticamente para a última mensagem
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
      // 🔁 Substitua pela URL do seu backend
      const response = await fetch('http://localhost:3001/api/chat', {
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
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-100">
      {/* Cabeçalho */}
      <div className="bg-green-600 text-white px-4 py-3 flex items-center gap-3 shadow-md">
        <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center">
          {/* Ícone do bot (pode ser um SVG ou imagem) */}
          <span className="text-green-600 text-xl">🤖</span>
        </div>
        <div>
          <h2 className="font-semibold">Assistente de Propostas</h2>
          <p className="text-xs text-green-200">Online • responde rápido</p>
        </div>
      </div>

      {/* Área de mensagens */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#e5ded8]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-white mr-2 flex-shrink-0 flex items-center justify-center">
                <span className="text-green-600 text-sm">🤖</span>
              </div>
            )}
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                msg.sender === 'user'
                  ? 'bg-green-100 text-gray-800 rounded-br-none'
                  : 'bg-white text-gray-800 rounded-bl-none'
              } ${msg.isError ? 'bg-red-100 text-red-800' : ''}`}
            >
              <p className="text-sm">{msg.text}</p>
              <span className="text-[10px] text-gray-500 block text-right mt-1">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}

        {/* Indicador de digitação */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-full bg-white mr-2 flex-shrink-0 flex items-center justify-center">
              <span className="text-green-600 text-sm">🤖</span>
            </div>
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none">
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
        <button className="p-2 text-gray-500 hover:text-gray-700">
          📎
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
          className="flex-1 resize-none border-0 focus:ring-0 focus:outline-none text-sm py-2 max-h-24"
          rows="1"
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputText.trim()}
          className={`p-2 rounded-full ${
            inputText.trim()
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          } transition-colors`}
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
