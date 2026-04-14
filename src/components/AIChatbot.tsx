import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

// API key is securely stored in the backend server

const SYSTEM = `Чи ScaleX Agency-н AI туслах chatbot юм. Монгол хэлээр хариулна уу. Товч, найрсаг бай.

БИЗНЕСИЙН МЭДЭЭЛЭЛ:
Компани: ScaleX Agency
Чиглэл: Вэбсайт болон AI chatbot захиалгаар хийдэг агентлаг

ҮЙЛЧИЛГЭЭ БА ҮНЭ:
- Вэбсайт хийх: 1,800,000₮
- AI Chatbot хийх: 1,500,000₮
- Вэбсайт + Chatbot багц (хамгийн ашигтай!): 3,000,000₮

ХОЛБОО БАРИХ:
- Утас: 8525-4628
- Имэйл: scalex1026@gmail.com

ЗАХИАЛГЫН ПРОЦЕСС:
1. Chatbot-д үнийн санал авах хүсэлт мэдүүлнэ (нэр, утас, ямар вэбсайт хэрэгтэй байгаагаа хэлнэ)
2. ScaleX баг 24 цагийн дотор эргүүлж залгах болно
3. Гэрээ байгуулж ажил эхэлнэ

ДҮРЭМ:
- Захиалга авбал хэрэглэгчийн нэр, утасны дугаар заавал асуу
- Багц үйлчилгээг идэвхтэй санал болго — хамгийн ашигтай
- ScaleX-тай холбогдохыг үргэлж урамшуул`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
  time: string;
  quickReplies?: [string, string][];
}

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getTime = () => {
    const d = new Date();
    return d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0');
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: 'Сайн байна уу! 👋 Би ScaleX Agency-н AI туслах.\n\nВэбсайт, AI chatbot захиалах эсвэл үнэ, мэдээлэл авахыг хүсвэл бэлэн байна!',
        time: getTime(),
        quickReplies: [
          ['💰 Үнийн мэдээлэл', 'Үнийн мэдээлэл авч болох уу?'],
          ['📋 Захиалга өгөх', 'Захиалга өгмөөр байна'],
          ['📞 Холбоо барих', 'Холбоо барих мэдээлэл хэрэгтэй байна']
        ]
      }]);
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim() || isTyping) return;

    const newUserMsg: Message = { role: 'user', content: text.trim(), time: getTime() };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Prepare messages for API (excluding time and quickReplies)
      const apiMessages = messages.map(m => ({ role: m.role, content: m.content })).concat({ role: 'user', content: text.trim() });

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20240620',
          max_tokens: 1000,
          system: SYSTEM,
          messages: apiMessages
        })
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      
      const reply = data.content[0].text;
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: reply,
        time: getTime(),
        quickReplies: [
          ['💰 Үнэ', 'Үнийн мэдээлэл авч болох уу?'],
          ['📋 Захиалга', 'Захиалга өгмөөр байна'],
          ['📞 Холбоо', 'Холбоо барих мэдээлэл хэрэгтэй']
        ]
      }]);
    } catch (e) {
      console.error(e);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Алдаа гарлаа 😔\n\nAPI key зөв тавигдсан эсэхийг шалгаарай эсвэл scalex1026@gmail.com-д бичнэ үү.',
        time: getTime()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        className="chatbot-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        title="Chatbot нээх"
      >
        {!isOpen && <div className="chatbot-notif-dot"></div>}
        {isOpen ? <X size={26} color="white" /> : <MessageSquare size={26} color="white" />}
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-avatar">SX</div>
          <div className="chatbot-info">
            <div className="chatbot-name">ScaleX Agency</div>
            <div className="chatbot-status">
              <span className="chatbot-status-dot"></span>
              Онлайн — хариулахад бэлэн
            </div>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chatbot-msg-row ${msg.role}`}>
              <div className="chatbot-bubble">{msg.content}</div>
              <div className="chatbot-time">{msg.time}</div>
              
              {msg.quickReplies && idx === messages.length - 1 && !isTyping && (
                <div className="chatbot-quick-btns">
                  {msg.quickReplies.map(([label, val], i) => (
                    <button 
                      key={i} 
                      className="chatbot-qbtn"
                      onClick={() => handleSend(val)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="chatbot-msg-row assistant">
              <div className="chatbot-bubble">
                <div className="chatbot-typing-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-footer">
          <input 
            ref={inputRef}
            type="text" 
            className="chatbot-input"
            placeholder="Мессеж бичнэ үү..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
          />
          <button 
            className="chatbot-send-btn" 
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isTyping}
          >
            <Send size={18} color="white" />
          </button>
        </div>
      </div>
    </>
  );
};
