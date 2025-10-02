import { Link } from "react-router-dom";
import "../style/DashboardLayout.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      
      <aside className="sidebar">
        <h2 className="sidebar-title">User Management</h2>
        <Link to="/" className="sidebar-link">Dashboard</Link>
        <Link to="/users" className="sidebar-link">Users</Link>
        
      </aside>

      
      <div className="main-content">
     
        <div className="topbar">
          <h3>Admin Dashboard</h3>
        </div>

        
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
}
