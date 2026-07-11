import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import API from "../services/api";

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [fabric, setFabric] = useState("");
  const [weight, setWeight] = useState("");

  const fetchInventory = async () => {
    try {
      const response = await API.get("/inventory");
      setInventory(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load inventory");
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const addFabric = async () => {
    if (!fabric || !weight) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await API.post("/inventory", {
        fabric,
        weight,
      });

      alert(response.data.message);

      setFabric("");
      setWeight("");

      fetchInventory();
    } catch (error) {
      console.log(error);
      alert("Failed to add fabric");
    }
  };

  return (
    <>
      <Navbar />

      <div
        className="dashboard"
        style={{
          maxWidth: "1100px",
          margin: "30px auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          📦 Inventory Management
        </h1>

        {/* Form Card */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            marginBottom: "30px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Fabric Name"
            value={fabric}
            onChange={(e) => setFabric(e.target.value)}
            style={{
              flex: 1,
              minWidth: "220px",
              padding: "12px",
            }}
          />

          <input
            type="text"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={{
              flex: 1,
              minWidth: "180px",
              padding: "12px",
            }}
          />

          <button
            className="login-btn"
            style={{
              width: "180px",
              height: "45px",
            }}
            onClick={addFabric}
          >
            Add Fabric
          </button>
        </div>

        {/* Table Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#2563eb",
                  color: "#fff",
                }}
              >
                <th style={headerStyle}>ID</th>
                <th style={headerStyle}>Fabric</th>
                <th style={headerStyle}>Weight</th>
                <th style={headerStyle}>Status</th>
              </tr>
            </thead>

            <tbody>
              {inventory.map((item) => (
                <tr key={item.id}>
                  <td style={cellStyle}>{item.id}</td>
                  <td style={cellStyle}>{item.fabric}</td>
                  <td style={cellStyle}>{item.weight}</td>
                  <td style={cellStyle}>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const headerStyle = {
  padding: "15px",
  textAlign: "center",
  fontSize: "16px",
};

const cellStyle = {
  padding: "15px",
  textAlign: "center",
  borderBottom: "1px solid #e5e7eb",
};

export default Inventory;