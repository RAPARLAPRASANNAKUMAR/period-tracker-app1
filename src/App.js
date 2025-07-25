import React, { useState, useEffect } from 'react';
import './App.css'; // Import the stylesheet

const TimetableApp = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedSection, setSelectedSection] = useState('A');
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate sections every 5 seconds
  useEffect(() => {
    if (!isAutoRotating) return;

    const sections = ['A', 'B', 'C', 'D', 'E'];
    const rotationTimer = setInterval(() => {
      setSelectedSection(current => {
        const currentIndex = sections.indexOf(current);
        const nextIndex = (currentIndex + 1) % sections.length;
        return sections[nextIndex];
      });
    }, 5000);

    return () => clearInterval(rotationTimer);
  }, [isAutoRotating]);

  // Data (timePeriods, timetableData, subjectNames) remains the same
    const timePeriods = [
    { period: 1, start: '09:30', end: '10:30', label: '09:30 AM - 10:30 AM' },
    { period: 2, start: '10:30', end: '11:20', label: '10:30 AM - 11:20 AM' },
    { period: 3, start: '11:20', end: '12:10', label: '11:20 AM - 12:10 PM' },
    { period: 4, start: '12:10', end: '13:00', label: '12:10 PM - 01:00 PM' },
    { period: 'LUNCH', start: '13:00', end: '14:00', label: 'LUNCH BREAK' },
    { period: 5, start: '14:00', end: '14:50', label: '02:00 PM - 02:50 PM' },
    { period: 6, start: '14:50', end: '15:40', label: '02:50 PM - 03:40 PM' },
    { period: 7, start: '15:40', end: '16:30', label: '03:40 PM - 04:30 PM' }
  ];

  const timetableData = {
    A: {
      coordinator: 'Mrs. Y Sunitha',
      room: 'B-301',
      schedule: {
        Monday: ['OOPTJ', 'MEFA', 'DLCO', 'DMGT', 'LUNCH', 'ADSAA', 'PCS-I', ''],
        Tuesday: ['ADSAA', 'DMGT', 'DTI', 'DLCO', 'LUNCH', 'OOPTJ', 'MEFA', 'Sports'],
        Wednesday: ['MEFA', 'OOPTJ Lab', 'OOPTJ Lab', 'DMGT', 'LUNCH', 'DLCO', 'ADSAA', ''],
        Thursday: ['DLCO', 'OOPTJ', 'ADSAA', 'MEFA', 'LUNCH', 'ADSAA Lab', 'ADSAA Lab', ''],
        Friday: ['DMGT', 'DLCO', 'OOPTJ', 'Library', 'LUNCH', 'DTI', 'DTI', 'MEFA'],
        Saturday: ['PP Lab', 'PP Lab', 'PP Lab', 'ADSAA', 'LUNCH', 'OOPTJ', 'DMGT', '']
      }
    },
    B: {
      coordinator: 'M V V Gopala Krishna Murthy',
      room: 'B-302',
      schedule: {
        Monday: ['DMGT', 'ADSAA', 'OOPTJ', 'MEFA', 'LUNCH', 'OOPTJ Lab', 'OOPTJ Lab', ''],
        Tuesday: ['OOPTJ', 'PP Lab', 'PP Lab', 'PP Lab', 'LUNCH', 'DMGT', 'DLCO', 'ADSAA'],
        Wednesday: ['DLCO', 'PCS-I', 'ADSAA', 'DMGT', 'LUNCH', 'MEFA', 'PP Lab', 'PP Lab'],
        Thursday: ['ADSAA', 'MEFA', 'DLCO', 'Library', 'LUNCH', 'OOPTJ', 'DLCO', 'DMGT'],
        Friday: ['MEFA', 'ADSAA Lab', 'ADSAA Lab', 'DMGT', 'LUNCH', 'OOPTJ', 'OOPTJ', ''],
        Saturday: ['DTI', 'DLCO', 'MEFA', 'ADSAA', 'LUNCH', 'DTI', 'DTI', 'Sports']
      }
    },
    C: {
      coordinator: 'Mr. N.V.Murali Krishna Raja',
      room: 'B-303',
      schedule: {
        Monday: ['DLCO', 'PCS-I', 'ADSAA', 'ADSAA', 'LUNCH', 'MEFA', 'OOPTJ', 'DLCO'],
        Tuesday: ['MEFA', 'DLCO', 'ADSAA', 'DMGT', 'LUNCH', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab'],
        Wednesday: ['PP Lab', 'PP Lab', 'PP Lab', 'DMGT', 'LUNCH', 'MEFA', 'DLCO', 'OOPTJ', 'DMGT', 'Library'],
        Thursday: ['DMGT', 'MEFA', 'OOPTJ', 'ADSAA', 'LUNCH', 'PP Lab', 'PP Lab', 'PP Lab'],
        Friday: ['ADSAA', 'ADSAA', 'OOPTJ', 'DMGT', 'LUNCH', 'MEFA', 'DLCO', 'DTI'],
        Saturday: ['OOPTJ', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab', 'LUNCH', 'DTI', 'Sports', '']
      }
    },
    D: {
      coordinator: 'Mr. B Bhasker Murali Krishna',
      room: 'B-304',
      schedule: {
        Monday: ['DMGT', 'ADSAA', 'MEFA', 'DTI', 'LUNCH', 'PP Lab', 'PP Lab', 'PP Lab'],
        Tuesday: ['DLCO', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab', 'LUNCH', 'OOPTJ', 'DMGT', 'MEFA'],
        Wednesday: ['OOPTJ', 'DMGT', 'ADSAA', 'MEFA', 'LUNCH', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab'],
        Thursday: ['ADSAA', 'OOPTJ', 'DMGT', 'DLCO', 'LUNCH', 'DLCO', 'DTI', ''],
        Friday: ['PP Lab', 'PP Lab', 'PP Lab', 'OOPTJ', 'LUNCH', 'MEFA', 'DLCO', 'DMGT', 'ADSAA', 'Library'],
        Saturday: ['MEFA', 'PCS-I', 'DLCO', 'ADSAA', 'LUNCH', 'OOPTJ', 'Sports', '']
      }
    },
    E: {
      coordinator: 'Mrs. A. Naga Jyothi',
      room: 'B-203',
      schedule: {
        Monday: ['OOPTJ', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab', 'LUNCH', 'DMGT', 'ADSAA', 'MEFA'],
        Tuesday: ['MEFA', 'DMGT', 'DLCO', 'ADSAA', 'LUNCH', 'OOPTJ', 'DTI', ''],
        Wednesday: ['DLCO', 'MEFA', 'DLCO', 'DMGT', 'LUNCH', 'PP Lab', 'PP Lab', 'PP Lab', 'OOPTJ', 'Library'],
        Thursday: ['DLCO', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab', 'LUNCH', 'PCS-I', 'OOPTJ', ''],
        Friday: ['DMGT', 'DTI', 'OOPTJ', 'ADSAA', 'LUNCH', 'MEFA', 'ADSAA', 'Sports'],
        Saturday: ['ADSAA', 'PP Lab', 'PP Lab', 'PP Lab', 'LUNCH', 'DMGT', 'MEFA', 'DLCO']
      }
    }
  };

  const subjectNames = {
    'OOPTJ': 'Object Oriented Programming Through Java',
    'MEFA': 'Managerial Economics and Financial Analysis',
    'DLCO': 'Digital Logic & Computer Organization',
    'DMGT': 'Discrete Mathematics & Graph Theory',
    'ADSAA': 'Advanced Data Structures & Algorithm Analysis',
    'DTI': 'Design Thinking & Innovation',
    'PCS-I': 'Professional Communication Skills - I',
    'PP Lab': 'Python Programming Lab',
    'OOPTJ Lab': 'Object Oriented Programming Through Java Lab',
    'ADSAA Lab': 'Advanced Data Structures and Algorithm Analysis Lab',
    'Library': 'Library Period',
    'Sports': 'Sports Period',
    'LUNCH': 'Lunch Break'
  };

  const getCurrentPeriod = () => {
    const now = currentTime;
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    for (let i = 0; i < timePeriods.length; i++) {
      const period = timePeriods[i];
      const [startHour, startMin] = period.start.split(':').map(Number);
      const [endHour, endMin] = period.end.split(':').map(Number);
      
      const startTimeInMinutes = startHour * 60 + startMin;
      const endTimeInMinutes = endHour * 60 + endMin;

      if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < endTimeInMinutes) {
        return period.period;
      }
    }
    return null;
  };

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[currentTime.getDay()];
  };

  const getCurrentSubject = () => {
    if (currentDay === 'Sunday' || !currentPeriod || currentPeriod === 'LUNCH') {
      return currentPeriod === 'LUNCH' ? 'Lunch Break' : null;
    }
    
    const periodIndex = timePeriods.findIndex(p => p.period === currentPeriod);
    if (periodIndex === -1) return null;
    
    const subject = currentSchedule[periodIndex];
    return subject || null;
  };

  const isMultiPeriodSession = () => {
    if (!currentPeriod || currentPeriod === 'LUNCH') return false;
    
    const periodIndex = timePeriods.findIndex(p => p.period === currentPeriod);
    if (periodIndex === -1) return false;
    
    const currentSubject = currentSchedule[periodIndex];
    if (!currentSubject) return false;
    
    const prevSubject = periodIndex > 0 ? currentSchedule[periodIndex - 1] : null;
    const nextSubject = periodIndex < currentSchedule.length - 1 ? currentSchedule[periodIndex + 1] : null;
    
    return (prevSubject === currentSubject) || (nextSubject === currentSubject);
  };

  const currentPeriod = getCurrentPeriod();
  const currentDay = getCurrentDay();
  const currentSchedule = timetableData[selectedSection].schedule[currentDay] || [];
  const currentSubject = getCurrentSubject();
  const isMultiPeriod = isMultiPeriodSession();

  const getSubjectCardClass = (subject, isCurrentPeriod, isPartOfMultiPeriod) => {
    let classes = ['subject-card'];
    if (isCurrentPeriod) {
        classes.push('current');
    } else if (subject === 'LUNCH') {
        classes.push('lunch');
    } else if (subject.includes('Lab')) {
        classes.push('lab');
    } else if (subject === 'Library' || subject === 'Sports') {
        classes.push('other');
    } else {
        classes.push('theory');
    }

    if (isPartOfMultiPeriod) {
        classes.push('multi-period');
    }
    return classes.join(' ');
  };

  return (
    <div className="app-container">
        {/* Header */}
        <div className="card">
            <div className="header">
                <div>
                    <h1 className="header-title">Sri Vasavi Engineering College</h1>
                    <p className="header-subtitle">3rd Semester - Computer Science & Engineering</p>
                </div>
                <div className="time-display">
                    <span>🕐 {currentTime.toLocaleTimeString()}</span>
                    <span>📅 {currentDay}</span>
                </div>
            </div>
        </div>

        {/* Section Selector */}
        <div className="card">
            <div className="section-selector">
                <div className="section-buttons">
                    {['A', 'B', 'C', 'D', 'E'].map(section => (
                        <button
                            key={section}
                            onClick={() => {
                                setSelectedSection(section);
                                setIsAutoRotating(false);
                            }}
                            className={`section-btn ${selectedSection === section ? 'active' : ''}`}
                        >
                            Section {section}
                        </button>
                    ))}
                    <button
                        onClick={() => setIsAutoRotating(!isAutoRotating)}
                        className={`auto-btn ${isAutoRotating ? 'active' : ''}`}
                        title={isAutoRotating ? 'Auto-rotation ON (5s)' : 'Auto-rotation OFF'}
                    >
                        {isAutoRotating ? '⏸️ Auto' : '▶️ Auto'}
                    </button>
                </div>
                <div className="coordinator-info">
                    <div className="info-item">
                        <span>👤</span>
                        <span>{timetableData[selectedSection].coordinator}</span>
                    </div>
                    <div className="info-item">
                        <span>📍</span>
                        <span>{timetableData[selectedSection].room}</span>
                    </div>
                    {isAutoRotating && (
                        <div className="info-item auto-indicator">
                            <div className="pulse-dot"></div>
                            <span>Auto-rotating</span>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Current Status */}
        {currentDay !== 'Sunday' && currentSubject && (
            <div className={`status-card ${currentPeriod === 'LUNCH' ? 'lunch' : 'regular'}`}>
                <div className="status-content">
                    <div>
                        <h2 className="status-title">
                            {currentPeriod === 'LUNCH' ? 'Lunch Break' : 'Current Class'}
                        </h2>
                        <p className="status-subject">
                            {currentPeriod === 'LUNCH' ? 'Enjoy your meal!' : subjectNames[currentSubject] || currentSubject}
                        </p>
                        {isMultiPeriod && currentPeriod !== 'LUNCH' && (
                            <p className="status-multi-period">Multi-period session in progress</p>
                        )}
                    </div>
                    <div className="status-period-info">
                        <p>Period {currentPeriod}</p>
                        <p>{timePeriods.find(p => p.period === currentPeriod)?.label}</p>
                    </div>
                </div>
            </div>
        )}

        {/* Timetable */}
        <div className="timetable-wrapper">
            <div className="timetable-header">
                <h2>Weekly Timetable - Section {selectedSection}</h2>
            </div>
            <div className="table-container">
                <table className="timetable">
                    <thead>
                        <tr>
                            <th>Day</th>
                            {timePeriods.map((period) => (
                                <th key={period.period}>
                                    <div className="period-title">Period {period.period}</div>
                                    <div className="period-time">{period.label}</div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(timetableData[selectedSection].schedule).map(([day, schedule]) => (
                            <tr key={day} className={currentDay === day ? 'current-day' : ''}>
                                <td>{day}</td>
                                {timePeriods.map((period, periodIndex) => {
                                    const subject = schedule[periodIndex];
                                    const isCurrentPeriod = currentDay === day && currentPeriod === period.period;
                                    const prevSubject = periodIndex > 0 ? schedule[periodIndex - 1] : null;
                                    const nextSubject = periodIndex < schedule.length - 1 ? schedule[periodIndex + 1] : null;
                                    const isPartOfMultiPeriod = (subject && subject === prevSubject) || (subject && subject === nextSubject);
                                    return (
                                        <td key={periodIndex} className={isCurrentPeriod ? 'current-period-cell' : ''}>
                                            {subject && (
                                                <div className={getSubjectCardClass(subject, isCurrentPeriod, isPartOfMultiPeriod)}>
                                                    <div className="subject-name">{subject}</div>
                                                    {subjectNames[subject] && subject !== subjectNames[subject] && (
                                                        <div className="subject-full-name">{subjectNames[subject]}</div>
                                                    )}
                                                </div>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* Legend */}
        <div className="card">
            <h3 className="legend-title">Legend</h3>
            <div className="legend-grid">
                <div className="legend-item"><div className="legend-color theory"></div><span>Theory</span></div>
                <div className="legend-item"><div className="legend-color lab"></div><span>Lab</span></div>
                <div className="legend-item"><div className="legend-color lunch"></div><span>Lunch</span></div>
                <div className="legend-item"><div className="legend-color current"></div><span>Current</span></div>
                <div className="legend-item"><div className="legend-color multi-period-legend"></div><span>Multi-period</span></div>
            </div>
        </div>
    </div>
  );
};

export default TimetableApp;