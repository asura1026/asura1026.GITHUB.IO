import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export const SocialProof = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Төсөл хөгжүүлэхэд хэр хугацаа шаардагдах вэ?",
      a: "Төслийн цар хүрээ, онцлогоос хамааран харилцан адилгүй байдаг. Энгийн танилцуулга вэб хуудас 1-2 долоо хоног, харин илүү нарийн ажиллагаатай систем эсвэл аппликейшн 1-3 сар хүртэлх хугацаа шаардаж болно."
    },
    {
      q: "Төлбөрийн нөхцөл ямар байдаг вэ?",
      a: "Бид төлбөрийг төслийн үе шатуудтай уялдуулан хуваан авах боломжийг санал болгодог. Ихэвчлэн гэрээ байгуулах үед 30-40%, дунд шатанд 30%, хүлээлгэн өгөх үед үлдэгдэл төлбөрийг авдаг."
    },
    {
      q: "Төсөл дууссаны дараа засвар үйлчилгээ хийдэг үү?",
      a: "Тийм ээ, бид төсөл хүлээлгэн өгснөөс хойш 3-6 сарын хугацаанд үнэ төлбөргүй техникийн тусламж, алдаа засах үйлчилгээ үзүүлдэг. Мөн цаашид урт хугацааны засвар үйлчилгээний гэрээ байгуулах боломжтой."
    },
    {
      q: "Өөрийн гэсэн сервер, домэйн нэртэй байх шаардлагатай юу?",
      a: "Хэрэв танд байхгүй бол бид таны өмнөөс найдвартай сервер (hosting) болон домэйн нэр (domain name) худалдан авах, тохируулах ажлыг бүрэн хариуцаж хийж өгөх боломжтой."
    }
  ];

  return (
    <>
      <section>
        <div className="tc">
          <div className="section-label">Сэтгэгдэл</div>
          <h2 className="section-title">Харилцагчдын үнэлгээ</h2>
          <p className="section-sub">
            Бидэнтэй хамтран ажилласан байгууллага, хувь хүмүүсийн сэтгэгдлээс.
          </p>
        </div>
        <div className="testi-grid">
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Вэбсайтгүйгээр борлуулалт хийхэд хэцүү байсан. ScaleX 10 хоногт хийж өгсөн, одоо захиалга автоматаар ирдэг болсон."
            </p>
            <div className="testi-author">
              <div className="testi-av">М</div>
              <div>
                <div className="testi-name">Д. Мөнхбат</div>
                <div className="testi-role">Жижиг бизнес эзэмшигч</div>
                <div className="testi-company">Онлайн дэлгүүр</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Chatbot маань өдөр шөнөгүй захиалга авдаг болсон. Надад ердөө утасны дугаар асуугаад л мессеж явуулдаг — маш хялбар!"
            </p>
            <div className="testi-author">
              <div className="testi-av">Н</div>
              <div>
                <div className="testi-name">Б. Наранцэцэг</div>
                <div className="testi-role">Гоо сайхны салон эзэмшигч</div>
                <div className="testi-company">Beauty Studio</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">
              "Үнэ нь боломжийн, хийж өгсөн ажил нь мэргэжлийн. Найздаа ч санал болгосон."
            </p>
            <div className="testi-author">
              <div className="testi-av">Б</div>
              <div>
                <div className="testi-name">Г. Батзориг</div>
                <div className="testi-role">Ресторан менежер</div>
                <div className="testi-company">Хоолны газар</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="process-section">
        <div className="tc">
          <div className="section-label">Түгээмэл асуултууд</div>
          <h2 className="section-title">Таны асуултад хариулъя</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                <h4>{faq.q}</h4>
                <div className="faq-icon"><Plus size={16} /></div>
              </div>
              <div className="faq-a" style={{ maxHeight: openFaq === idx ? '200px' : '0' }}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
