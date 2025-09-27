import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import './StatisticsPage.css';

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const StatisticsPage = () => {
  // Sample data - in a real app, this would come from your backend
  const activityData = {
    labels: [
      'Light Exercise',
      'Mental Wellness',
      'Social Activities',
      'Daily Living'
    ],
    datasets: [{
      data: [30, 25, 20, 25], // Sample percentages
      backgroundColor: [
        '#4a90e2',
        '#67b26f',
        '#f4a261',
        '#2a9d8f'
      ],
      borderColor: 'white',
      borderWidth: 2
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: 'Activity Distribution',
        font: {
          size: 20
        },
        padding: {
          top: 20,
          bottom: 20
        }
      }
    },
    cutout: '60%'
  };

  return (
    <div className="statistics-page">
      <header>
        <h1>Activity Statistics</h1>
      </header>
      <main>
        <section className="chart-section">
          <div className="chart-container">
            <Doughnut data={activityData} options={chartOptions} />
          </div>
          <div className="stats-summary">
            <h2>Monthly Overview</h2>
            <p>Total Activities Completed: 120</p>
            <p>Most Active Category: Light Exercise</p>
            <p>Consistency Score: 85%</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StatisticsPage;