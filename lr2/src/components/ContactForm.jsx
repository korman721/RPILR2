import React, { useState } from 'react';

export function ContactForm({ teacherName }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Заявка:', { ...form, teacher: teacherName });
    setSent(true);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {sent && <p className="contact-form__success">Заявка отправлена!</p>}
      <input name="name" placeholder="Ваше имя" value={form.name} onChange={handleChange} required />
      <input name="phone" placeholder="Телефон" value={form.phone} onChange={handleChange} required />
      <textarea name="message" placeholder="Комментарий" value={form.message} onChange={handleChange} />
      <button type="submit" className="contact-form__btn">Отправить заявку</button>
    </form>
  );
}