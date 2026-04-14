import React from 'react';
import { Zap, Shield, Rocket, Globe, MessageSquare, Layers } from 'lucide-react';

export const Features = () => {
  return (
    <>
      <section id="services">
        <div className="tc">
          <div className="section-label">Үйлчилгээ</div>
          <h2 className="section-title">Бидний санал болгох багцууд</h2>
        </div>
        <div className="services-grid" id="pricing">
          <div className="svc-card">
            <div className="svc-icon a"><Globe color="var(--v)" /></div>
            <h3>Вебсайт</h3>
            <div className="svc-price">₮1,800,000<span className="svc-price-note" style={{fontSize: '0.82rem', color: 'var(--muted)'}}>-аас эхлэн</span></div>
            <ul className="svc-features">
              <li>Хурд, хамгаалалт</li>
              <li>Загварлаг дизайн</li>
              <li>Маркетингийн функц</li>
              <li>Google хайлтад гарах (SEO)</li>
            </ul>
            <a href="#contact" className="svc-btn svc-btn-outline" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>Үнийн санал авах</a>
          </div>
          
          <div className="svc-card svc-featured">
            <div className="svc-badge">Эрэлттэй</div>
            <div className="svc-icon b"><MessageSquare color="var(--v2)" /></div>
            <h3>AI Chatbot</h3>
            <div className="svc-price">₮1,500,000<span className="svc-price-note" style={{fontSize: '0.82rem', color: 'var(--muted)'}}>-аас эхлэн</span></div>
            <div className="svc-save">Ухаалаг туслах</div>
            <ul className="svc-features">
              <li>24/7 автомат хариулт</li>
              <li>Монгол хэлээр ярих</li>
              <li>Захиалга авах чадвартай</li>
              <li>Вебсайтад суулгах</li>
            </ul>
            <a href="#contact" className="svc-btn" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>Үнийн санал авах</a>
          </div>

          <div className="svc-card">
            <div className="svc-icon c"><Layers color="var(--cyan)" /></div>
            <h3>Хосолсон багц</h3>
            <div className="svc-price">₮3,000,000<span className="svc-price-note" style={{fontSize: '0.82rem', color: 'var(--muted)'}}>-аас эхлэн</span></div>
            <ul className="svc-features">
              <li>Вебсайт + Chatbot хамт</li>
              <li>2 сарын дэмжлэг</li>
              <li>Admin эрх</li>
              <li>Сарын тайлан</li>
            </ul>
            <a href="#contact" className="svc-btn svc-btn-outline" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>Үнийн санал авах</a>
          </div>
        </div>
      </section>

      <section className="roi-section" style={{ background: 'var(--bg2)', padding: '5rem 6%', borderTop: '1px solid var(--border)' }}>
        <div className="tc">
          <div className="section-label">Хөрөнгө оруулалтын өгөөж</div>
          <h2 className="section-title">AI Chatbot-ийн бодит үр дүн</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: 'var(--card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <h3 style={{ color: 'var(--v3)', marginBottom: '1rem', fontSize: '1.2rem' }}>Chatbot байхгүй үед ❌</h3>
            <ul className="svc-features">
              <li>Ажилтан утсанд хариулна</li>
              <li>Ажилтны цалин: Сард ~1,000,000₮</li>
              <li>Ажлын цагаар л хариу өгнө</li>
              <li>Хүнээс хамааралтай алдаа гарна</li>
            </ul>
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(108,77,255,0.1), rgba(168,85,247,0.06))', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(108,77,255,0.5)' }}>
            <h3 style={{ color: 'var(--green)', marginBottom: '1rem', fontSize: '1.2rem' }}>Chatbot байвал ✅</h3>
            <ul className="svc-features">
              <li>24/7 автомат хариулт</li>
              <li>Нэг удаагийн төлбөр: 1,500,000₮</li>
              <li>Хэзээ ч амарч, унтахгүй</li>
              <li>Хэрэглэгчийн мэдээллийг алдаагүй бүртгэнэ</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="tc">
          <div className="section-label">Яагаад биднийг сонгох вэ?</div>
          <h2 className="section-title">Бидний давуу талууд</h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-num">01</div>
            <div className="why-icon"><Zap color="var(--gold)" /></div>
            <h4>Хурдан хүргэлт</h4>
            <p>Таны төслийг ердөө 7 хоногт бэлэн болгож хүлээлгэн өгнө.</p>
          </div>
          <div className="why-card">
            <div className="why-num">02</div>
            <div className="why-icon"><Shield color="var(--green)" /></div>
            <h4>Монгол бизнест зориулсан</h4>
            <p>Орон нутгийн зах зээл, хэрэглэгчдийн онцлогийг бүрэн ойлгож ажиллана.</p>
          </div>
          <div className="why-card">
            <div className="why-num">03</div>
            <div className="why-icon"><Rocket color="var(--v3)" /></div>
            <h4>Байнгын дэмжлэг</h4>
            <p>Хийгээд орхихгүй, цаашид үргэлж тусалж, системийг хэвийн ажиллуулна.</p>
          </div>
        </div>
      </section>
    </>
  );
};
