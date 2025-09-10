
import { useEffect, useRef, useState } from 'react';
import { useChatStore } from '../store/useChatStore';
import { useTransformers } from '../hooks/useTransformers';
import { useUserDataStore } from '../store/useUserDataStore';
import { nutritionDatabase } from '../data/nutrition';

const Chat = () => {
    const { messages, addMessage } = useChatStore();
    const { loading, error, generate } = useTransformers();
    const { dailyData } = useUserDataStore();
    const [input, setInput] = useState('');
    const [sending, setSending] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userInput = input;
        addMessage({ role: 'user', content: userInput });
        setSending(true);
        setInput('');

        const today = new Date().toISOString().split('T')[0];
        const todayData = dailyData[today] || { food: [], exercise: [] };
        const totals = todayData.food.reduce(
            (acc, item) => {
                const foodData = nutritionDatabase[item.name.toLowerCase()];
                if (foodData) {
                    acc.calories += foodData.calories;
                    acc.protein += foodData.protein;
                    acc.carbs += foodData.carbs;
                }
                return acc;
            },
            { calories: 0, protein: 0, carbs: 0 }
        );
        const exerciseSummary = todayData.exercise.map(e => `${e.name} (${e.caloriesBurned} kcal)`).join(', ');

        const context = `
            Aqui estão os dados de saúde do usuário de hoje:
            - Calorias totais: ${totals.calories.toFixed(0)}
            - Proteína total: ${totals.protein.toFixed(1)}g
            - Carboidratos totais: ${totals.carbs.toFixed(1)}g
            - Exercícios: ${exerciseSummary || 'Nenhum exercício registrado'}
            Responda a seguinte pergunta do usuário com base nesses dados.
        `;

        try {
            const aiResponse = await generate(`${context}\n\nUsuário: ${userInput}`);
            addMessage({ role: 'ai', content: aiResponse });
        } catch (e: any) {
            addMessage({ role: 'ai', content: `Erro: ${e.message}` });
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="bento-cell bg-white rounded-2xl p-6 flex flex-col h-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">NutriAI Assistant</h2>
            <div ref={chatRef} className="flex-1 overflow-y-auto mb-4 space-y-3 pr-2">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`chat-message ${msg.role} p-3 max-w-[80%] ${msg.role === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                        <p className={`text-sm ${msg.role === 'user' ? 'text-gray-800' : 'text-gray-700'}`}>{msg.content}</p>
                    </div>
                ))}
                {(sending || loading) && (
                    <div className="flex justify-center mt-2">
                        <div className="loader"></div>
                    </div>
                )}
                {error && <div className="text-red-500 text-xs mt-2">{error}</div>}
            </div>
            <div className="flex space-x-2">
                <input
                    type="text"
                    placeholder="Pergunte sobre sua saúde..."
                    className="flex-1 px-4 py-2 border rounded-lg"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    disabled={sending || loading}
                />
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
                    onClick={handleSend}
                    disabled={sending || loading}
                >
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    );
};

export default Chat;
