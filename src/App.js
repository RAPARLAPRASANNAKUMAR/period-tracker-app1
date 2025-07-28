import React, { useState, useEffect, useRef } from 'react';

// --- Component Start ---
const TimetableApp = () => {
  // --- STATE MANAGEMENT ---
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedSemester, setSelectedSemester] = useState('VII');
  const [selectedSection, setSelectedSection] = useState('A');
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);
  const [currentPlacementImageIndex, setCurrentPlacementImageIndex] = useState(0);

  // --- STATIC DATA & ASSETS ---
  const logoUrl = 'https://th.bing.com/th/id/R.693b32b8e70a313495c62cbeecd2a4a1?rik=GOTO7S4IMa%2bnZg&riu=http%3a%2f%2fwww.srivasaviengg.ac.in%2fstuver%2fcss%2fvasavi_logo.png&ehk=H8D20co18A48e7o4L65NWtA35cqSeDRK1tRbiwXb5Mg%3d&risl=&pid=ImgRaw&r=0';

  // --- Notice Board Content ---
  const noticeContent = [
    {
        type: 'text',
        content: `📢 Exciting Announcement: VEDIC VISION 2K25 – Mega Tech Mela! 🏆

Get ready for VEDIC VISION 2K25, a grand fusion of tech and tradition! 🚀
Join us for a 10-day Bootcamp on Java Full Stack Development, followed by an intense 24-hour Hackathon, all centered around the theme: Sports & Health ⚽🧘‍♀️🏋‍♂️

🔥 Event Highlights:
💻 Bootcamp: Aug 4th to 13th
⚔️ Hackathon: Aug 14th (24 Hours)
💰 Prize Pool: ₹35,000/-
📝 Fee: ₹1199/- per head
🗓️ Register By: July 31st, 2025`
    },
    {
      type: 'text',
      content: `📢REMINDER

TCS CodeVita Season 13 

I hope all students have registered for TCS Codevita

Registration ends: 18th September 2025

REGISTRATIONLINK : https://bit.ly/414QDEq `
    },
    {
        type: 'pdf',
        content: '/academic_calendar.pdf', // Assumes academic_calendar.pdf is in the 'public' folder
        label: 'View Latest Circulars'
    }
  ];

  // --- Placement Images for Lunch Break ---
  const placementImages = [
    { url: '/Global_logic.jpg', caption: 'Global Logic' }, // These images must be in the 'public' folder
    { url: '/M2P.jpg', caption: 'M2P FinTech' },
    { url: '/Penant.jpg', caption: 'Penant' },
    { url: '/Kyndrl.jpg', caption: 'Kyndryl' }
  ];

  // --- LIFECYCLE HOOKS (useEffect) ---
  
  // Clock timer
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotation for Semester/Section
  useEffect(() => {
    const rotationTimer = setInterval(() => {
      const semesters = ['III', 'V', 'VII'];
      const sectionsForSem = {
          'III': ['A', 'B', 'C', 'D', 'E', 'CST'],
          'V': ['A', 'B', 'C', 'D'],
          'VII': ['A', 'B', 'C', 'D', 'CST']
      }[selectedSemester] || ['A'];

      const currentSectionIndex = sectionsForSem.indexOf(selectedSection);

      if (currentSectionIndex === sectionsForSem.length - 1) {
        const currentSemIndex = semesters.indexOf(selectedSemester);
        const nextSemester = semesters[(currentSemIndex + 1) % semesters.length];
        setSelectedSemester(nextSemester);
        setSelectedSection('A');
      } else {
        setSelectedSection(sectionsForSem[currentSectionIndex + 1]);
      }
    }, 10000);
    return () => clearInterval(rotationTimer);
  }, [selectedSection, selectedSemester]);
  
  // Notice board content rotation for slideshow effect
  useEffect(() => {
    const noticeTimer = setInterval(() => {
        setCurrentNoticeIndex(prevIndex => (prevIndex + 1) % noticeContent.length);
    }, 8000); // Change notice every 8 seconds
    return () => clearInterval(noticeTimer);
  }, [noticeContent.length]);
  
  // --- TIME & SCHEDULE LOGIC ---
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
  const thirdSemData = { A: { coordinator: 'Mrs. Y Sunitha', room: 'B-301', schedule: { Monday: ['OOPTJ', 'MEFA', 'DLCO', 'DMGT', 'LUNCH', 'ADSAA', 'PCS-I', 'PCS-I'], Tuesday: ['ADSAA', 'DMGT', 'DTI', 'DLCO', 'LUNCH', 'OOPTJ', 'MEFA', 'Sports'], Wednesday: ['MEFA', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab', 'LUNCH', 'DMGT', 'DLCO', 'ADSAA'], Thursday: ['DLCO', 'OOPTJ', 'ADSAA', 'MEFA', 'LUNCH', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab'], Friday: ['DMGT', 'DLCO', 'OOPTJ', 'Library', 'LUNCH', 'DTI', 'DTI', 'MEFA'], Saturday: ['PP Lab', 'PP Lab', 'PP Lab', 'PP Lab', 'LUNCH', 'ADSAA', 'OOPTJ', 'DMGT'] } }, B: { coordinator: 'MV V Gopala Krishna Murthy', room: 'B-302', schedule: { Monday: ['DMGT', 'ADSAA', 'OOPTJ', 'MEFA', 'LUNCH', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab'], Tuesday: ['OOPTJ', 'PP Lab', 'PP Lab', 'PP Lab', 'LUNCH', 'DMGT', 'DLCO', 'ADSAA'], Wednesday: ['DLCO', 'PCS-I', 'ADSAA', 'DMGT', 'LUNCH', 'MEFA', 'PP Lab', 'PP Lab'], Thursday: ['ADSAA', 'MEFA', 'DLCO', 'Library', 'LUNCH', 'OOPTJ', 'DLCO', 'DMGT'], Friday: ['MEFA', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab', 'LUNCH', 'DMGT', 'OOPTJ', 'OOPTJ'], Saturday: ['DTI', 'DLCO', 'MEFA', 'ADSAA', 'LUNCH', 'DTI', 'DTI', 'Sports'] } }, C: { coordinator: 'Mr. N.V.Murali Krishna Raja', room: 'B-303', schedule: { Monday: ['DLCO', 'PCS-I', 'ADSAA', 'ADSAA', 'LUNCH', 'MEFA', 'OOPTJ', 'DLCO'], Tuesday: ['MEFA', 'DLCO', 'ADSAA', 'DMGT', 'LUNCH', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab'], Wednesday: ['PP Lab', 'PP Lab', 'PP Lab', 'DMGT', 'LUNCH', 'MEFA', 'DLCO', 'OOPTJ'], Thursday: ['DMGT', 'MEFA', 'OOPTJ', 'ADSAA', 'LUNCH', 'PP Lab', 'PP Lab', 'PP Lab'], Friday: ['ADSAA', 'ADSAA', 'OOPTJ', 'DMGT', 'LUNCH', 'MEFA', 'DLCO', 'DTI'], Saturday: ['OOPTJ', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab', 'LUNCH', 'DTI', 'DTI', 'Sports'] } }, D: { coordinator: 'Mr. B Bhasker Murali Krishna', room: 'B-304', schedule: { Monday: ['DMGT', 'ADSAA', 'MEFA', 'DTI', 'LUNCH', 'PP Lab', 'PP Lab', 'PP Lab'], Tuesday: ['DLCO', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab', 'LUNCH', 'OOPTJ', 'DMGT', 'MEFA'], Wednesday: ['OOPTJ', 'DMGT', 'ADSAA', 'MEFA', 'LUNCH', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab'], Thursday: ['ADSAA', 'OOPTJ', 'DMGT', 'DLCO', 'LUNCH', 'DLCO', 'DTI', 'DTI'], Friday: ['PP Lab', 'PP Lab', 'PP Lab', 'OOPTJ', 'LUNCH', 'MEFA', 'DLCO', 'DMGT'], Saturday: ['MEFA', 'PCS-I', 'PCS-I', 'DLCO', 'LUNCH', 'ADSAA', 'OOPTJ', 'Sports'] } }, E: { coordinator: 'Mrs. A. Naga Jyothi', room: 'B-203', schedule: { Monday: ['OOPTJ', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab', 'LUNCH', 'DMGT', 'ADSAA', 'MEFA'], Tuesday: ['MEFA', 'DMGT', 'DLCO', 'ADSAA', 'LUNCH', 'OOPTJ', 'DTI', 'DTI'], Wednesday: ['DLCO', 'MEFA', 'DLCO', 'DMGT', 'LUNCH', 'PP Lab', 'PP Lab', 'PP Lab'], Thursday: ['DLCO', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab', 'LUNCH', 'PCS-I', 'PCS-I', 'OOPTJ'], Friday: ['DMGT', 'DTI', 'OOPTJ', 'ADSAA', 'LUNCH', 'MEFA', 'ADSAA', 'Sports'], Saturday: ['ADSAA', 'PP Lab', 'PP Lab', 'PP Lab', 'LUNCH', 'DMGT', 'MEFA', 'DLCO'] } }, CST: { coordinator: 'Mr.L Atri Datta Ravi Tez', room: 'G-202', schedule: { Monday: ['ADSAA', 'DLCO', 'PCS-I', 'PCS-I', 'LUNCH', 'DLCO', 'OOPTJ', 'DMGT'], Tuesday: ['OOPTJ', 'ADSAA', 'MEFA', 'DMGT', 'LUNCH', 'ADSAA', 'DLCO', 'Sports'], Wednesday: ['PP Lab', 'ADSAA', 'OOPTJ', 'DMGT', 'LUNCH', 'ADSAA', 'DTI', 'DTI'], Thursday: ['DMGT', 'MEFA', 'OOPTJ', 'MEFA', 'LUNCH', 'PP Lab', 'PP Lab', 'PP Lab'], Friday: ['OOPTJ', 'DLCO', 'DMGT', 'MEFA', 'LUNCH', 'OOPTJ Lab', 'OOPTJ Lab', 'OOPTJ Lab'], Saturday: ['MEFA', 'DLCO', 'DTI', 'Library', 'LUNCH', 'ADSAA Lab', 'ADSAA Lab', 'ADSAA Lab'] } } };
  const fifthSemData = { A: { coordinator: 'Ms.Ch Naga Padma Latha', room: 'B-203', schedule: { Monday: ['EE', 'EE', 'APTITUDE', 'APTITUDE', 'LUNCH', 'DM Lab', 'DM Lab', 'DM Lab'], Tuesday: ['AI', '', 'MCCP-I', '', 'LUNCH', 'CN Lab', 'CN Lab', 'CN Lab'], Wednesday: ['CN', 'AI', 'FLAT', 'Library', 'LUNCH', 'AI', 'DM', 'CN'], Thursday: ['CN', 'DM', 'FLAT', 'FLAT', 'LUNCH', 'FSD-2', 'AI', 'Sports'], Friday: ['FLAT', 'AI', 'CN', 'DM', 'LUNCH', 'MCCP-I', 'MCCP-I', 'MCCP-I'], Saturday: ['DM', 'DM', 'CN', 'FLAT', 'LUNCH', 'FSD-2', 'FSD-2', 'FSD-2'] } }, B: { coordinator: 'Mr. Syed Akheel Hassan Gori', room: 'B-204', schedule: { Monday: ['AI', 'CN', 'DM', 'AI', 'LUNCH', 'EE', 'APTITUDE', 'APTITUDE'], Tuesday: ['FLAT', 'MCCP-I', 'MCCP-I', 'MCCP-I', 'LUNCH', 'APTITUDE', 'AI', 'CN'], Wednesday: ['DM', 'DM Lab', 'DM Lab', 'DM Lab', 'LUNCH', 'DM Lab', 'FLAT', 'Library'], Thursday: ['AI', 'FSD-2', 'CN', 'CN', 'LUNCH', 'DM', 'DM', 'FLAT'], Friday: ['DM', 'CN Lab', 'CN Lab', 'CN Lab', 'LUNCH', 'MCCP-I', 'MCCP-I', 'MCCP-I'], Saturday: ['CN', 'FSD-2', 'FSD-2', 'FSD-2', 'LUNCH', 'AI', 'FLAT', 'Sports'] } }, C: { coordinator: 'Mr. T. Nava Krishna', room: 'G-301', schedule: { Monday: ['DM', 'DM Lab', 'DM Lab', 'DM Lab', 'LUNCH', 'MCCP-I', 'MCCP-I', 'MCCP-I'], Tuesday: ['CN', 'CN Lab', 'CN Lab', 'CN Lab', 'LUNCH', 'CN Lab', 'FLAT', 'APTITUDE'], Wednesday: ['FLAT', 'EE', 'CN', 'CN', 'LUNCH', 'DM', 'FLAT', 'AI'], Thursday: ['FLAT', 'FSD-2', 'FSD-2', 'FSD-2', 'LUNCH', 'AI', 'CN', 'DM'], Friday: ['AI', 'MCCP-I', 'MCCP-I', 'MCCP-I', 'LUNCH', 'DM', 'FLAT', 'Library'], Saturday: ['DM', 'AI', 'AI', 'FSD-2', 'LUNCH', 'FLAT', 'CN', 'Sports'] } }, D: { coordinator: 'Mr. G. Deepak Pavan Kumar', room: 'G-302', schedule: { Monday: ['FLAT', 'CN', 'CN', 'Library', 'LUNCH', 'MCCP-I', 'MCCP-I', 'MCCP-I'], Tuesday: ['DM', 'AI', 'APTITUDE', 'APTITUDE', 'LUNCH', 'FSD-2', 'FSD-2', 'FSD-2'], Wednesday: ['DM', 'AI', 'Lab', 'FLAT', 'LUNCH', 'DM', 'EE', 'FLAT'], Thursday: ['CN', 'CN Lab', 'CN Lab', 'CN Lab', 'LUNCH', 'DM', 'FLAT', 'AI'], Friday: ['CN', 'MCCP-I', 'MCCP-I', 'MCCP-I', 'LUNCH', 'AI', 'FSD-2', 'Sports'], Saturday: ['FLAT', 'FLAT', 'CN', 'DM', 'LUNCH', 'DM Lab', 'DM Lab', 'DM Lab'] } } };
  const seventhSemData = { A: { coordinator: 'Mrs. M.N.V. Surekha', room: 'G401', schedule: { Monday: ['MS', 'FST', 'FST', 'FST', 'LUNCH', 'DL', 'SPM', 'MAIN PROJECT'], Tuesday: ['DEVOPS', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'DEVOPS', 'DL', 'SPM'], Wednesday: ['CC', 'DEVOPS', 'DL', 'MS', 'LUNCH', 'FST', 'FST', 'FST'], Thursday: ['SPM', 'SPM', 'DL', 'CC', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'], Friday: ['DL', 'MS', 'MS', 'CC', 'LUNCH', 'DEVOPS', 'DEVOPS', 'CC'], Saturday: ['SPM', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'MAIN PROJECT', 'CC', 'MS'] } }, B: { coordinator: 'Mr. P. Rama Mohan Rao', room: 'G-101', schedule: { Monday: ['DEVOPS', 'CC', 'DL', 'MAIN PROJECT', 'LUNCH', 'CC', 'MS', 'MS'], Tuesday: ['CC', 'DL', 'MS', 'SPM', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'], Wednesday: ['MS', 'FST', 'FST', 'FST', 'LUNCH', 'SPM', 'DEVOPS', 'DL'], Thursday: ['DL', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'MS', 'CC', 'DEVOPS'], Friday: ['SPM', 'DEVOPS', 'DL', 'SPM', 'LUNCH', 'FST', 'FST', 'FST'], Saturday: ['CC', 'DEVOPS', 'SPM', 'MAIN PROJECT', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'] } }, C: { coordinator: 'Mr. K. Praveen Kumar', room: 'G-402', schedule: { Monday: ['SPM', 'FST', 'FST', 'FST', 'LUNCH', 'DEVOPS', 'MS', 'DL'], Tuesday: ['CC', 'SPM', 'DEVOPS', 'DL', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'], Wednesday: ['DL', 'MS', 'CC', 'DEVOPS', 'LUNCH', 'FST', 'FST', 'FST'], Thursday: ['MS', 'CC', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'DL', 'SPM', 'SPM'], Friday: ['SPM', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'MS', 'DL', 'CC'], Saturday: ['MS', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'CC', 'DEVOPS', 'DEVOPS'] } }, D: { coordinator: 'Mr. E. Hanuman Sai Gupta', room: 'B-403', schedule: { Monday: ['DL', 'DEVOPS', 'DEVOPS', 'MS', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'], Tuesday: ['MS', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'CC', 'DL', 'SPM'], Wednesday: ['CC', 'FST', 'FST', 'FST', 'LUNCH', 'SPM', 'SPM', 'MAIN PROJECT'], Thursday: ['SPM', 'MS', 'DL', 'MAIN PROJECT', 'LUNCH', 'DEVOPS', 'CC', 'MS'], Friday: ['DL', 'MS', 'DEVOPS', 'CC', 'LUNCH', 'FST', 'FST', 'FST'], Saturday: ['DEVOPS', 'SPM', 'DL', 'CC', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'] } }, CST: { coordinator: 'Mr. Anil Kumar Reddy Tetali', room: 'B-401', schedule: { Monday: ['CC', 'DEVOPS', 'SPM', 'DL', 'LUNCH', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT'], Tuesday: ['MS', 'FST', 'FST', 'FST', 'LUNCH', 'SPM', 'DEVOPS', 'MAIN PROJECT'], Wednesday: ['SPM', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'MS', 'CC', 'CC'], Thursday: ['DEVOPS', 'MS', 'SPM', 'CC', 'LUNCH', 'FST', 'FST', 'FST'], Friday: ['MS', 'CC', 'DEVOPS', 'DL', 'LUNCH', 'DL', 'SPM', 'MAIN PROJECT'], Saturday: ['DL', 'MAIN PROJECT', 'MAIN PROJECT', 'MAIN PROJECT', 'LUNCH', 'MS', 'DL', 'DEVOPS'] } } };
  const thirdSemSubjects = { 'OOPTJ': 'Object Oriented Programming Through Java', 'MEFA': 'Managerial Economics and Financial Analysis', 'DLCO': 'Digital Logic & Computer Organization', 'DMGT': 'Discrete Mathematics & Graph Theory', 'ADSAA': 'Advanced Data Structures & Algorithm Analysis', 'DTI': 'Design Thinking & Innovation', 'PCS-I': 'Professional Communication Skills - I', 'PP Lab': 'Python Programming Lab', 'OOPTJ Lab': 'Object Oriented Programming Through Java Lab', 'ADSAA Lab': 'Advanced Data Structures and Algorithm Analysis Lab', 'Library': 'Library Period', 'Sports': 'Sports Period', 'LUNCH': 'Lunch Break' };
  const fifthSemSubjects = { 'DM': 'Data Warehousing and Data Mining', 'CN': 'Computer Networks', 'FLAT': 'Formal Languages and Automata Theory', 'AI': 'Artificial Intelligence', 'DM Lab': 'Data Mining Lab', 'CN Lab': 'Computer Networks Lab', 'FSD-2': 'Full Stack development-2', 'MCCP-I': 'Master Coding and Competitive Programming - Part-1', 'EE': 'English for Employment', 'APTITUDE': 'Aptitude', 'Library': 'Library Period', 'Sports': 'Sports Period', 'LUNCH': 'Lunch Break', 'Lab': 'Lab' };
  const seventhSemSubjects = { 'DL': 'Deep Learning', 'CC': 'Cloud Computing', 'SPM': 'Software Project Management', 'MS': 'Management Science', 'DEVOPS': 'DevOps', 'FST': 'Full Stack Technologies Lab', 'MAIN PROJECT': 'Main Project', 'LUNCH': 'Lunch Break' };
  const thirdSemFaculty = { 'DMGT': { A: 'Dr. V.S.Naresh', B: 'Mr. N.V.Murali Krishna Raja', C: 'Mr. N.V.Murali Krishna Raja', D: 'Dr. V.S.Naresh', E: 'Mr. N.V.Murali Krishna Raja', CST: 'Dr. V.S.Naresh'}, 'MEFA': { A: 'Mrs. V. Sandhya', B: 'Mr. D. Satyanarayana', C: 'Mrs. V. Sandhya', D: 'Dr. K. Rambabu', E: 'Dr. K. Rambabu', CST: 'Dr. K. Pulla Rao'}, 'DLCO': { A: 'Mrs. Y Sunitha', B: 'Mrs. Y Sunitha', C: 'Mrs. Y Sunitha', D: 'Mrs.M Vineela', E: 'Mrs.M Vineela', CST: 'Ms. Vineela Mallina'}, 'ADSAA': { A: 'Mrs. B.Sri Ramya', B: 'Mrs. B.Sri Ramya', C: 'Mr. K. Lakshmi Narayana', D: 'Mr. K. Lakshmi Narayana', E: 'Mrs. A. Naga Jyothi', CST: 'Mrs. A. Naga Jyothi'}, 'OOPTJ': { A: 'Dr. K. Shirin Bhanu', B: 'Dr. K. Shirin Bhanu', C: 'Mr. G. Nataraj', D: 'Mr. G. Nataraj', E: 'Mr.L Atri Datta Ravi Tez', CST: 'Mr.L Atri Datta Ravi Tez'}, 'ADSAA Lab': { A: 'Mrs. B.Sri Ramya', B: 'Mrs. B.Sri Ramya', C: 'Mr. K. Lakshmi Narayana', D: 'Mr. K. Lakshmi Narayana', E: 'Mrs. A. Naga Jyothi', CST: 'Mrs. A. Naga Jyothi / Mr. P. NagaBhusanam'}, 'OOPTJ Lab': { A: 'Dr. K. Shirin Bhanu', B: 'Dr. K. Shirin Bhanu', C: 'Mr. G. Nataraj', D: 'Mr. G. Nataraj', E: 'Mr.L Atri Datta Ravi Tez', CST: 'Mr.L. Atri Datta Ravi Tez / Ms. Y Divya Vani'}, 'PP Lab': { A: 'Mr. K. Lakshmi Narayana', B: 'Mr. E Hanuman Sai Guptha', C: 'Mr. E Hanuman Sai Guptha', D: 'Mr.Md. Sadik', E: 'Mr.Md. Sadik', CST: 'Mr.Sd Sadik / Mr. K Sai Ektha Kumar Naidu'}, 'DTI': { A: 'MV V Gopala Krishna Murthy', B: 'MV V Gopala Krishna Murthy', C: 'Mr. B Bhasker Murali Krishna', D: 'Mr. B Bhasker Murali Krishna', E: 'Mr. P. Rama Mohan Rao', CST: 'Mr. P. Rama Mohan Rao'}, 'PCS-I': { A: 'Mrs. Ch Tanuja / Mr. G Srinivasa Rao', B: 'Mr. M Venkata Ramana/Ms. A Kiranmayee', C: 'Mr. M Venkata Ramana/Dr. B Ananda Rao', D: 'Mrs. Ch Tanuja / Dr. K Venkata Rao', E: 'Ms. A Kiranmayee / Dr. B Ananda Rao', CST: 'Mr. G Srinivasa Rao / Dr. K Venkata Rao'} };
  const fifthSemFaculty = { 'DM': { A: 'Mrs. N. Hiranmayee', B: 'Mrs.D.SLManikanteswari', C: 'Mrs. N. Hiranmayee', D: 'Mrs.D.SLManikanteswari' }, 'CN': { A: 'MV V Gopala Krishna Murthy', B: 'Mr. Syed Akheel Hassan Gori', C: 'Mr. S. Kumar Reddy Mallidi', D: 'Mr. S. Kumar Reddy Mallidi' }, 'FLAT': { A: 'Ms.Ch Naga Padma Latha', B: 'Ms.Ch Naga Padma Latha', C: 'Mr. G.Sriram Ganesh', D: 'Mr. G.Sriram Ganesh' }, 'AI': { A: 'Mrs. Y DivyaVani', B: 'Dr. Adidela Daveedu Raju', C: 'Dr. Adidela Daveedu Raju', D: 'Dr. Adidela Daveedu Raju' }, 'DM Lab': { A: 'Mrs. N. Hiranmayee', B: 'Mrs. D. Suvarna Lakshmi Manikanteswari', C: 'Mrs. N. Hiranmayee', D: 'Mrs. D. Suvarna Lakshmi' }, 'CN Lab': { A: 'MV V Gopala Krishna Murthy', B: 'Mr. Syed Akheel Hassan Gori', C: 'Mr. S. Kumar Reddy Mallidi', D: 'Mr. S. Kumar Reddy Mallidi' }, 'FSD-2': { A: 'Mr. T. Nava Krishna', B: 'Mr. G. Deepak Pavan Kumar', C: 'Mr. T. Nava Krishna', D: 'Mr. G. Deepak Pavan Kumar' }, 'MCCP-I': { A: 'Dr. V Venkateswara Rao', B: 'Dr. V Venkateswara Rao', C: 'Dr. V Venkateswara Rao', D: 'Dr. V Venkateswara Rao' }, 'EE': { A: 'Ms. A Kiranmayee', B: 'Mr. M Venkata Ramana', C: 'Mr. G Srinivasa Rao', D: 'Dr. B Ananda Rao' }, 'APTITUDE': { A: 'Mr. J NV Somayajulu', B: 'Mr. J NV Somayajulu & Mr. THS Srinivas', C: 'Mr. THS Srinivas', D: 'Mr. THS Srinivas' } };
  const seventhSemFaculty = { 'DL': { A: 'Mr.P. Naga Bhushanam', B: 'Mr.P. Naga Bhushanam', C: 'Mr.P. Naga Bhushanam', D: 'Mr. E. Hanuman Sai Gupta', CST: 'Mr. E. Hanuman Sai Gupta' }, 'CC': { A: 'Mr. P. Rama Mohan Rao', B: 'Mr. P. Rama Mohan Rao', C: 'Mr. K. Praveen Kumar', D: 'Mr. K. Praveen Kumar', CST: 'Mr. K. Praveen Kumar' }, 'SPM': { A: 'Mr. B Bhasker Murali Krishna', B: 'Mr. B Bhasker Murali Krishna', C: 'Mr. Sd. Arief', D: 'Mr. Sd. Arief', CST: 'Mr. Sd. Arief' }, 'MS': { A: 'Ms. P. Bala Jyothi', B: 'Ms. P. Bala Jyothi', C: 'Mr. K. Pavan Kumar', D: 'Mr. P. Bharath Kumar', CST: 'Mrs. P. Devi' }, 'DEVOPS': { A: 'Mrs. M.N.V. Surekha', B: 'Mrs. M.N.V. Surekha', C: 'Mrs. M.N.V. Surekha', D: 'Ms.Ch Naga Padma Latha', CST: 'Mr.Md. Sadik' }, 'FST': { A: 'Mr. Anil Kumar Reddy Tetali / Mr. K Phanindra Brahmaji', B: 'Mr. Anil Kumar Reddy Tetali/ Mr. K Phanindra Brahmaji', C: 'Mr. Anil Kumar Reddy Tetali / Mr. K Phanindra Brahmaji', D: 'Mr. Anil Kumar Reddy Tetali / Mr. K Phanindra Brahmaji', CST: 'Mr. Anil Kumar Reddy Tetali / Mr. K Phanindra Brahmaji' }, 'MAIN PROJECT': { A: 'Mrs. M.N.V. Surekha', B: 'Mr. Anil Kumar Reddy Tetali', C: 'Mr.P. Naga Bhushanam', D: 'Ms.Ch Naga Padma Latha', CST: 'Mr. K. Praveen Kumar' } };

  const getCurrentData = () => {
    switch (selectedSemester) {
      case 'III': return { data: thirdSemData, subjects: thirdSemSubjects, faculty: thirdSemFaculty, sections: ['A', 'B', 'C', 'D', 'E', 'CST'] };
      case 'V': return { data: fifthSemData, subjects: fifthSemSubjects, faculty: fifthSemFaculty, sections: ['A', 'B', 'C', 'D'] };
      case 'VII': return { data: seventhSemData, subjects: seventhSemSubjects, faculty: seventhSemFaculty, sections: ['A', 'B', 'C', 'D', 'CST'] };
      default: return { data: {}, subjects: {}, faculty: {}, sections: [] };
    }
  };

  const { data: timetableData, subjects: subjectNames, faculty: facultyData, sections: availableSections } = getCurrentData();

  const getCurrentDay = () => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentTime.getDay()];
  
  const getCurrentPeriod = () => {
    const now = currentTime;
    const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
    for (const period of timePeriods) {
      const [startHour, startMin] = period.start.split(':').map(Number);
      const [endHour, endMin] = period.end.split(':').map(Number);
      if (currentTimeInMinutes >= (startHour * 60 + startMin) && currentTimeInMinutes < (endHour * 60 + endMin)) {
        return period.period;
      }
    }
    return null;
  };
  
  const currentDay = getCurrentDay();
  const currentPeriod = getCurrentPeriod();
  
  // Placement image rotation logic, active only during lunch
  useEffect(() => {
    let placementTimer;
    if (currentPeriod === 'LUNCH') {
        placementTimer = setInterval(() => {
            setCurrentPlacementImageIndex(prevIndex => (prevIndex + 1) % placementImages.length);
        }, 5000); // Rotate images every 5 seconds
    }
    return () => {
        if (placementTimer) clearInterval(placementTimer);
    };
  }, [currentPeriod, placementImages.length]);

  const todaysSchedule = timetableData[selectedSection]?.schedule[currentDay] || [];

  const getCurrentSubject = () => {
    if (currentDay === 'Sunday' || !currentPeriod) return null;
    if (currentPeriod === 'LUNCH') return 'Lunch Break';
    const periodIndex = timePeriods.findIndex(p => p.period === currentPeriod);
    return periodIndex !== -1 ? todaysSchedule[periodIndex] || null : null;
  };

  const currentSubject = getCurrentSubject();
  const currentFaculty = currentSubject ? facultyData[currentSubject]?.[selectedSection] : null;

  // --- RENDER METHOD ---
  return (
    <div style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif', background: 'linear-gradient(to bottom right, #f0f4f8, #d9e2ec)', minHeight: '100vh', padding: '24px', lineHeight: '1.6' }}>
      
      {/* --- CSS for Animations --- */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 15px 5px rgba(34, 197, 94, 0.4); }
          50% { box-shadow: 0 0 25px 10px rgba(34, 197, 94, 0.6); }
        }
      `}</style>
      
      {/* --- HEADER SECTION --- */}
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          
          {/* Left: Logo and Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src={logoUrl} alt="College Logo" style={{ height: '64px', borderRadius: '50%' }} />
            <div>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1e293b', margin: '0', letterSpacing: '-1px' }}>Sri Vasavi Engineering College</h1>
              <p style={{ color: '#475569', margin: '4px 0 0 0', fontSize: '1.1rem', fontWeight: '500' }}>{selectedSemester} Semester - CSE & CST</p>
            </div>
          </div>
          
          {/* Middle: Dynamic Notice Board (Slideshow) */}
          <div style={{ flex: 1, minWidth: '300px', maxWidth: '450px', padding: '0 20px' }}>
            <div key={currentNoticeIndex} style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
                {(() => {
                    const notice = noticeContent[currentNoticeIndex];
                    if (notice.type === 'text') {
                        return (
                            <div style={{ backgroundColor: '#e0f2fe', border: '1px solid #7dd3fc', borderRadius: '12px', padding: '12px 16px', height: '110px', overflow: 'hidden', textAlign: 'left', fontSize: '0.85rem', whiteSpace: 'pre-wrap', lineHeight: '1.5', color: '#0c4a6e' }}>
                                {notice.content}
                            </div>
                        );
                    }
                    if (notice.type === 'pdf') {
                        return (
                            <a href={notice.content} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '110px', backgroundColor: '#e0e7ff', border: '1px solid #a5b4fc', borderRadius: '12px', textDecoration: 'none', color: '#3730a3', fontWeight: '600', transition: 'all 0.2s', fontSize: '1.1rem' }}>
                                {notice.label}
                            </a>
                        );
                    }
                    return null;
                })()}
            </div>
          </div>

          {/* Right: Time and Date */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', color: '#1e293b' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: '500' }}>🕐 {currentTime.toLocaleTimeString()}</span>
            <span style={{ fontSize: '1.25rem', fontWeight: '500' }}>📅 {currentDay}</span>
          </div>
        </div>
      </div>

      {/* --- CONTROLS & CURRENT CLASS INFO --- */}
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
        {/* Left Column: Controls */}
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h3 style={{ margin: '0 0 12px 0', color: '#374151', fontSize: '1.1rem', fontWeight: '600' }}>Select Semester</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['III', 'V', 'VII'].map(semester => (
                <button key={semester} onClick={() => { setSelectedSemester(semester); setSelectedSection('A'); }} style={{ padding: '12px 24px', border: 'none', borderRadius: '10px', fontSize: '1rem', cursor: 'pointer', fontWeight: '600', transition: 'all 0.2s ease-in-out', boxShadow: selectedSemester === semester ? '0 4px 6px rgba(59, 130, 246, 0.2)' : '0 1px 2px rgba(0,0,0,0.05)', transform: selectedSemester === semester ? 'translateY(-2px)' : 'none', backgroundColor: selectedSemester === semester ? '#2563eb' : '#f3f4f6', color: selectedSemester === semester ? 'white' : '#374151' }}>
                  {semester} Semester
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ margin: '0 0 12px 0', color: '#374151', fontSize: '1.1rem', fontWeight: '600' }}>Select Section</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {availableSections.map(section => (
                <button key={section} onClick={() => setSelectedSection(section)} style={{ padding: '12px 24px', border: 'none', borderRadius: '10px', fontSize: '1rem', cursor: 'pointer', fontWeight: '600', transition: 'all 0.2s ease-in-out', boxShadow: selectedSection === section ? '0 4px 6px rgba(59, 130, 246, 0.2)' : '0 1px 2px rgba(0,0,0,0.05)', transform: selectedSection === section ? 'translateY(-2px)' : 'none', backgroundColor: selectedSection === section ? '#2563eb' : '#f3f4f6', color: selectedSection === section ? 'white' : '#374151' }}>
                  {section === 'CST' ? 'CST' : `Section ${section}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Current Class and Info */}
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
          {currentDay !== 'Sunday' && currentSubject && (
            <div style={{ width: '100%', boxSizing: 'border-box', color: 'white', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', padding: '24px', background: currentPeriod === 'LUNCH' ? 'linear-gradient(to right, #f97316, #ea580c)' : 'linear-gradient(to right, #16a34a, #15803d)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: '0 0 4px 0' }}>{currentPeriod === 'LUNCH' ? 'Lunch Break' : 'Current Class'}</h2>
                  <p style={{ fontSize: '1.2rem', margin: 0, opacity: 0.9 }}>{currentPeriod === 'LUNCH' ? 'Enjoy your meal! 🥪' : (subjectNames[currentSubject] || currentSubject)}</p>
                  {currentFaculty && <p style={{ fontSize: '0.9rem', margin: '8px 0 0 0', opacity: 0.85, fontWeight: 500, backgroundColor: 'rgba(0,0,0,0.15)', padding: '4px 8px', borderRadius: '6px', display: 'inline-block' }}>Faculty: {currentFaculty}</p>}
                </div>
                <div style={{ textAlign: 'right', opacity: 0.9 }}>
                  <p style={{ fontSize: '1.2rem', fontWeight: '600', margin: 0 }}>Period {currentPeriod}</p>
                  <p style={{ margin: 0 }}>{timePeriods.find(p => p.period === currentPeriod)?.label}</p>
                </div>
              </div>
            </div>
          )}
          <div style={{ width: '100%', textAlign: 'right', color: '#475569', marginTop: 'auto', borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
            <p style={{ margin: 0, fontWeight: '600' }}>Coordinator: {timetableData[selectedSection]?.coordinator}</p>
            <p style={{ margin: 0 }}>Room No: {timetableData[selectedSection]?.room}</p>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT: TIMETABLE OR PLACEMENT PICTURES --- */}
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
        {currentPeriod === 'LUNCH' ? (
          // Placement Picture Viewer
          <div style={{ padding: '24px', textAlign: 'center', background: 'linear-gradient(135deg, #fffbeb, #fef2f2)' }}>
            <h2 style={{ color: '#b45309', marginBottom: '20px', fontSize: '1.8rem' }}>Placement Highlights 🏆</h2>
            <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}>
              <img src={placementImages[currentPlacementImageIndex].url} alt={placementImages[currentPlacementImageIndex].caption} style={{ width: '100%', display: 'block', transition: 'all 0.5s ease' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white', padding: '32px 16px 12px 16px', fontSize: '1.2rem', fontWeight: '600' }}>
                {placementImages[currentPlacementImageIndex].caption}
              </div>
            </div>
          </div>
        ) : (
          // Timetable Table
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f9fafb' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#374151', borderBottom: '1px solid #e5e7eb' }}>Day</th>
                  {timePeriods.map((period) => (
                    <th key={period.period} style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#374151', minWidth: '150px', borderBottom: '1px solid #e5e7eb' }}>
                      <div style={{ fontSize: '0.9rem' }}>{period.label.includes('LUNCH') ? 'LUNCH' : `Period ${period.period}`}</div>
                      <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '500' }}>{period.label.includes('LUNCH') ? '' : `${period.start} - ${period.end}`}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentDay !== 'Sunday' && todaysSchedule.length > 0 ? (
                  <tr style={{ backgroundColor: 'white' }}>
                    <td style={{ padding: '16px', fontWeight: '600', color: '#1d4ed8', borderBottom: '1px solid #f3f4f6' }}>{currentDay}</td>
                    {timePeriods.map((period, periodIndex) => {
                      const subject = todaysSchedule[periodIndex];
                      const facultyName = subject ? facultyData[subject]?.[selectedSection] : null;
                      const isCurrentPeriod = currentDay === getCurrentDay() && currentPeriod === period.period;
                      
                      const cardStyles = { padding: '8px', borderRadius: '8px', fontSize: '0.875rem', minHeight: '90px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', transition: 'all 0.2s', border: '1px solid transparent' };

                      if (subject) {
                        if(subject.includes('Lab') || subject.includes('FST') || subject.includes('PROJECT') || subject.includes('MCCP-I')|| subject.includes('FSD-2')){ cardStyles.backgroundColor = '#f5f3ff'; cardStyles.color = '#5b21b6'; cardStyles.borderColor = '#ddd6fe'; } 
                        else if (subject === 'LUNCH') { cardStyles.backgroundColor = '#fff7ed'; cardStyles.color = '#9a3412'; cardStyles.borderColor = '#fed7aa'; } 
                        else if (['Library', 'Sports', 'APTITUDE', 'EE', 'PCS-I', 'DTI'].includes(subject)) { cardStyles.backgroundColor = '#f8fafc'; cardStyles.color = '#475569'; cardStyles.borderColor = '#e2e8f0'; } 
                        else { cardStyles.backgroundColor = '#e0f2fe'; cardStyles.color = '#0c4a6e'; cardStyles.borderColor = '#bae6fd'; }
                      }
                      if(isCurrentPeriod) {
                        cardStyles.backgroundColor = '#dcfce7';
                        cardStyles.color = '#166534';
                        cardStyles.fontWeight = 'bold';
                        cardStyles.transform = 'scale(1.05)';
                        cardStyles.animation = 'pulseGlow 2s infinite';
                      }
                      return (
                        <td key={periodIndex} style={{ padding: '8px', borderBottom: '1px solid #f3f4f6' }}>
                          {subject ? (
                            <div style={cardStyles}>
                              <div style={{ fontWeight: '600' }}>{subject}</div>
                              {subjectNames[subject] && subject !== subjectNames[subject] && (<div style={{ fontSize: '0.75rem', marginTop: '4px', opacity: 0.8 }}>{subjectNames[subject]}</div>)}
                              {facultyName && (<div style={{ fontSize: '0.75rem', marginTop: '5px', opacity: 0.7, fontWeight: 500, borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '5px' }}>{facultyName}</div>)}
                            </div>
                          ) : ( <div></div>) }
                        </td>
                      );
                    })}
                  </tr>
                ) : (
                  <tr><td colSpan={timePeriods.length + 1} style={{ textAlign: 'center', padding: '48px', fontSize: '1.25rem', color: '#475569' }}>It's {currentDay}! No classes today. 🎉</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimetableApp;
