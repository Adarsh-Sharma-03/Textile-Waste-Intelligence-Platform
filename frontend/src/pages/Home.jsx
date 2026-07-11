import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import API from "../services/api";

function Home() {
  const [message, setMessage] = useState("");

useEffect(() => {
  API.get("/")
    .then((response) => {
      setMessage(response.data.message);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1 className="hero-title">
  🧵 Textile Waste Intelligence Platform
</h1>

<p
  style={{
    color: "green",
    fontWeight: "bold",
    marginTop: "15px",
  }}
>
  {message}
</p>

<h2 className="hero-subtitle">
  AI-Powered Textile Waste Management System
</h2>

        <p className="hero-description">
          A smart platform to manage textile waste, classify fabrics,
          track inventory, and promote sustainable recycling using
          Artificial Intelligence.
        </p>

        <div className="hero-buttons">
          <Link to="/login">
            <button className="hero-btn">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="hero-btn">
              Register
            </button>
          </Link>
        </div>

        <div className="features">
          <FeatureCard
            icon="🧵"
            title="Fabric Classification"
            description="AI identifies different types of textile fabrics."
          />

          <FeatureCard
            icon="♻️"
            title="Waste Tracking"
            description="Track and manage textile waste efficiently."
          />

          <FeatureCard
            icon="📂"
            title="Dataset Management"
            description="Upload and organize textile datasets."
          />

          <FeatureCard
            icon="🌍"
            title="Sustainability"
            description="Support eco-friendly textile recycling."
          />
        </div>
      </div>
    </>
  );
}

export default Home;