import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
  // Ensure progress is between 0 and 100
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${normalizedProgress}%` }}
        />
      </div>
      <span className="progress-label">{normalizedProgress}%</span>
    </div>
  );
};

export default ProgressBar;