import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import ProgressBar from '../components/ProgressBar';
import TaskList from '../components/TaskList';
import './HomePage.css';

const HomePage = () => {
  const [progress, setProgress] = useState(0);

  const handleProgressUpdate = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div className="home-page">
      <header>
        <h1>Daily Progress</h1>
      </header>
      <main>
        <section className="calendar-section">
          <Calendar />
        </section>
        <section className="progress-section">
          <h2>Today's Progress</h2>
          <ProgressBar progress={progress} />
        </section>
        <section className="tasks-section">
          <h2>Daily Activities</h2>
          <TaskList onProgressUpdate={handleProgressUpdate} />
        </section>
      </main>
    </div>
  );
};

export default HomePage;