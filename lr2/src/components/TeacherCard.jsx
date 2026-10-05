import React, { useState } from 'react';

export function TeacherCard({ teacher, onOpen }) {
  const [imgOk, setImgOk] = useState(!!teacher.photo);

  return (
    <article className="teacher-card">
      <div className="teacher-card__photo-box">
        <div className="teacher-card__photo-placeholder">
          {imgOk && teacher.photo ? (
            <img
              src={teacher.photo}
              alt={teacher.name}
              onError={() => setImgOk(false)}
            />
          ) : (
            'место для фото преподавателя'
          )}
        </div>
        <div className="teacher-card__line" />
      </div>

      <div className="teacher-card__info">
        <h3 className="teacher-card__name">
          {teacher.name}.<br />
          Подробнее о преподавателе и его дисциплинах.
        </h3>
        <p className="teacher-card__meta">
          <strong>Образование:</strong> {teacher.education}
        </p>
        <p className="teacher-card__meta">
          <strong>Стаж:</strong> {teacher.experience}
          {teacher.degree !== 'нет' && ` • ${teacher.degree}`}
        </p>
        <p className="teacher-card__courses">
          <strong>Дисциплины:</strong>{' '}
          {teacher.courses.map((c) => c.title).join(', ')}
        </p>
        <button
          className="teacher-card__btn"
          onClick={() => onOpen(teacher.id)}
        >
          ПОДРОБНЕЕ О ЛЕКТОРЕ →
        </button>
      </div>
    </article>
  );
}