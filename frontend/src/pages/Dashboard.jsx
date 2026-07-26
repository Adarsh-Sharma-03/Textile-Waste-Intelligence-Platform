import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import "../styles/Dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    inventory: 0,
    datasets: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await API.get("/dashboard");
      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="dashboard-title">
          <h1>📊 Dashboard</h1>
          <p>
            AI Powered Textile Waste Intelligence Platform
          </p>
        </div>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h2>🧵</h2>
            <p>Inventory Items</p>
            <h3>{stats.inventory}</h3>
          </div>

          <div className="dashboard-card">
            <h2>📂</h2>
            <p>Datasets</p>
            <h3>{stats.datasets}</h3>
          </div>

          <div className="dashboard-card">
            <h2>👤</h2>
            <p>Registered Users</p>
            <h3>{stats.users}</h3>
          </div>

          <div className="dashboard-card">
            <h2>🗄️</h2>
            <p>Database</p>
            <h3>PostgreSQL</h3>
          </div>

          <div className="dashboard-card">
            <h2>🤖</h2>
            <p>AI Model</p>
            <h3>MobileNetV2</h3>
          </div>

          <div className="dashboard-card">
            <h2>♻️</h2>
            <p>System Status</p>
            <h3 className="status-online">Operational</h3>
          </div>

        </div>

      </div>
    </>
  );
}
export default Dashboard;