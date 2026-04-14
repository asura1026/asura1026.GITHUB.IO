import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AIChatbot } from './AIChatbot';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '24px', height: '24px'}}>
            <line x1="12" y1="12" x2="78" y2="78" stroke="#f2eaf0" strokeWidth="12" strokeLinecap="round" opacity="0.9"/>
            <line x1="78" y1="12" x2="12" y2="78" stroke="#e8189c" strokeWidth="12" strokeLinecap="round"/>
          </svg>
          ScaleX
        </a>
        <ul className="nav-links">
          <li><a href="#services">Үйлчилгээ</a></li>
          <li><a href="#pricing">Үнэ</a></li>
          <li><a href="#portfolio">Бидний хийх ажлууд</a></li>
          <li><a href="#contact">Холбоо барих</a></li>
        </ul>
        <div className="nav-right">
          <a href="#contact" className="nav-cta" style={{ textDecoration: 'none' }}>Үнийн санал авах</a>
        </div>
        <button className="hamburger" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={24} color="var(--text)" />
        </button>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileMenuOpen(false)}>
          <X size={32} />
        </button>
        <a href="#services" onClick={() => setMobileMenuOpen(false)}>Үйлчилгээ</a>
        <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Үнэ</a>
        <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Бидний хийх ажлууд</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Холбоо барих</a>
      </div>

      <AIChatbot />

      <main>{children}</main>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '24px', height: '24px'}}>
                <line x1="12" y1="12" x2="78" y2="78" stroke="#f2eaf0" strokeWidth="12" strokeLinecap="round" opacity="0.9"/>
                <line x1="78" y1="12" x2="12" y2="78" stroke="#e8189c" strokeWidth="12" strokeLinecap="round"/>
              </svg>
              ScaleX
            </a>
            <p>Монголын дижитал шилжилтийг хурдасгаж, дэлхийн түвшний технологийн шийдлийг таны бизнест нэвтрүүлнэ.</p>
          </div>
          <div className="footer-col">
            <h5>Цэс</h5>
            <ul>
              <li><a href="#services">Үйлчилгээ</a></li>
              <li><a href="#pricing">Үнэ</a></li>
              <li><a href="#portfolio">Бидний хийх ажлууд</a></li>
              <li><a href="#contact">Холбоо барих</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Нийгмийн сүлжээ</h5>
            <ul>
              <li><a href="https://www.facebook.com/share/1DnQUVgSxG/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/scalexagency">Instagram</a></li>
              <li><a href="https://twitter.com/scalexagency">Twitter</a></li>
              <li><a href="https://www.linkedin.com/company/scalexagency">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 ScaleX. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </footer>
    </>
  );
};
