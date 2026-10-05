import React, { useState } from 'react';

export function Hero({ onFindTeacher }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="hero">
      <div className="hero__image">
        {imgOk ? (
          <img
            src="/images/hero.jpg"
            alt="Преподаватель ведёт занятие"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="hero__image-placeholder">
            Преподаватель ведёт занятие
          </div>
        )}
      </div>
      <div className="hero__content">
        <h1 className="hero__title">
          Наши лекторы — признанные специалисты в своих областях,
          готовые делиться опытом и знаниями.
        </h1>
        <button className="hero__link" onClick={onFindTeacher}>
          НАЙТИ ЛЕКТОРА
        </button>
      </div>
    </section>
  );
}