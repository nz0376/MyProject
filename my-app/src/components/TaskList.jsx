import React, { useState } from 'react';
import './TaskList.css';

const predefinedTasks = [
  {
    id: 1,
    category: 'Light Exercise',
    activities: [
      'Gentle morning stretching - 10 minutes',
      'Short walk around the house/garden - 15 minutes',
      'Chair yoga exercises - 10 minutes',
      'Light arm exercises with small weights - 5 minutes'
    ]
  },
  {
    id: 2,
    category: 'Mental Wellness',
    activities: [
      'Reading a book/newspaper - 20 minutes',
      'Puzzle solving (crossword/sudoku)',
      'Mindfulness meditation - 10 minutes',
      'Memory card games'
    ]
  },
  {
    id: 3,
    category: 'Social Activities',
    activities: [
      'Phone call with family/friends',
      'Join community activities',
      'Write letters or emails',
      'Video chat with loved ones'
    ]
  },
  {
    id: 4,
    category: 'Daily Living',
    activities: [
      'Light gardening',
      'Organize a small space',
      'Gentle house cleaning',
      'Preparing a simple meal'
    ]
  }
];

const TaskList = ({ onProgressUpdate }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTaskToggle = (task) => {
    let newCompletedTasks;
    if (completedTasks.includes(task)) {
      newCompletedTasks = completedTasks.filter(t => t !== task);
    } else {
      newCompletedTasks = [...completedTasks, task];
    }
    setCompletedTasks(newCompletedTasks);
    
    // Calculate and update progress
    const totalTasks = predefinedTasks.reduce((sum, category) => sum + category.activities.length, 0);
    const progress = (newCompletedTasks.length / totalTasks) * 100;
    onProgressUpdate(progress);
  };

  return (
    <div className="task-list">
      {predefinedTasks.map((category) => (
        <div key={category.id} className="task-category">
          <h3>{category.category}</h3>
          <div className="task-items">
            {category.activities.map((activity, index) => (
              <div 
                key={index} 
                className={`task-item ${completedTasks.includes(activity) ? 'completed' : ''}`}
                onClick={() => handleTaskToggle(activity)}
              >
                <input 
                  type="checkbox" 
                  checked={completedTasks.includes(activity)}
                  readOnly
                />
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;