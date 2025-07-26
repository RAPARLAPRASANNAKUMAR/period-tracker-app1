import React, { useState, useEffect } from 'react';

const TimetableApp = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedSemester, setSelectedSemester] = useState('VII');
  const [selectedSection, setSelectedSection] = useState('A');

  const logoUrl = 'https://th.bing.com/th/id/R.693b32b8e70a313495c62cbeecd2a4a1?rik=GOTO7S4IMa%2bnZg&riu=http%3a%2f%2fwww.srivasaviengg.ac.in%2fstuver%2fcss%2fvasavi_logo.png&ehk=H8D20co18A48e7o4L65NWtA35cqSeDRK1tRbiwXb5Mg%3d&risl=&pid=ImgRaw&r=0';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const rotationTimer = setInterval(() => {
      const semesters = ['III', 'V', 'VII'];
      let sectionsForSem = [];
      if (selectedSemester === 'III') sectionsForSem = ['A', 'B', 'C', 'D', 'E', 'CST'];
      else if (selectedSemester === 'V') sectionsForSem = ['A', 'B', 'C', 'D'];
      else if (selectedSemester === 'VII') sectionsForSem = ['A', 'B', 'C', 'D', 'CST'];

      const currentSectionIndex = sectionsForSem.indexOf(selectedSection);

      if (currentSectionIndex === sectionsForSem.length - 1) {
        const currentSemIndex = semesters.indexOf(selectedSemester);
        const nextSemIndex = (currentSemIndex + 1) % semesters.length;
        const nextSemester = semesters[nextSemIndex];
        setSelectedSemester(nextSemester);
        setSelectedSection('A');
      } else {
        setSelectedSection(sectionsForSem[currentSectionIndex + 1]);
      }
    }, 5000);

    return () => clearInterval(rotationTimer);
  }, [selectedSection, selectedSemester]);

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

  // --- Data Structures ---
  const thirdSemData = {
    A: { coordinator: 'Mrs. Y Sunitha', room: 'B-301', schedule: { Monday: ['OOPTJ', 'MEFA', 'DLCO', 'DMGT', 'LUNCH', 'ADSAA', 'PCS-I', 'PCS-I'], Tuesday: ['ADSAA', 'DMGT', 'DTI', 'DLCO', 'LUNCH', 'OOPTJ', 'MEFA', 'Sports'], Wednesday: ['MEFA', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab', 'LUNCH', 'DMGT', 'DLCO', 'ADSAA'], Thursday: ['DLCO', 'OOPTJ', 'ADSAA', 'MEFA', 'LUNCH', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab'], Friday: ['DMGT', 'DLCO', 'OOPTJ', 'Library', 'LUNCH', 'DTI', 'DTI', 'MEFA'], Saturday: ['PP Lab', 'PP Lab', 'PP Lab', 'PP Lab', 'LUNCH', 'ADSAA', 'OOPTJ', 'DMGT'] } },
    B: { coordinator: 'MV V Gopala Krishna Murthy', room: 'B-302', schedule: { Monday: ['DMGT', 'ADSAA', 'OOPTJ', 'MEFA', 'LUNCH', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab'], Tuesday: ['OOPTJ', 'PP Lab', 'PP Lab', 'PP Lab', 'LUNCH', 'DMGT', 'DLCO', 'ADSAA'], Wednesday: ['DLCO', 'PCS-I', 'ADSAA', 'DMGT', 'LUNCH', 'MEFA', 'PP Lab', 'PP Lab'], Thursday: ['ADSAA', 'MEFA', 'DLCO', 'Library', 'LUNCH', 'OOPTJ', 'DLCO', 'DMGT'], Friday: ['MEFA', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab', 'LUNCH', 'DMGT', 'OOPTJ', 'OOPTJ'], Saturday: ['DTI', 'DLCO', 'MEFA', 'ADSAA', 'LUNCH', 'DTI', 'DTI', 'Sports'] } },
    C: { coordinator: 'Mr. N.V.Murali Krishna Raja', room: 'B-303', schedule: { Monday: ['DLCO', 'PCS-I', 'ADSAA', 'ADSAA', 'LUNCH', 'MEFA', 'OOPTJ', 'DLCO'], Tuesday: ['MEFA', 'DLCO', 'ADSAA', 'DMGT', 'LUNCH', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab'], Wednesday: ['PP Lab', 'PP Lab', 'PP Lab', 'DMGT', 'LUNCH', 'MEFA', 'DLCO', 'OOPTJ'], Thursday: ['DMGT', 'MEFA', 'OOPTJ', 'ADSAA', 'LUNCH', 'PP Lab', 'PP Lab', 'PP Lab'], Friday: ['ADSAA', 'ADSAA', 'OOPTJ', 'DMGT', 'LUNCH', 'MEFA', 'DLCO', 'DTI'], Saturday: ['OOPTJ', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab', 'LUNCH', 'DTI', 'DTI', 'Sports'] } },
    D: { coordinator: 'Mr. B Bhasker Murali Krishna', room: 'B-304', schedule: { Monday: ['DMGT', 'ADSAA', 'MEFA', 'DTI', 'LUNCH', 'PP Lab', 'PP Lab', 'PP Lab'], Tuesday: ['DLCO', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab', 'LUNCH', 'OOPTJ', 'DMGT', 'MEFA'], Wednesday: ['OOPTJ', 'DMGT', 'ADSAA', 'MEFA', 'LUNCH', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab'], Thursday: ['ADSAA', 'OOPTJ', 'DMGT', 'DLCO', 'LUNCH', 'DLCO', 'DTI', 'DTI'], Friday: ['PP Lab', 'PP Lab', 'PP Lab', 'OOPTJ', 'LUNCH', 'MEFA', 'DLCO', 'DMGT'], Saturday: ['MEFA', 'PCS-I', 'PCS-I', 'DLCO', 'LUNCH', 'ADSAA', 'OOPTJ', 'Sports'] } },
    E: { coordinator: 'Mrs. A. Naga Jyothi', room: 'B-203', schedule: { Monday: ['OOPTJ', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab', 'LUNCH', 'DMGT', 'ADSAA', 'MEFA'], Tuesday: ['MEFA', 'DMGT', 'DLCO', 'ADSAA', 'LUNCH', 'OOPTJ', 'DTI', 'DTI'], Wednesday: ['DLCO', 'MEFA', 'DLCO', 'DMGT', 'LUNCH', 'PP Lab', 'PP Lab', 'PP Lab'], Thursday: ['DLCO', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab', 'LUNCH', 'PCS-I', 'PCS-I', 'OOPTJ'], Friday: ['DMGT', 'DTI', 'OOPTJ', 'ADSAA', 'LUNCH', 'MEFA', 'ADSAA', 'Sports'], Saturday: ['ADSAA', 'PP Lab', 'PP Lab', 'PP Lab', 'LUNCH', 'DMGT', 'MEFA', 'DLCO'] } },
    CST: { coordinator: 'Mr.L Atri Datta Ravi Tez', room: 'G-202', schedule: { Monday: ['ADSAA', 'DLCO', '', 'PCS-I', 'LUNCH', 'DLCO', 'OOPTJ', 'DMGT'], Tuesday: ['OOPTJ', 'ADSAA', 'MEFA', 'DMGT', 'LUNCH', 'ADSAA', 'DLCO', 'Sports'], Wednesday: ['PP Lab', 'ADSAA', 'OOPTJ', 'DMGT', 'LUNCH', 'ADSAA', 'DTI', 'DTI'], Thursday: ['DMGT', 'MEFA', 'OOPTJ', 'MEFA', 'LUNCH', 'PP Lab', 'PP Lab', 'PP Lab'], Friday: ['OOPTJ', 'DLCO', 'DMGT', 'MEFA', 'LUNCH', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab'], Saturday: ['MEFA', 'DLCO', 'DTI', 'Library', 'LUNCH', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab'] } }
  };
  const fifthSemData = { A: { coordinator: 'Ms.Ch Naga Padma Latha', room: 'B-203', schedule: { Monday: ['EE', 'EE', 'APTITUDE', 'APTITUDE', 'LUNCH', 'DM Lab', 'DM Lab', 'DM Lab'], Tuesday: ['AI', '', 'MCCP-I', '', 'LUNCH', 'CN Lab', 'CN Lab', 'CN Lab'], Wednesday: ['CN', 'AI', 'FLAT', 'Library', 'LUNCH', 'AI', 'DM', 'CN'], Thursday: ['CN', 'DM', 'FLAT', 'FLAT', 'LUNCH', 'FSD-2', 'AI', 'Sports'], Friday: ['FLAT', 'AI', 'CN', 'DM', 'LUNCH', 'MCCP-I', 'MCCP-I', 'MCCP-I'], Saturday: ['DM', 'DM', 'CN', 'FLAT', 'LUNCH', 'FSD-2', 'FSD-2', 'FSD-2'] } }, B: { coordinator: 'Mr. Syed Akheel Hassan Gori', room: 'B-204', schedule: { Monday: ['AI', 'CN', 'DM', 'AI', 'LUNCH', 'EE', 'APTITUDE', 'APTITUDE'], Tuesday: ['FLAT', 'MCCP-I', 'MCCP-I', 'MCCP-I', 'LUNCH', 'APTITUDE', 'AI', 'CN'], Wednesday: ['DM', 'DM Lab', 'DM Lab', 'DM Lab', 'LUNCH', 'DM Lab', 'FLAT', 'Library'], Thursday: ['AI', 'FSD-2', 'CN', 'CN', 'LUNCH', 'DM', 'DM', 'FLAT'], Friday: ['DM', 'CN Lab', 'CN Lab', 'CN Lab', 'LUNCH', 'MCCP-I', 'MCCP-I', 'MCCP-I'], Saturday: ['CN', 'FSD-2', 'FSD-2', 'FSD-2', 'LUNCH', 'AI', 'FLAT', 'Sports'] } }, C: { coordinator: 'Mr. T. Nava Krishna', room: 'G-301', schedule: { Monday: ['DM', 'DM Lab', 'DM Lab', 'DM Lab', 'LUNCH', 'MCCP-I', 'MCCP-I', 'MCCP-I'], Tuesday: ['CN', 'CN Lab', 'CN Lab', 'CN Lab', 'LUNCH', 'CN Lab', 'FLAT', 'APTITUDE'], Wednesday: ['FLAT', 'EE', 'CN', 'CN', 'LUNCH', 'DM', 'FLAT', 'AI'], Thursday: ['FLAT', 'FSD-2', 'FSD-2', 'FSD-2', 'LUNCH', 'AI', 'CN', 'DM'], Friday: ['AI', 'MCCP-I', 'MCCP-I', 'MCCP-I', 'LUNCH', 'DM', 'FLAT', 'Library'], Saturday: ['DM', 'AI', 'AI', 'FSD-2', 'LUNCH', 'FLAT', 'CN', 'Sports'] } }, D: { coordinator: 'Mr. G. Deepak Pavan Kumar', room: 'G-302', schedule: { Monday: ['FLAT', 'CN', 'CN', 'Library', 'LUNCH', 'MCCP-I', 'MCCP-I', 'MCCP-I'], Tuesday: ['DM', 'AI', 'APTITUDE', 'APTITUDE', 'LUNCH', 'FSD-2', 'FSD-2', 'FSD-2'], Wednesday: ['DM', 'AI', 'Lab', 'FLAT', 'LUNCH', 'DM', 'EE', 'FLAT'], Thursday: ['CN', 'CN Lab', 'CN Lab', 'CN Lab', 'LUNCH', 'DM', 'FLAT', 'AI'], Friday: ['CN', 'MCCP-I', 'MCCP-I', 'MCCP-I', 'LUNCH', 'AI', 'FSD-2', 'Sports'], Saturday: ['FLAT', 'FLAT', 'CN', 'DM', 'LUNCH', 'DM Lab', 'DM Lab', 'DM Lab'] } } };
  
  // --- CORRECTED 7th SEM DATA BASED ON PDF ---
  const seventhSemData = {
    A: { coordinator: 'Mrs. M.N.V. Surekha', room: 'G401', schedule: { Monday: ['MS', 'FST', 'FST', 'FST', 'LUNCH', 'DL', 'SPM', 'MAIN PROJECT'], Tuesday: ['DEVOPS', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'DEVOPS', 'DL', 'SPM'], Wednesday: ['CC', 'DEVOPS', 'DL', 'MS', 'LUNCH', 'FST', 'FST', 'FST'], Thursday: ['SPM', 'SPM', 'DL', 'CC', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'], Friday: ['DL', 'MS', 'MS', 'CC', 'LUNCH', 'DEVOPS', 'DEVOPS', 'CC'], Saturday: ['SPM', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'MAIN PROJECT', 'CC', 'MS'] } },
    B: { coordinator: 'Mr. P. Rama Mohan Rao', room: 'G-101', schedule: { Monday: ['DEVOPS', 'CC', 'DL', 'MAIN PROJECT', 'LUNCH', 'CC', 'MS', 'MS'], Tuesday: ['CC', 'DL', 'MS', 'SPM', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'], Wednesday: ['MS', 'FST', 'FST', 'FST', 'LUNCH', 'SPM', 'DEVOPS', 'DL'], Thursday: ['DL', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'MS', 'CC', 'DEVOPS'], Friday: ['SPM', 'DEVOPS', 'DL', 'SPM', 'LUNCH', 'FST', 'FST', 'FST'], Saturday: ['CC', 'DEVOPS', 'SPM', 'MAINPROJECT', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'] } },
    C: { coordinator: 'Mr. K. Praveen Kumar', room: 'G-402', schedule: { Monday: ['SPM', 'FST', 'FST', 'FST', 'LUNCH', 'DEVOPS', 'MS', 'DL'], Tuesday: ['CC', 'SPM', 'DEVOPS', 'DL', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'], Wednesday: ['DL', 'MS', 'CC', 'DEVOPS', 'LUNCH', 'FST', 'FST', 'FST'], Thursday: ['MS', 'CC', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'DL', 'SPM', 'SPM'], Friday: ['SPM', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'MS', 'DL', 'CC'], Saturday: ['MS', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'CC', 'DEVOPS', 'DEVOPS'] } },
    D: { coordinator: 'Mr. E. Hanuman Sai Gupta', room: 'B-403', schedule: { Monday: ['DL', 'DEVOPS', 'DEVOPS', 'MS', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'], Tuesday: ['MS', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'CC', 'DL', 'SPM'], Wednesday: ['CC', 'FST', 'FST', 'FST', 'LUNCH', 'SPM', 'SPM', 'MAIN PROJECT'], Thursday: ['SPM', 'MS', 'DL', 'MAIN PROJECT', 'LUNCH', 'DEVOPS', 'CC', 'MS'], Friday: ['DL', 'MS', 'DEVOPS', 'CC', 'LUNCH', 'FST', 'FST', 'FST'], Saturday: ['DEVOPS', 'SPM', 'DL', 'CC', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'] } },
    CST: { coordinator: 'Mr. Anil Kumar Reddy Tetali', room: 'B-401', schedule: { Monday: ['CC', 'DEVOPS', 'SPM', 'DL', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'], Tuesday: ['MS', 'FST', 'FST', 'FST', 'LUNCH', 'SPM', 'DEVOPS', 'MAIN PROJECT'], Wednesday: ['SPM', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'MS', 'CC', 'CC'], Thursday: ['DEVOPS', 'MS', 'SPM', 'CC', 'LUNCH', 'FST', 'FST', 'FST'], Friday: ['MS', 'CC', 'DEVOPS', 'DL', 'LUNCH', 'DL', 'SPM', 'MAI PROJECT'], Saturday: ['DL', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'MS', 'DL', 'DEVOPS'] } }
  };

  const thirdSemSubjects = { 'OOPTJ': 'Object Oriented Programming Through Java', 'MEFA': 'Managerial Economics and Financial Analysis', 'DLCO': 'Digital Logic & Computer Organization', 'DMGT': 'Discrete Mathematics & Graph Theory', 'ADSAA': 'Advanced Data Structures & Algorithm Analysis', 'DTI': 'Design Thinking & Innovation', 'PCS-I': 'Professional Communication Skills - I', 'PP Lab': 'Python Programming Lab', 'OOPTJ Lab': 'Object Oriented Programming Through Java Lab', 'ADSAA Lab': 'Advanced Data Structures and Algorithm Analysis Lab', 'Library': 'Library Period', 'Sports': 'Sports Period', 'LUNCH': 'Lunch Break' };
  const fifthSemSubjects = { 'DM': 'Data Warehousing and Data Mining', 'CN': 'Computer Networks', 'FLAT': 'Formal Languages and Automata Theory', 'AI': 'Artificial Intelligence', 'DM Lab': 'Data Mining Lab', 'CN Lab': 'Computer Networks Lab', 'FSD-2': 'Full Stack development-2', 'MCCP-I': 'Master Coding and Competitive Programming - Part-1', 'EE': 'English for Employment', 'APTITUDE': 'Aptitude', 'Library': 'Library Period', 'Sports': 'Sports Period', 'LUNCH': 'Lunch Break', 'Lab': 'Lab' };
  
  const seventhSemSubjects = {
    'DL': 'Deep Learning',
    'CC': 'Cloud Computing',
    'SPM': 'Software Project Management',
    'MS': 'Management Science',
    'DEVOPS': 'DevOps',
    'FST': 'Full Stack Technologies Lab',
    'MAIN PROJECT': 'Main Project',
    'PROJECT': 'Main Project',
    'LUNCH': 'Lunch Break'
  };

  const thirdSemFaculty = {
    'DMGT': { A: 'Dr. V.S.Naresh', B: 'Mr. N.V.Murali Krishna Raja', C: 'Mr. N.V.Murali Krishna Raja', D: 'Dr. V.S.Naresh', E: 'Mr. N.V.Murali Krishna Raja', CST: 'Dr. V.S.Naresh'},
    'MEFA': { A: 'Mrs. V. Sandhya', B: 'Mr. D. Satyanarayana', C: 'Mrs. V. Sandhya', D: 'Dr. K. Rambabu', E: 'Dr. K. Rambabu', CST: 'Dr. K. Pulla Rao'},
    'DLCO': { A: 'Mrs. Y Sunitha', B: 'Mrs. Y Sunitha', C: 'Mrs. Y Sunitha', D: 'Mrs.M Vineela', E: 'Mrs.M Vineela', CST: 'Ms. Vineela Mallina'},
    'ADSAA': { A: 'Mrs. B.Sri Ramya', B: 'Mrs. B.Sri Ramya', C: 'Mr. K. Lakshmi Narayana', D: 'Mr. K. Lakshmi Narayana', E: 'Mrs. A. Naga Jyothi', CST: 'Mrs. A. Naga Jyothi'},
    'OOPTJ': { A: 'Dr. K. Shirin Bhanu', B: 'Dr. K. Shirin Bhanu', C: 'Mr. G. Nataraj', D: 'Mr. G. Nataraj', E: 'Mr.L Atri Datta Ravi Tez', CST: 'Mr.L Atri Datta Ravi Tez'},
    'ADSAA Lab': { A: 'Mrs. B.Sri Ramya', B: 'Mrs. B.Sri Ramya', C: 'Mr. K. Lakshmi Narayana', D: 'Mr. K. Lakshmi Narayana', E: 'Mrs. A. Naga Jyothi', CST: 'Mrs. A. Naga Jyothi / Mr. P. NagaBhusanam'},
    'OOPTJ Lab': { A: 'Dr. K. Shirin Bhanu', B: 'Dr. K. Shirin Bhanu', C: 'Mr. G. Nataraj', D: 'Mr. G. Nataraj', E: 'Mr.L Atri Datta Ravi Tez', CST: 'Mr.L. Atri Datta Ravi Tez / Ms. Y Divya Vani'},
    'PP Lab': { A: 'Mr. K. Lakshmi Narayana', B: 'Mr. E Hanuman Sai Guptha', C: 'Mr. E Hanuman Sai Guptha', D: 'Mr.Md. Sadik', E: 'Mr.Md. Sadik', CST: 'Mr.Sd Sadik / Mr. K Sai Ektha Kumar Naidu'},
    'DTI': { A: 'MV V Gopala Krishna Murthy', B: 'MV V Gopala Krishna Murthy', C: 'Mr. B Bhasker Murali Krishna', D: 'Mr. B Bhasker Murali Krishna', E: 'Mr. P. Rama Mohan Rao', CST: 'Mr. P. Rama Mohan Rao'},
    'PCS-I': { A: 'Mrs. Ch Tanuja / Mr. G Srinivasa Rao', B: 'Mr. M Venkata Ramana/Ms. A Kiranmayee', C: 'Mr. M Venkata Ramana/Dr. B Ananda Rao', D: 'Mrs. Ch Tanuja / Dr. K Venkata Rao', E: 'Ms. A Kiranmayee / Dr. B Ananda Rao', CST: 'Mr. G Srinivasa Rao / Dr. K Venkata Rao'}
  };
  const fifthSemFaculty = { 'DM': { A: 'Mrs. N. Hiranmayee', B: 'Mrs.D.SLManikanteswari', C: 'Mrs. N. Hiranmayee', D: 'Mrs.D.SLManikanteswari' }, 'CN': { A: 'MV V Gopala Krishna Murthy', B: 'Mr. Syed Akheel Hassan Gori', C: 'Mr. S. Kumar Reddy Mallidi', D: 'Mr. S. Kumar Reddy Mallidi' }, 'FLAT': { A: 'Ms.Ch Naga Padma Latha', B: 'Ms.Ch Naga Padma Latha', C: 'Mr. G.Sriram Ganesh', D: 'Mr. G.Sriram Ganesh' }, 'AI': { A: 'Mrs. Y DivyaVani', B: 'Dr. Adidela Daveedu Raju', C: 'Dr. Adidela Daveedu Raju', D: 'Dr. Adidela Daveedu Raju' }, 'DM Lab': { A: 'Mrs. N. Hiranmayee', B: 'Mrs. D. Suvarna Lakshmi Manikanteswari', C: 'Mrs. N. Hiranmayee', D: 'Mrs. D. Suvarna Lakshmi' }, 'CN Lab': { A: 'MV V Gopala Krishna Murthy', B: 'Mr. Syed Akheel Hassan Gori', C: 'Mr. S. Kumar Reddy Mallidi', D: 'Mr. S. Kumar Reddy Mallidi' }, 'FSD-2': { A: 'Mr. T. Nava Krishna', B: 'Mr. G. Deepak Pavan Kumar', C: 'Mr. T. Nava Krishna', D: 'Mr. G. Deepak Pavan Kumar' }, 'MCCP-I': { A: 'Dr. V Venkateswara Rao', B: 'Dr. V Venkateswara Rao', C: 'Dr. V Venkateswara Rao', D: 'Dr. V Venkateswara Rao' }, 'EE': { A: 'Ms. A Kiranmayee', B: 'Mr. M Venkata Ramana', C: 'Mr. G Srinivasa Rao', D: 'Dr. B Ananda Rao' }, 'APTITUDE': { A: 'Mr. J NV Somayajulu', B: 'Mr. J NV Somayajulu & Mr. THS Srinivas', C: 'Mr. THS Srinivas', D: 'Mr. THS Srinivas' } };

  const seventhSemFaculty = {
    'DL': { A: 'Mr.P. Naga Bhushanam', B: 'Mr.P. Naga Bhushanam', C: 'Mr.P. Naga Bhushanam', D: 'Mr. E. Hanuman Sai Gupta', CST: 'Mr. E. Hanuman Sai Gupta' },
    'CC': { A: 'Mr. P. Rama Mohan Rao', B: 'Mr. P. Rama Mohan Rao', C: 'Mr. K. Praveen Kumar', D: 'Mr. K. Praveen Kumar', CST: 'Mr. K. Praveen Kumar' },
    'SPM': { A: 'Mr. B Bhasker Murali Krishna', B: 'Mr. B Bhasker Murali Krishna', C: 'Mr. Sd. Arief', D: 'Mr. Sd. Arief', CST: 'Mr. Sd. Arief' },
    'MS': { A: 'Ms. P. Bala Jyothi', B: 'Ms. P. Bala Jyothi', C: 'Mr. K. Pavan Kumar', D: 'Mr. P. Bharath Kumar', CST: 'Mrs. P. Devi' },
    'DEVOPS': { A: 'Mrs. M.N.V. Surekha', B: 'Mrs. M.N.V. Surekha', C: 'Mrs. M.N.V. Surekha', D: 'Ms.Ch Naga Padma Latha', CST: 'Mr.Md. Sadik' },
    'FST': { A: 'Mr. Anil Kumar Reddy Tetali / Mr. K Phanindra Brahmaji', B: 'Mr. Anil Kumar Reddy Tetali/ Mr. K Phanindra Brahmaji', C: 'Mr. Anil Kumar Reddy Tetali / Mr. K Phanindra Brahmaji', D: 'Mr. Anil Kumar Reddy Tetali / Mr. K Phanindra Brahmaji', CST: 'Mr. Anil Kumar Reddy Tetali / Mr. K Phanindra Brahmaji' },
    'MAIN PROJECT': { A: 'Mrs. M.N.V. Surekha', B: 'Mr. Anil Kumar Reddy Tetali', C: 'Mr.P. Naga Bhushanam', D: 'Ms.Ch Naga Padma Latha', CST: 'Mr. K. Praveen Kumar' },
    'PROJECT': { B: 'Mr. Anil Kumar Reddy Tetali' }
  };

  const getCurrentData = () => {
    switch (selectedSemester) {
      case 'III':
        return { data: thirdSemData, subjects: thirdSemSubjects, faculty: thirdSemFaculty, sections: ['A', 'B', 'C', 'D', 'E', 'CST'] };
      case 'V':
        return { data: fifthSemData, subjects: fifthSemSubjects, faculty: fifthSemFaculty, sections: ['A', 'B', 'C', 'D'] };
      case 'VII':
        return { data: seventhSemData, subjects: seventhSemSubjects, faculty: seventhSemFaculty, sections: ['A', 'B', 'C', 'D', 'CST'] };
      default:
        return { data: {}, subjects: {}, faculty: {}, sections: [] };
    }
  };

  const { data: timetableData, subjects: subjectNames, faculty: facultyData, sections: availableSections } = getCurrentData();

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[currentTime.getDay()];
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

  const currentDay = getCurrentDay();
  const currentPeriod = getCurrentPeriod();
  
  const todaysSchedule = timetableData[selectedSection]?.schedule[currentDay] || [];

  const getCurrentSubject = () => {
    if (currentDay === 'Sunday' || !currentPeriod || currentPeriod === 'LUNCH') {
      return currentPeriod === 'LUNCH' ? 'Lunch Break' : null;
    }
    const periodIndex = timePeriods.findIndex(p => p.period === currentPeriod);
    if (periodIndex === -1) return null;
    const subject = todaysSchedule[periodIndex];
    return subject || null;
  };

  const currentSubject = getCurrentSubject();
  const currentFaculty = currentSubject ? facultyData[currentSubject]?.[selectedSection] : null;

  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      padding: '20px',
      lineHeight: '1.6'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src={logoUrl} alt="Sri Vasavi Engineering College Logo" style={{ height: '60px' }} />
            <div>
              <h1 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1e293b',
                margin: '0'
              }}>
                Sri Vasavi Engineering College
              </h1>
              <p style={{
                color: '#64748b',
                margin: '4px 0 0 0',
                fontSize: '1.1rem'
              }}>
                {selectedSemester} Semester - CSE&CST
              </p>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '8px',
            color: '#374151',
            fontSize: '1rem'
          }}>
            <span style={{ fontSize: '1.25rem', fontWeight: '500' }}>🕐 {currentTime.toLocaleTimeString()}</span>
            <span style={{ fontSize: '1.25rem', fontWeight: '500' }}>📅 {currentDay}</span>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid #e2e8f0',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        {/* Left Column: Controls */}
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h3 style={{ margin: '0 0 12px 0', color: '#374151' }}>Select Semester:</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['III', 'V', 'VII'].map(semester => (
                <button
                  key={semester}
                  onClick={() => {
                    setSelectedSemester(semester);
                    setSelectedSection('A');
                  }}
                  style={{
                    padding: '12px 24px', border: 'none', borderRadius: '8px', fontSize: '1rem',
                    cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s',
                    backgroundColor: selectedSemester === semester ? '#3b82f6' : '#f1f5f9',
                    color: selectedSemester === semester ? 'white' : '#475569'
                  }}
                >
                  {semester} Semester
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ margin: '0 0 12px 0', color: '#374151' }}>Select Section:</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {availableSections.map(section => (
                <button
                  key={section}
                  onClick={() => {
                    setSelectedSection(section);
                  }}
                  style={{
                    padding: '12px 24px', border: 'none', borderRadius: '8px', fontSize: '1rem',
                    cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s',
                    backgroundColor: selectedSection === section ? '#3b82f6' : '#f1f5f9',
                    color: selectedSection === section ? 'white' : '#475569'
                  }}
                >
                  {section === 'CST' ? 'CST' : `Section ${section}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Current Class and Info */}
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            {currentDay !== 'Sunday' && currentSubject && (
              <div style={{
                width: '100%', boxSizing: 'border-box',
                color: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                padding: '24px',
                background: currentPeriod === 'LUNCH' ? 'linear-gradient(to right, #f97316, #ea580c)' : 'linear-gradient(to right, #22c55e, #16a34a)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: '0 0 4px 0' }}>
                      {currentPeriod === 'LUNCH' ? 'Lunch Break' : 'Current Class'}
                    </h2>
                    <p style={{ fontSize: '1.2rem', margin: 0, opacity: 0.9 }}>
                      {currentPeriod === 'LUNCH' ? 'Enjoy your meal! 🥪' : (subjectNames[currentSubject] || currentSubject)}
                    </p>
                    {currentFaculty && (
                      <p style={{ fontSize: '0.9rem', margin: '4px 0 0 0', opacity: 0.85, fontWeight: 500 }}>
                        Faculty: {currentFaculty}
                      </p>
                    )}
                  </div>
                  <div style={{ textAlign: 'right', opacity: 0.9 }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: '600', margin: 0 }}>Period {currentPeriod}</p>
                    <p style={{ margin: 0 }}>{timePeriods.find(p => p.period === currentPeriod)?.label}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div style={{ 
                width: '100%', 
                textAlign: 'right', 
                color: '#475569',
                marginTop: 'auto',
                borderTop: '1px solid #e2e8f0',
                paddingTop: '20px'
            }}>
                <p style={{ margin: 0, fontWeight: '500' }}>Coordinator: {timetableData[selectedSection]?.coordinator}</p>
                <p style={{ margin: 0 }}>Room No: {timetableData[selectedSection]?.room}</p>
            </div>
        </div>
      </div>

      <div style={{
        backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden', border: '1px solid #e2e8f0'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f5f9' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#334155' }}>Day</th>
                {timePeriods.map((period) => (
                  <th key={period.period} style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#334155', minWidth: '150px' }}>
                    <div style={{ fontSize: '0.9rem' }}>{period.label.includes('LUNCH') ? 'LUNCH' : `Period ${period.period}`}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{period.label.includes('LUNCH') ? '' : `${period.start} - ${period.end}`}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentDay !== 'Sunday' && todaysSchedule.length > 0 ? (
                <tr style={{ borderTop: '1px solid #e2e8f0', backgroundColor: '#eff6ff' }}>
                  <td style={{ padding: '16px', fontWeight: '600', color: '#2563eb' }}>{currentDay}</td>
                  {timePeriods.map((period, periodIndex) => {
                    const subject = todaysSchedule[periodIndex];
                    const facultyName = subject ? facultyData[subject]?.[selectedSection] : null;
                    const isCurrentPeriod = currentDay === getCurrentDay() && currentPeriod === period.period;
                    const prevSubject = periodIndex > 0 ? todaysSchedule[periodIndex - 1] : null;
                    const nextSubject = periodIndex < todaysSchedule.length - 1 ? todaysSchedule[periodIndex + 1] : null;
                    const isPartOfMultiPeriod = (subject && (subject.includes('Lab') || subject.includes('FST') || subject.includes('PROJECT') || subject.includes('MCCP-I')) && (subject === prevSubject || subject === nextSubject));
                    
                    const cardStyles = {
                        padding: '8px', borderRadius: '6px', fontSize: '0.875rem',
                        minHeight: '85px', display: 'flex', flexDirection: 'column',
                        justifyContent: 'center', textAlign: 'center', color: '#1e293b',
                        transition: 'transform 0.2s, box-shadow 0.2s'
                    };

                    if (subject) {
                        if(subject.includes('Lab') || subject.includes('FST') || subject.includes('PROJECT') || subject.includes('MCCP-I')|| subject.includes('FSD-2')){ cardStyles.backgroundColor = '#f3e8ff'; cardStyles.color = '#7e22ce'; } 
                        else if (subject === 'LUNCH') { cardStyles.backgroundColor = '#ffedd5'; cardStyles.color = '#c2410c'; } 
                        else if (['Library', 'Sports', 'APTITUDE', 'EE', 'PCS-I', 'DTI'].includes(subject)) { cardStyles.backgroundColor = '#f1f5f9'; cardStyles.color = '#475569'; } 
                        else { cardStyles.backgroundColor = '#dbeafe'; cardStyles.color = '#1e40af'; }
                    }
                    if(isCurrentPeriod) {
                        cardStyles.backgroundColor = '#dcfce7';
                        cardStyles.color = '#166534';
                        cardStyles.fontWeight = 'bold';
                        cardStyles.transform = 'scale(1.05)';
                        cardStyles.boxShadow = '0 0 15px rgba(22, 163, 74, 0.4)';
                    }
                    if(isPartOfMultiPeriod && subject !== 'LUNCH') { cardStyles.border = '2px dashed #9ca3af'; }

                    return (
                      <td key={periodIndex} style={{ padding: '8px', borderTop: '1px solid #e2e8f0' }}>
                        {subject ? (
                          <div style={cardStyles}>
                            <div style={{ fontWeight: '500' }}>{subject}</div>
                            {subjectNames[subject] && subject !== subjectNames[subject] && (
                              <div style={{ fontSize: '0.75rem', marginTop: '4px', opacity: 0.8 }}>{subjectNames[subject]}</div>
                            )}
                            {facultyName && (
                                <div style={{ 
                                    fontSize: '0.75rem', marginTop: '5px', opacity: 0.7, 
                                    fontWeight: 500, borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '5px'
                                }}>
                                    {facultyName}
                                </div>
                            )}
                          </div>
                        ) : ( <div></div>) }
                      </td>
                    );
                  })}
                </tr>
              ) : (
                <tr>
                  <td colSpan={timePeriods.length + 1} style={{ textAlign: 'center', padding: '40px', fontSize: '1.2rem', color: '#475569' }}>
                    It's {currentDay}! No classes today. 🎉
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimetableApp;