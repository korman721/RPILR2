import React from 'react';

export function Nav({ currentPage, onNavigate }) {
  const links = [
    { key: 'home', label: 'Главная' },
    { key: 'partners', label: 'Партнёры' },
    { key: 'about', label: 'О нас' },
    { key: 'teachers', label: 'Лекторы' },
  ];

  return (
    <nav className="nav">
      {links.map((link) => (
        <button
          key={link.key}
          className={`nav__link ${currentPage === link.key ? 'nav__link--active' : ''}`}
          onClick={() => onNavigate(link.key)}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}