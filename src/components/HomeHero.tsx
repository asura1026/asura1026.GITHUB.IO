import React from 'react';

export const HomeHero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <h1>
            <span className="line1">Вэбсайт болон</span>
            <span className="grad">AI Chatbot хийж өгнө</span>
          </h1>
          <p className="hero-sub">
            Таны бизнесийг онлайнд гаргая
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>Үнийн санал авах</a>
            <a href="#services" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>Дэлгэрэнгүй</a>
          </div>
          <div className="hero-stats">
            <div className="hstat">
              <div className="hstat-num">20+</div>
              <div className="hstat-label">Хийсэн вебсайт</div>
            </div>
            <div className="hstat">
              <div className="hstat-num">100%</div>
              <div className="hstat-label">Сэтгэл ханамж</div>
            </div>
            <div className="hstat">
              <div className="hstat-num">7-14 хоног</div>
              <div className="hstat-label">Хүргэлтийн хугацаа</div>
            </div>
            <div className="hstat">
              <div className="hstat-num">24/7</div>
              <div className="hstat-label">Дэмжлэг</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
