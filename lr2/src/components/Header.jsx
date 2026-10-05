import React from 'react';

const LINKS = [
  { key: 'home', label: 'Главная' },
  { key: 'partners', label: 'Партнёры' },
  { key: 'about', label: 'О нас' },
  { key: 'teachers', label: 'Лекторы' },
];

export function Header({ currentPage, onNavigate }) {
  return (
    <header className="header">
      <nav className="nav">
        {LINKS.map((link) => (
          <button
            key={link.key}
            className={`nav__link ${currentPage === link.key ? 'nav__link--active' : ''}`}
            onClick={() => onNavigate(link.key)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}