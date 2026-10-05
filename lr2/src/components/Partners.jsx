import React from 'react';
import { partners } from '../data/teachers';

export function Partners() {
  return (
    <section className="partners">
      <h2 className="section-title">Партнёры</h2>
      <div className="partners__grid">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
          >
            <span className="partner-card__arrow">↗</span>
            <img src={p.logo} alt={p.name} className="partner-card__logo" />
            <p className="partner-card__text">{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}