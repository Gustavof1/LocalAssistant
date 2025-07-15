import { create } from 'zustand';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

interface ChatState {
  messages: Message[];
  addMessage: (msg: Message) => void;
  clear: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [
    { role: 'ai', content: 'Olá! Sou seu assistente NutriAI. Como posso ajudar na sua saúde e nutrição hoje?' }
  ],
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
  clear: () => set({ messages: [] }),
}));
