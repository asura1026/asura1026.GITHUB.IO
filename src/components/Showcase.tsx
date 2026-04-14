import React, { useState } from 'react';
import { Search, FileText, Code, Rocket, ShieldCheck, Clock, Plus } from 'lucide-react';

export const Showcase = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <section className="process-section">
        <div className="tc">
          <div className="section-label">Ажлын дараалал</div>
          <h2 className="section-title">Бид хэрхэн ажилладаг вэ?</h2>
        </div>
        <div className="process-steps">
          <div className="pstep">
            <div className="pstep-num">1</div>
            <div className="pstep-icon"><Search color="var(--cyan)" /></div>
            <h4>Холбогдох</h4>
            <p>Хэрэгцээ тодруулах, зорилгоо ярилцах.</p>
          </div>
          <div className="pstep">
            <div className="pstep-num">2</div>
            <div className="pstep-icon"><FileText color="var(--v2)" /></div>
            <h4>Санал</h4>
            <p>Үнэ тохирох, гэрээ хийх.</p>
          </div>
          <div className="pstep">
            <div className="pstep-num">3</div>
            <div className="pstep-icon"><Code color="var(--v)" /></div>
            <h4>Хөгжүүлэх</h4>
            <p>7-14 хоногт хийж гүйцэтгэх.</p>
          </div>
          <div className="pstep">
            <div className="pstep-num">4</div>
            <div className="pstep-icon"><Rocket color="var(--v3)" /></div>
            <h4>Хүлээлгэх</h4>
            <p>Сургалт өгөх, дэмжлэг үзүүлэх.</p>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="tc">
          <div className="section-label">Бидний хийх ажлууд</div>
          <h2 className="section-title">Бидний хийх ажлууд</h2>
        </div>
        <div className="portfolio-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div className="pf-card">
            <div className="pf-thumb">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Онлайн дэлгүүр" referrerPolicy="no-referrer" />
            </div>
            <div className="pf-body">
              <div className="pf-type">Вэбсайт</div>
              <h4>Онлайн дэлгүүр вэбсайт</h4>
              <p>Бүтээгдэхүүн харуулах, захиалга авах функцтэй орчин үеийн онлайн дэлгүүр</p>
            </div>
          </div>
          <div className="pf-card">
            <div className="pf-thumb">
              <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="AI Chatbot" referrerPolicy="no-referrer" />
            </div>
            <div className="pf-body">
              <div className="pf-type">AI Chatbot</div>
              <h4>AI Захиалга авагч Chatbot</h4>
              <p>24/7 ажилладаг, Монгол хэлээр ярьдаг, захиалга бүртгэдэг ухаалаг chatbot</p>
            </div>
          </div>
          <div className="pf-card">
            <div className="pf-thumb">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Компанийн сайт" referrerPolicy="no-referrer" />
            </div>
            <div className="pf-body">
              <div className="pf-type">Багц</div>
              <h4>Үйлчилгээний компанийн сайт</h4>
              <p>Танилцуулга вэбсайт болон автомат chatbot хосолсон бизнесийн шийдэл</p>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantee-section" style={{ background: 'var(--bg2)', padding: '5rem 6%', borderTop: '1px solid var(--border)' }}>
        <div className="tc">
          <div className="section-label">Баталгаа</div>
          <h2 className="section-title">Бидний амлалт</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: 'var(--card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <ShieldCheck color="var(--v2)" size={32} />
              <h3 style={{ fontSize: '1.2rem' }}>Ажлын баталгаа</h3>
            </div>
            <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
              50% урьдчилгаа, үлдэгдлийг дуусгавал төлнө. Хийж өгч чадахгүй бол урьдчилгааг 100% буцаан олгоно.
            </p>
          </div>
          <div style={{ background: 'var(--card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Clock color="var(--cyan)" size={32} />
              <h3 style={{ fontSize: '1.2rem' }}>Хүргэлтийн баталгаа</h3>
            </div>
            <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
              7-14 хоногт хийж өгнө, хугацаа хэтэрвэл 10% хөнгөлөлт үзүүлнэ. <br/><br/>
              <span style={{ fontSize: '0.85rem', color: 'var(--v3)' }}>* Яаралтай (7 хоногоос богино) хугацаанд хийлгэх бол +30% нэмэгдэнэ.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="tc">
          <div className="section-label">Нэмэлт үйлчилгээ</div>
          <h2 className="section-title">Сарын дэмжлэгийн үйлчилгээ</h2>
          <p className="section-sub">
            Таны вэбсайт болон чатботын хэвийн ажиллагааг хангаж, байнга шинэчилж байх үйлчилгээ.
          </p>
        </div>
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--v2)', marginBottom: '1.5rem', textAlign: 'center' }}>
            ₮300,000 - 500,000 <span style={{ fontSize: '1rem', color: 'var(--muted)' }}>/ сар</span>
          </div>
          <ul className="svc-features">
            <li>Тогтмол засвар үйлчилгээ</li>
            <li>Мэдээлэл, контент шинэчлэл</li>
            <li>Техникийн бүрэн дэмжлэг</li>
            <li>Аюулгүй байдлын хяналт</li>
          </ul>
        </div>
      </section>

      <section className="faq-section" style={{ padding: '5rem 6%' }}>
        <div className="tc">
          <div className="section-label">Түгээмэл асуултууд</div>
          <h2 className="section-title">Асуулт & Хариулт</h2>
        </div>
        <div className="faq-list">
          {[
            { q: 'Хэр хугацаа шаардагдах вэ?', a: 'Төслийн цар хүрээнээс хамааран ихэвчлэн 7-14 хоног шаардагдана.' },
            { q: 'Төлбөрийн нөхцөл ямар вэ?', a: 'Гэрээ байгуулахад 50% урьдчилгаа, ажил бүрэн дуусаж хүлээлгэн өгөхөд үлдэгдэл 50%-ийг төлнө.' },
            { q: 'Засвар үйлчилгээ байгаа юу?', a: 'Тийм ээ, төсөл хүлээлгэн өгснөөс хойш 1 сарын хугацаанд үнэгүй засвар үйлчилгээ, техникийн дэмжлэг үзүүлнэ.' },
            { q: 'Сервер, домэйн хэрэгтэй юу?', a: 'Тийм ээ, вэбсайт ажиллуулахад сервер болон домэйн нэр шаардлагатай. Бид танд хамгийн тохиромжтойг нь сонгож, тохируулахад туслах болно.' }
          ].map((faq, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => toggleFaq(i)}>
                <h4>{faq.q}</h4>
                <div className="faq-icon"><Plus size={16} /></div>
              </div>
              <div className="faq-a" style={{ maxHeight: openFaq === i ? '200px' : '0' }}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
