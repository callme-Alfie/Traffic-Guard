import React, { useState, useEffect } from 'react';
import FiltersBar       from '../../components/IncidentManagement/FiltersBar.jsx';
import IncidentTable   from '../../components/IncidentManagement/IncidentTable.jsx';
import StatsCard        from '../../components/IncidentManagement/StatsCard.jsx';
import QuickActions     from '../../components/IncidentManagement/QuickActions.jsx';
import axios from 'axios';

import '../../styles/IncidentManagement.css'

export default function IncidentManagement() {
  // Filters state
  const [filters, setFilters] = useState({
    search: '', status: '', severity: '', from: '', to: ''
  });
  // Table data & stats
  const [incidents, setIncidents] = useState([]);
  const [stats, setStats] = useState({
    total: 0, active: 0, acknowledged: 0, resolved: 0
  });

  // 1️⃣ Load incidents (stub or real API)
  useEffect(() => {
    // TODO: replace with real GET /api/incidents?search=…&status=… etc.
    // Fetch from your new backend
  axios.get(import.meta.env.VITE_API_URL + '/incidents', { params: filters })
    .then(res => setIncidents(res.data))
    .catch(console.error);
  },
    [filters]);

    // compute stats
//     const total = mock.length;
//     const active = mock.filter(i => i.status==='Active').length;
//     const ack   = mock.filter(i => i.status==='Acknowledged').length;
//     const res   = mock.filter(i => i.status==='Resolved').length;
//     setStats({ total, active, acknowledged: ack, resolved: res });
//   }, [filters]);

  // 2️⃣ Handlers
  const handleFilterChange = (field, value) => {
    setFilters(f => ({ ...f, [field]: value }));
  };
  const handleNewIncident = () => {
    console.log('→ open new incident modal');
  };
  const handleTableAction = (item, action) => {
    console.log('Table action:', item, action);
  };
  const handleQuickAction = action => {
    console.log('Quick action:', action);
  };

  return (
    <div className="im-container">
      <div className="im-table">
        <FiltersBar
          filters={filters}
          onChange={handleFilterChange}
          onNewIncident={handleNewIncident}
        />
        <IncidentTable
          data={incidents}
          onAction={handleTableAction}
        />
      </div>

      <div className="im-dashboard">
        <StatsCard stats={stats} />
        <QuickActions onAction={handleQuickAction} />
      </div>
    </div>
  );
}
