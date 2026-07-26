import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/Dashboard.css";
import "../styles/MaterialRecognition.css";

function MaterialRecognition() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);
    const [report, setReport] = useState(null);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
        setResult(null);
        setReport(null);

    };

    const predictFabric = async () => {

        if (!selectedFile) {

            alert("Please select an image.");
            return;

        }

        const formData = new FormData();

        formData.append("file", selectedFile);

        setLoading(true);

        try {

            const response = await api.post("/predict", formData, {

                headers: {
                    "Content-Type": "multipart/form-data",
                },

            });

            const prediction = response.data.prediction;

            setResult(prediction);

            const reportResponse = await api.get("/report");

            setReport(reportResponse.data);

            setHistory((prev) => [

                {
                    time: new Date().toLocaleTimeString(),
                    fabric: prediction.fabric,
                    confidence: prediction.confidence,
                    category: prediction.category,
                    recyclability: prediction.recyclability
                },

                ...prev

            ]);

        }

        catch (error) {

            console.log(error);

            alert("Prediction Failed");

        }

        setLoading(false);

    };
    const downloadReport = async () => {

    try {

        const response = await api.get("/download-report", {
            responseType: "blob",
        });

        const url = window.URL.createObjectURL(
            new Blob([response.data])
        );

        const link = document.createElement("a");

        link.href = url;
        link.download = "Textile_AI_Report.pdf";

        document.body.appendChild(link);

        link.click();

        link.remove();

        window.URL.revokeObjectURL(url);

    }

    catch (error) {

        console.log(error);

        alert("Failed to download report.");

    }

};

    return (

        <>

            <Navbar />

            <div className="dashboard">

                <h1>🧵 Material Recognition</h1>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />

                <br /><br />

                {preview && (

                    <img
                        src={preview}
                        alt="Preview"
                        className="preview-image"
                    />

                )}

                <br /><br />

                <button
                    className="predict-btn"
                    onClick={predictFabric}
                >
                    🚀 Predict Fabric
                </button>
                <br /><br />

{result && (

    <button
        className="predict-btn"
        onClick={downloadReport}
    >
        📥 Download AI Report
    </button>

)}

                {loading && (

                    <div className="loading">

                        🤖 AI is analyzing image...

                    </div>

                )}

                {(result || report) && (

                    <div className="result-container">

                        {result && (

                            <div className="result-card">

                                <h2>🧵 Prediction Result</h2>

                                <p><b>Fabric</b></p>

                                <h3>{result.fabric}</h3>

                                <p><b>Confidence</b></p>

                                <div className="progress-bar">

                                    <div
                                        className="progress-fill"
                                        style={{
                                            width: `${result.confidence}%`
                                        }}
                                    >

                                        {result.confidence}%

                                    </div>

                                </div>

                                <p>

                                    <b>Category :</b>

                                    <span className="badge blue">

                                        {result.category}

                                    </span>

                                </p>

                                <p>

                                    <b>Recyclability :</b>

                                    <span className={result.recyclability === "High" ? "badge green" : "badge red"}>

                                        {result.recyclability}

                                    </span>

                                </p>

                                <p>

                                    <b>Recommendation :</b>

                                    <span className="badge yellow">

                                        {result.recommendation}

                                    </span>

                                </p>

                            </div>

                        )}

                        {report && (

                            <div className="result-card">

                                <h2>📄 AI Report</h2>

                                <p><b>Project :</b> {report.project}</p>

                                <p><b>Status :</b> <span className="badge green">{report.status}</span></p>

                                <p><b>Model :</b> {report.model}</p>

                                <p>✔ Material Recognition Completed</p>

                                <p>✔ Waste Classification Completed</p>

                                <p>✔ Recyclability Analysis Completed</p>

                                <p><b>Accuracy :</b> {report.accuracy}</p>

                                <p><b>Recommendation :</b></p>

                                <span className="badge yellow">

                                    {report.recommendation}

                                </span>

                            </div>

                        )}

                        {result && (

                            <div className="result-card">

                                <h2>🧠 AI Insights</h2>

                                <p>✅ Material Successfully Identified</p>

                                <p>🧵 Fabric Type : <b>{result.fabric}</b></p>

                                <p>♻ Category : <b>{result.category}</b></p>

                                <p>🌍 Recyclability : <b>{result.recyclability}</b></p>

                                <p>💡 Suggested Action :</p>

                                <span className="badge green">

                                    {result.recommendation}

                                </span>

                                <hr />

                                <p>

                                    📈 AI Confidence Score :

                                    <b> {result.confidence}%</b>

                                </p>

                                <p>

                                    🌱 Environmental Impact :

                                    <span className="badge green">

                                        Low Waste Risk

                                    </span>

                                </p>

                            </div>

                        )}

                    </div>

                )}

                {history.length > 0 && (

                    <div className="history-card">

                        <h2>📜 Prediction History</h2>

                        <table>

                            <thead>

                                <tr>

                                    <th>Time</th>
                                    <th>Fabric</th>
                                    <th>Confidence</th>
                                    <th>Category</th>
                                    <th>Recyclability</th>

                                </tr>

                            </thead>

                            <tbody>

                                {history.map((item, index) => (

                                    <tr key={index}>

                                        <td>{item.time}</td>

                                        <td>{item.fabric}</td>

                                        <td>{item.confidence}%</td>

                                        <td>{item.category}</td>

                                        <td>{item.recyclability}</td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </>

    );

}

export default MaterialRecognition;