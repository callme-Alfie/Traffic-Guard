// src/AppRoutes.jsx
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login.Jsx';
import Sidebar from '../components/Sidebar';
import Dashboard from '../pages/Dashboard';


// Admin pages
// import AdminLanding from './pages/admin/AdminLanding';
// import RealTimeMonitoring from './pages/admin/RealTimeMonitoring';
// import IncidentManagement from './pages/admin/IncidentManagement';
// import AccidentPrediction from './pages/admin/AccidentPrediction';
// import PolicyRecommendation from './pages/admin/PolicyRecommendation';
// import PublicAwarenessManagement from './pages/admin/PublicAwarenessManagement';
// import UploadDataset from './pages/admin/UploadDataset';
// import ExternalIntegrations from './pages/admin/ExternalIntegrations';
// import ReportsAnalytics from './pages/admin/ReportsAnalytics';

// User pages
// import PublicDashboard from './pages/user/PublicDashboard';
// import IncidentReporting from './pages/user/IncidentReporting';

const AppRoutes = () => (
  
   
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute requiredRole="user">
            <Dashboard />
          </PrivateRoute>
        }
      />
      {/* {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/dashboard' && <Sidebar />} */}

      {/* Admin-only routes */}
      {/* <Route
        path="/admin/landing"
        element={
          <PrivateRoute requiredRole="admin">
            <AdminLanding />
          </PrivateRoute>
        }
      /> */}
      {/* <Route
        path="/admin/monitoring"
        element={
          <PrivateRoute requiredRole="admin">
            <RealTimeMonitoring />
          </PrivateRoute>
        }
      /> */}
      {/* <Route
        path="/admin/incidents"
        element={
          <PrivateRoute requiredRole="admin">
            <IncidentManagement />
          </PrivateRoute>
        }
      /> */}
      {/* <Route
        path="/admin/prediction"
        element={
          <PrivateRoute requiredRole="admin">
            <AccidentPrediction />
          </PrivateRoute>
        }
      /> */}
      {/* <Route
        path="/admin/policies"
        element={
          <PrivateRoute requiredRole="admin">
            <PolicyRecommendation />
          </PrivateRoute>
        }
      /> */}
      {/* <Route
        path="/admin/awareness"
        element={
          <PrivateRoute requiredRole="admin">
            <PublicAwarenessManagement />
          </PrivateRoute>
        }
      /> */}
      {/* <Route
        path="/admin/upload"
        element={
          <PrivateRoute requiredRole="admin">
            <UploadDataset />
          </PrivateRoute>
        }
      /> */}
      {/* <Route
        path="/admin/integrations"
        element={
          <PrivateRoute requiredRole="admin">
            <ExternalIntegrations />
          </PrivateRoute>
        }
      /> */}
      {/* <Route
        path="/admin/reports"
        element={
          <PrivateRoute requiredRole="admin">
            <ReportsAnalytics />
          </PrivateRoute>
        }
      /> */}

      {/* User-only routes */}
      {/* <Route
        path="/dashboard"
        element={
          <PrivateRoute requiredRole="user">
            <PublicDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/report-incident"
        element={
          <PrivateRoute requiredRole="user">
            <IncidentReporting />
          </PrivateRoute>
        }
      /> */}

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  
);

export default AppRoutes;
