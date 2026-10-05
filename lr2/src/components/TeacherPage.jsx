import React, { useState } from 'react';
import { ContactForm } from './ContactForm';

export function TeacherPage({ teacher, onBack }) {
  const [imgOk, setImgOk] = useState(!!teacher?.photo);

  if (!teacher) return null;

  return (
    <div className="teacher-page">
      <button className="teacher-page__back" onClick={onBack}>
        ← Назад к лекторам
      </button>

      <div className="teacher-page__header">
        <div className="teacher-page__photo-box">
          {imgOk && teacher.photo ? (
            <img
              src={teacher.photo}
              alt={teacher.name}
              className="teacher-page__photo"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="teacher-page__photo-placeholder">
              место для фото преподавателя
            </div>
          )}
        </div>

        <div className="teacher-page__info">
          <h1 className="teacher-page__name">{teacher.name}</h1>
          <p>
            <strong>Образование:</strong> {teacher.education}
          </p>
          <p>
            <strong>Стаж:</strong> {teacher.experience}
          </p>
          {teacher.degree !== 'нет' && (
            <p>
              <strong>Учёная степень:</strong> {teacher.degree}
            </p>
          )}
        </div>
      </div>

      <h2>Преподаваемые дисциплины</h2>
      {teacher.courses.map((course) => (
        <div key={course.title} className="course-block">
          <h3>{course.title}</h3>
          <p className="course-block__desc">{course.description}</p>
          <ol>
            {course.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ol>
        </div>
      ))}

      <h2>Тарифы</h2>
      <table className="tariff-table">
        <thead>
          <tr>
            <th>Услуга</th>
            <th>Стоимость</th>
          </tr>
        </thead>
        <tbody>
          {teacher.tariffs.map((t) => (
            <tr key={t.name}>
              <td>{t.name}</td>
              <td>{t.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Записаться на занятие</h2>
      <ContactForm teacherName={teacher.name} />
    </div>
  );
}