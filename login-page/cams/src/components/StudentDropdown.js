import React, { useState, useRef } from 'react';

const StudentDropdown = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filteredStudents = students.filter(student =>
    student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBlur = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100);

    const dropdown = dropdownRef.current;
    if (dropdown && dropdown.contains(document.activeElement)) {
      setIsDropdownOpen(true);
    }
  };

  return (
    <div className="student-dropdown" ref={dropdownRef}>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={handleBlur}
        />
        <span className="dropdown-arrow">&#9662;</span>
      </div>
      {isDropdownOpen && (
        <ul>
          {filteredStudents.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentDropdown;
