import React from 'react';


const recordsPerPageOptions = [2, 4, 6, 8, 10];
  const [recordsPerPage, setRecordsPerPage] = useState(recordsPerPageOptions[0]);

  const handleRecordsPerPageChange = event => {
    setRecordsPerPage(parseInt(event.target.value));
  };

  <RecordsPerPage
        options={recordsPerPageOptions}
        value={recordsPerPage}
        onChange={handleRecordsPerPageChange} />


function RecordsPerPage({ options, value, onChange }) {
  return (
    <div>
      Records per page:{' '}
      <select value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RecordsPerPage;
