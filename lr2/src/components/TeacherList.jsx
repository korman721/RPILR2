import React from 'react';
import { teachers } from '../data/teachers';
import { TeacherCard } from './TeacherCard';

export function TeacherList({ onOpen }) {
  return (
    <section className="teachers">
      <h2 className="section-title">Лекторы</h2>
      <div className="teachers__list">
        {teachers.map((t) => (
          <TeacherCard key={t.id} teacher={t} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}