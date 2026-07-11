import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import "../styles/Dashboard.css";

const tableHeader = {
  border: "1px solid #ddd",
  padding: "12px",
  background: "#2563eb",
  color: "white",
};

const tableCell = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "center",
};

function Dataset() {
  const [datasets, setDatasets] = useState([]);
  const [fabricType, setFabricType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const loadDatasets = async () => {
    try {
      const res = await API.get("/dataset");
      setDatasets(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadDatasets();
  }, []);

  const uploadDataset = async () => {
    if (!selectedFile || !fabricType) {
      alert("Please select file and fabric type");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("fabric_type", fabricType);

    try {
      await API.post("/dataset", formData);

      alert("Dataset Uploaded Successfully");

      setSelectedFile(null);
      setFabricType("");

      document.getElementById("datasetFile").value = "";

      loadDatasets();
    } catch (err) {
      console.log(err);
      alert("Upload Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Dataset Management</h1>

        {/* Statistics */}

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h2>📁</h2>
            <p>Total Files</p>
            <h3>{datasets.length}</h3>
          </div>

          <div className="dashboard-card">
            <h2>📊</h2>
            <p>Uploaded</p>
            <h3>{datasets.length}</h3>
          </div>

          <div className="dashboard-card">
            <h2>🗄️</h2>
            <p>Database</p>
            <h3>PostgreSQL</h3>
          </div>

        </div>

        {/* Upload Card */}

        <div
          style={{
            background: "white",
            marginTop: "40px",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >

          <h2>Upload New Dataset</h2>

          <input
            id="datasetFile"
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            style={{
              display: "block",
              marginTop: "20px",
              marginBottom: "15px",
            }}
          />

          <input
            type="text"
            placeholder="Fabric Type"
            value={fabricType}
            onChange={(e) => setFabricType(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              marginBottom: "20px",
            }}
          />

          <br />

          <button
            className="login-btn"
            style={{ width: "220px" }}
            onClick={uploadDataset}
          >
            Upload Dataset
          </button>

        </div>

        {/* Dataset Table */}

        <div
          style={{
            background: "white",
            marginTop: "40px",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >

          <h2>Dataset Records</h2>

          <table
            style={{
              width: "100%",
              marginTop: "20px",
              borderCollapse: "collapse",
            }}
          >

            <thead>

              <tr>

                <th style={tableHeader}>ID</th>
                <th style={tableHeader}>File Name</th>
                <th style={tableHeader}>Fabric Type</th>
                <th style={tableHeader}>Status</th>

              </tr>

            </thead>

            <tbody>

              {datasets.map((item) => (

                <tr key={item.id}>

                  <td style={tableCell}>{item.id}</td>

                  <td style={tableCell}>
                    {item.filename}
                  </td>

                  <td style={tableCell}>
                    {item.fabric_type}
                  </td>

                  <td
                    style={{
                      ...tableCell,
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    {item.status}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default Dataset;