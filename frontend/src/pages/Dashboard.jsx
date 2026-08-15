import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import "../styles/Dashboard.css";

function Dashboard() {

  const [stats, setStats] = useState({
    users: 0,
    inventory: 0,
    datasets: 0,
    predictions: 0,
    high_recyclable: 0,
    low_impact: 0,
    average_circular_score: 0,
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
          <h1>📊 Sustainability Dashboard</h1>
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
            <h2>📈</h2>
            <p>Total Predictions</p>
            <h3>{stats.predictions}</h3>
          </div>

          <div className="dashboard-card">
            <h2>♻️</h2>
            <p>High Recyclable Materials</p>
            <h3>{stats.high_recyclable}</h3>
          </div>

          <div className="dashboard-card">
            <h2>🌱</h2>
            <p>Low Environmental Impact</p>
            <h3>{stats.low_impact}</h3>
          </div>

          <div className="dashboard-card">

            <h2>🌍</h2>

            <p>Average Circular Score</p>

            <div className="dashboard-progress">

              <div
                className="dashboard-progress-fill"
                style={{
                  width: `${stats.average_circular_score || 0}%`
                }}
              >
                {stats.average_circular_score || 0}%
              </div>


            </div>

            <h2>🏆</h2>

            <p>Sustainability Grade</p>

            <h3>{stats.sustainability_grade}</h3>


          </div>

          <div className="dashboard-card">
            <h2>🗄️</h2>
            <p>Database</p>
            <h3>PostgreSQL</h3>
          </div>

          <div className="dashboard-card">
            <h2>🧠</h2>
            <p>AI Model</p>
            <h3>MobileNetV2</h3>
          </div>

          <div className="dashboard-card">
            <h2>✅</h2>
            <p>System Status</p>
            <h3 className="status-online">Operational</h3>
          </div>

        </div>

      </div >
    </>
  );
}

export default Dashboard;