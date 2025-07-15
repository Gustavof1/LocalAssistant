
import { useRef, useState } from 'react';
import { useChatStore } from '../store/useChatStore';
import { useTransformers } from '../hooks/useTransformers';

const Chat = () => {
  const { messages, addMessage } = useChatStore();
  const { loading, error, generate } = useTransformers();
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    addMessage({ role: 'user', content: input });
    setSending(true);
    setInput('');
    try {
      const aiResponse = await generate(input);
      addMessage({ role: 'ai', content: aiResponse });
    } catch (e: any) {
      addMessage({ role: 'ai', content: 'Erro ao gerar resposta. Tente novamente.' });
    } finally {
      setSending(false);
      setTimeout(() => {
        chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="bento-cell bg-white rounded-2xl p-6 md:col-span-3 lg:col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">NutriAI Assistant</h2>
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
          <i className="fas fa-robot text-green-500"></i>
        </div>
      </div>
      <div ref={chatRef} className="h-64 overflow-y-auto mb-4 space-y-3 pr-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.role} p-3 max-w-[80%] ${msg.role === 'user' ? 'ml-auto' : ''}`}>
            <p className={`text-sm ${msg.role === 'user' ? 'text-gray-800' : 'text-gray-700'}`}>{msg.content}</p>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Pergunte sobre saúde..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          disabled={sending || loading}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={handleSend}
          disabled={sending || loading}
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
      {(sending || loading) && (
        <div className="mt-2">
          <div className="loader"></div>
        </div>
      )}
      {error && <div className="text-red-500 text-xs mt-2">{error}</div>}
    </div>
  );
};

export default Chat;
