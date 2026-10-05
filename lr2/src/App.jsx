import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Partners } from './components/Partners';
import { TeacherList } from './components/TeacherList';
import { TeacherPage } from './components/TeacherPage';
import { Footer } from './components/Footer';
import { teachers } from './data/teachers';
import './styles/main.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [selectedTeacherId, setSelectedTeacherId] = useState(null);

  const selectedTeacher = teachers.find((t) => t.id === selectedTeacherId);

  const navigate = (key) => {
    setPage(key);
    setSelectedTeacherId(null);
    window.scrollTo(0, 0);
  };

  const openTeacher = (id) => {
    setSelectedTeacherId(id);
    window.scrollTo(0, 0);
  };

  const backToList = () => setSelectedTeacherId(null);

  return (
    <div className="app">
      <Header currentPage={page} onNavigate={navigate} />

      <main className="main">
        {page === 'home' && (
          <>
            <Hero onFindTeacher={() => navigate('teachers')} />
            <About />
          </>
        )}

        {page === 'partners' && <Partners />}
        {page === 'about' && <About />}
        {page === 'teachers' && !selectedTeacherId && (
          <TeacherList onOpen={openTeacher} />
        )}
        {page === 'teachers' && selectedTeacherId && (
          <TeacherPage teacher={selectedTeacher} onBack={backToList} />
        )}
      </main>

      <Footer />
    </div>
  );
}