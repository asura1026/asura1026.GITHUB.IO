import React, { useState } from 'react';
import { Mail, Phone, Facebook, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Conversion = () => {
  const initialFormState = {
    name: '',
    phone: '',
    serviceType: 'Вебсайт — 1,800,000₮-аас',
    websiteDetails: '',
    sector: '',
    hasWebsite: 'Үгүй',
    budget: '2-3 сая₮',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await emailjs.send(
        'service_n211iuq',
        'template_4f6pp6r',
        {
          name: formData.name,
          phone: formData.phone,
          serviceType: formData.serviceType,
          websiteDetails: formData.websiteDetails,
          sector: formData.sector,
          hasWebsite: formData.hasWebsite,
          budget: formData.budget,
          message: formData.message
        },
        'Z-o1JksuTgdt6wM-6R4BY'
      );
      setStatus('success');
      setFormData(initialFormState);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <section id="contact" className="register-section">
        <div className="register-wrap">
          <div className="reg-info">
            <div className="section-label">Холбоо барих</div>
            <h2>Бидэнтэй холбогдох</h2>
            <p>
              Та төслийнхөө талаар бидэнтэй холбогдож дэлгэрэнгүй мэдээлэл аваарай.
            </p>
            
            <div className="order-contact-list" style={{ marginTop: '2rem' }}>
              <div className="oc-item">
                <div className="oc-icon"><Phone color="var(--v)" /></div>
                <div>
                  <div className="oc-label">Утас</div>
                  <div className="oc-val">8525-4628</div>
                </div>
              </div>
              <div className="oc-item">
                <div className="oc-icon"><Mail color="var(--v2)" /></div>
                <div>
                  <div className="oc-label">И-мэйл</div>
                  <div className="oc-val">scalex1026@gmail.com</div>
                </div>
              </div>
              <div className="oc-item">
                <div className="oc-icon"><Facebook color="var(--cyan)" /></div>
                <div>
                  <div className="oc-label">Facebook</div>
                  <div className="oc-val">ScaleX Agency</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-card">
            <h3 className="form-card-title">Захиалгын маягт</h3>
            <p className="form-card-sub">Доорх формыг бөглөнө үү.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="fg">
                  <label>Таны нэр *</label>
                  <input 
                    type="text" 
                    placeholder="Нэрээ оруулна уу" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="fg">
                  <label>Утасны дугаар *</label>
                  <input 
                    type="tel" 
                    placeholder="Утасны дугаар" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="fg">
                <label>Үйлчилгээний төрөл *</label>
                <select 
                  value={formData.serviceType}
                  onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  required
                >
                  <option value="Вебсайт — 1,800,000₮-аас">Вебсайт — 1,800,000₮-аас</option>
                  <option value="AI Chatbot — 1,500,000₮-аас">AI Chatbot — 1,500,000₮-аас</option>
                  <option value="Вебсайт + Chatbot багц — 3,000,000₮-аас">Вебсайт + Chatbot багц — 3,000,000₮-аас</option>
                  <option value="Сарын дэмжлэг — 300,000₮/сар">Сарын дэмжлэг — 300,000₮/сар</option>
                  <option value="Зөвлөгөө авах — үнэгүй">Зөвлөгөө авах — үнэгүй</option>
                </select>
              </div>

              <div className="fg">
                <label>Та яг ямар өндөр зэргийн бүх зүйлийг шингээсэн вэбсайт хэрэгтэй вэ? *</label>
                <textarea 
                  placeholder="Жишээ: Дизайн, функц, хурд, SEO г.м бүгд багтсан..." 
                  required
                  value={formData.websiteDetails}
                  onChange={(e) => setFormData({...formData, websiteDetails: e.target.value})}
                  style={{ minHeight: '100px' }}
                ></textarea>
              </div>

              <div className="form-row">
                <div className="fg">
                  <label>Бизнесийн салбар</label>
                  <input 
                    type="text" 
                    placeholder="Жишээ: Худалдаа, Үйлчилгээ..." 
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                  />
                </div>
                <div className="fg">
                  <label>Төсөв *</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    required
                  >
                    <option value="2-3 сая₮">2-3 сая₮</option>
                    <option value="3-5 сая₮">3-5 сая₮</option>
                    <option value="5 саяас дээш">5 саяас дээш</option>
                    <option value="Одоогоор мэдэхгүй">Одоогоор мэдэхгүй</option>
                  </select>
                </div>
              </div>

              <div className="fg">
                <label>Одоо вебсайт байна уу? *</label>
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.8rem', flexWrap: 'wrap' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'var(--text)', fontSize: '0.9rem' }}>
                    <input 
                      type="radio" 
                      name="hasWebsite" 
                      value="Тийм" 
                      checked={formData.hasWebsite === 'Тийм'} 
                      onChange={(e) => setFormData({...formData, hasWebsite: e.target.value})} 
                      style={{ width: 'auto', accentColor: 'var(--v)' }} 
                    /> Тийм
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'var(--text)', fontSize: '0.9rem' }}>
                    <input 
                      type="radio" 
                      name="hasWebsite" 
                      value="Үгүй" 
                      checked={formData.hasWebsite === 'Үгүй'} 
                      onChange={(e) => setFormData({...formData, hasWebsite: e.target.value})} 
                      style={{ width: 'auto', accentColor: 'var(--v)' }} 
                    /> Үгүй
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'var(--text)', fontSize: '0.9rem' }}>
                    <input 
                      type="radio" 
                      name="hasWebsite" 
                      value="Байгаа ч шинэчлэх хэрэгтэй" 
                      checked={formData.hasWebsite === 'Байгаа ч шинэчлэх хэрэгтэй'} 
                      onChange={(e) => setFormData({...formData, hasWebsite: e.target.value})} 
                      style={{ width: 'auto', accentColor: 'var(--v)' }} 
                    /> Байгаа ч шинэчлэх хэрэгтэй
                  </label>
                </div>
              </div>

              <div className="fg">
                <label>Нэмэлт хүсэлт</label>
                <textarea 
                  placeholder="Төслийн зорилго, шаардлага..." 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              {status === 'success' && (
                <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: 'var(--green)', padding: '1rem', borderRadius: '8px', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                  <CheckCircle size={20} /> Амжилттай илгээлээ. 24 цагийн дотор эргүүлж залгах болно.
                </div>
              )}

              {status === 'error' && (
                <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444', padding: '1rem', borderRadius: '8px', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                  <AlertCircle size={20} /> Алдаа гарлаа, дахин оролдоно уу.
                </div>
              )}

              <button type="submit" className="form-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Илгээж байна...' : 'Илгээх'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
