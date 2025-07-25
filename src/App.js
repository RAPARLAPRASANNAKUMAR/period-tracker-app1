import React, { useState, useEffect } from 'react';
import { Clock, MapPin, User, Calendar } from 'lucide-react';

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

  // Time periods with their durations
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

  // Timetable data for all sections
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

  // Subject full names
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

  // Get current period
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

  // Get current subject (handles multi-period subjects)
  const getCurrentSubject = () => {
    if (currentDay === 'Sunday' || !currentPeriod || currentPeriod === 'LUNCH') {
      return currentPeriod === 'LUNCH' ? 'Lunch Break' : null;
    }
    
    const periodIndex = timePeriods.findIndex(p => p.period === currentPeriod);
    if (periodIndex === -1) return null;
    
    const subject = currentSchedule[periodIndex];
    return subject || null;
  };

  // Check if current period is part of a multi-period session
  const isMultiPeriodSession = () => {
    if (!currentPeriod || currentPeriod === 'LUNCH') return false;
    
    const periodIndex = timePeriods.findIndex(p => p.period === currentPeriod);
    if (periodIndex === -1) return false;
    
    const currentSubject = currentSchedule[periodIndex];
    if (!currentSubject) return false;
    
    // Check if previous or next period has the same subject
    const prevSubject = periodIndex > 0 ? currentSchedule[periodIndex - 1] : null;
    const nextSubject = periodIndex < currentSchedule.length - 1 ? currentSchedule[periodIndex + 1] : null;
    
    return (prevSubject === currentSubject) || (nextSubject === currentSubject);
  };

  const currentPeriod = getCurrentPeriod();
  const currentDay = getCurrentDay();
  const currentSchedule = timetableData[selectedSection].schedule[currentDay] || [];
  const currentSubject = getCurrentSubject();
  const isMultiPeriod = isMultiPeriodSession();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Sri Vasavi Engineering College
              </h1>
              <p className="text-gray-600">3rd Semester - Computer Science & Engineering</p>
            </div>
            <div className="flex items-center gap-4 text-lg font-semibold text-blue-600">
              <Clock className="h-6 w-6" />
              <span>{currentTime.toLocaleTimeString()}</span>
              <Calendar className="h-6 w-6 ml-4" />
              <span>{currentDay}</span>
            </div>
          </div>
        </div>

        {/* Section Selector */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2 items-center">
              {['A', 'B', 'C', 'D', 'E'].map(section => (
                <button
                  key={section}
                  onClick={() => {
                    setSelectedSection(section);
                    setIsAutoRotating(false);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedSection === section
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Section {section}
                </button>
              ))}
              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className={`ml-4 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isAutoRotating
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-400 text-white hover:bg-gray-500'
                }`}
                title={isAutoRotating ? 'Auto-rotation ON (5s)' : 'Auto-rotation OFF'}
              >
                {isAutoRotating ? '⏸️ Auto' : '▶️ Auto'}
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{timetableData[selectedSection].coordinator}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{timetableData[selectedSection].room}</span>
              </div>
              {isAutoRotating && (
                <div className="flex items-center gap-2 text-green-600">
                  <div className="animate-pulse w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="font-medium">Auto-rotating</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Current Status */}
        {currentDay !== 'Sunday' && currentSubject && (
          <div className={`text-white rounded-lg shadow-lg p-6 mb-6 ${
            currentPeriod === 'LUNCH' 
              ? 'bg-gradient-to-r from-orange-500 to-orange-600'
              : 'bg-gradient-to-r from-green-500 to-green-600'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {currentPeriod === 'LUNCH' ? 'Lunch Break' : 'Current Class'}
                </h2>
                <p className="text-lg opacity-90">
                  {currentPeriod === 'LUNCH' ? 'Lunch Break' : 
                   subjectNames[currentSubject] || currentSubject}
                </p>
                {isMultiPeriod && currentPeriod !== 'LUNCH' && (
                  <p className="text-sm opacity-75 mt-1">
                    Multi-period session in progress
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">Period {currentPeriod}</p>
                <p className="opacity-90">
                  {timePeriods.find(p => p.period === currentPeriod)?.label}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Timetable */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h2 className="text-xl font-bold">Weekly Timetable - Section {selectedSection}</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Day</th>
                  {timePeriods.map((period, index) => (
                    <th key={index} className="px-3 py-3 text-center font-semibold text-gray-700 border-b min-w-[120px]">
                      <div className="text-xs mb-1">Period {period.period}</div>
                      <div className="text-xs text-gray-500">{period.label}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(timetableData[selectedSection].schedule).map(([day, schedule]) => (
                  <tr key={day} className={`hover:bg-gray-50 ${currentDay === day ? 'bg-blue-50' : ''}`}>
                    <td className={`px-4 py-4 font-semibold border-b ${currentDay === day ? 'text-blue-600' : 'text-gray-700'}`}>
                      {day}
                    </td>
                    {timePeriods.map((period, periodIndex) => {
                      const subject = schedule[periodIndex];
                      const isCurrentPeriod = currentDay === day && currentPeriod === period.period;
                      
                      // Check if this is part of a multi-period subject
                      const prevSubject = periodIndex > 0 ? schedule[periodIndex - 1] : null;
                      const nextSubject = periodIndex < schedule.length - 1 ? schedule[periodIndex + 1] : null;
                      const isPartOfMultiPeriod = (subject && subject === prevSubject) || (subject && subject === nextSubject);
                      
                      return (
                        <td key={periodIndex} className={`px-3 py-4 text-center border-b ${
                          isCurrentPeriod ? 'bg-green-100 border-green-300' : ''
                        }`}>
                          {subject && (
                            <div className={`p-2 rounded-md text-sm ${
                              isCurrentPeriod 
                                ? 'bg-green-200 text-green-800 font-semibold' 
                                : period.period === 'LUNCH'
                                ? 'bg-orange-100 text-orange-700'
                                : subject.includes('Lab')
                                ? 'bg-purple-100 text-purple-700'
                                : subject === 'Library' || subject === 'Sports'
                                ? 'bg-gray-100 text-gray-700'
                                : 'bg-blue-100 text-blue-700'
                            } ${isPartOfMultiPeriod ? 'border-2 border-dashed border-gray-400' : ''}`}>
                              <div className="font-medium">{subject}</div>
                              {subjectNames[subject] && subject !== subjectNames[subject] && (
                                <div className="text-xs mt-1 opacity-75">
                                  {subjectNames[subject]}
                                </div>
                              )}
                              {isPartOfMultiPeriod && (
                                <div className="text-xs mt-1 opacity-60">
                                  Multi-period
                                </div>
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
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-100 rounded"></div>
              <span>Theory Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-100 rounded"></div>
              <span>Lab Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-100 rounded"></div>
              <span>Lunch Break</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 rounded"></div>
              <span>Current Period</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border-2 border-dashed border-gray-400 rounded"></div>
              <span>Multi-period</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableApp;