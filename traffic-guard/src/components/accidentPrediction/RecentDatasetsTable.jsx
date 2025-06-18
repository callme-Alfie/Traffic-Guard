// components/accidentPrediction/RecentDatasetsTable.jsx
import React from 'react';

const RecentDatasetsTable = ({ datasets = [] }) => {
  return (
    <div className="recent-datasets">
      <h3>Recent Datasets</h3>
      <table>
        <thead>
          <tr>
            <th>Upload Date</th>
            <th>Name</th>
            <th>Type</th>
            <th>Size</th>
            <th>Records</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datasets.map((d, i) => (
            <tr key={i}>
              <td>{d.date}</td>
              <td>{d.name}</td>
              <td>{d.type}</td>
              <td>{d.size}</td>
              <td>{d.records}</td>
              <td>{d.status}</td>
              <td>
                <button>View</button>
                <button>Retry</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentDatasetsTable;
