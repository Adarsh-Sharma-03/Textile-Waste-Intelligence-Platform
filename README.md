# ♻️ Textile Waste Intelligence Platform

An AI-powered web platform designed to support intelligent textile waste management through **fabric classification, waste analysis, recycling recommendations, sustainability insights, and dataset management**.

The platform uses a trained **TensorFlow/Keras deep learning model** to analyze uploaded textile images and classify them into different fabric categories. Based on the predicted material, the system provides detailed information about the fabric, including its properties, recyclability, reuse potential, environmental impact, disposal guidance, and recycling recommendations.

---

## 🚀 Live Project Overview

### Problem Statement

The textile industry produces a significant amount of waste every year. Proper identification and management of textile waste are challenging because different fabrics have different:

- Fiber compositions
- Recycling methods
- Reuse potential
- Environmental impacts
- Disposal requirements

Manual identification of textile materials can be time-consuming and may require expert knowledge.

This project aims to provide an intelligent solution that uses **Artificial Intelligence and Machine Learning** to analyze textile images and provide useful waste-management insights.

---

# 🎯 Project Objectives

The main objectives of this project are:

- Classify textile and fabric images using Deep Learning.
- Identify the predicted fabric type.
- Provide confidence scores for predictions.
- Analyze material properties.
- Provide recyclability information.
- Suggest recycling methods.
- Provide reuse recommendations.
- Categorize textile waste.
- Estimate sustainability and environmental impact.
- Provide waste reduction recommendations.
- Manage textile-related datasets through a web interface.

---

# 🧠 Key Features

## 1. Fabric Classification

Users can upload a textile or fabric image.

The trained AI model analyzes the image and predicts one of the supported fabric categories.

### Supported Fabric Classes

- Chiffon
- Cotton
- Denim
- Jacquard
- Linen
- Nylon
- Oxford
- Polyester
- Polyester (Coated)
- Satin
- Velveteen

The model returns:

- Predicted fabric
- Prediction confidence

---

## 2. Detailed Material Analysis

After identifying the fabric, the platform provides detailed information such as:

- Category
- Fiber composition
- Material quality
- Texture
- Pattern
- Color type
- Blend identification

---

## 3. Textile Waste Analysis

The system also provides waste-related information, including:

- Waste category
- Damage information
- Contamination details
- Disposal recommendations
- Waste reduction suggestions

---

## 4. Recycling Recommendations

Based on the predicted fabric, the platform provides:

- Recyclability status
- Recycling method
- Recycling options
- Reuse potential
- Disposal guidance

---

## 5. Sustainability Insights

The system provides sustainability-related metrics such as:

- Environmental impact
- Recyclability score
- Reuse potential score
- Environmental impact score
- Circularity score
- Estimated CO₂ saving
- Estimated water saving

---

## 6. User Authentication

The platform includes:

- User Registration
- User Login
- Password hashing
- Email validation

Authentication functionality is handled through the FastAPI backend.

---

## 7. Dashboard

The dashboard provides an overview of the system and its major functionalities.

It includes features such as:

- Fabric classification access
- Waste tracking
- Dataset management
- Sustainability information
- Inventory-related data

---

## 8. Dataset Management

The platform includes a dataset management section for handling textile-related data.

This helps organize and manage datasets used for:

- Model training
- Testing
- Textile classification
- Future improvements

---

# 🏗️ System Architecture

```text
                        ┌─────────────────────┐
                        │       USER          │
                        └──────────┬──────────┘
                                   │
                                   ▼
                    ┌─────────────────────────┐
                    │   React.js Frontend     │
                    │        + Vite           │
                    └──────────┬──────────────┘
                               │
                               │ HTTP / API Requests
                               ▼
                    ┌─────────────────────────┐
                    │    FastAPI Backend      │
                    │                         │
                    │ - Authentication        │
                    │ - Image Processing      │
                    │ - API Endpoints         │
                    │ - Database Operations   │
                    └───────┬─────────┬───────┘
                            │         │
                ┌───────────▼───┐ ┌───▼──────────────────┐
                │ PostgreSQL DB │ │ TensorFlow/Keras     │
                │               │ │ Fabric AI Model      │
                └───────────────┘ └──────────┬───────────┘
                                             │
                                             ▼
                                  ┌──────────────────────┐
                                  │ Fabric Prediction    │
                                  │ + Waste Intelligence │
                                  └──────────────────────┘


---

# 🧩 Technology Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* CSS
* Tailwind CSS / PostCSS

---

## Backend

* Python
* FastAPI
* Uvicorn
* SQLAlchemy
* Python Multipart
* Passlib
* Bcrypt
* Pydantic / Email Validator

---

## Artificial Intelligence and Machine Learning

* TensorFlow
* TensorFlow Keras
* MobileNetV2 preprocessing
* NumPy
* Pillow

---

## Database

* PostgreSQL
* Psycopg

---

## Deployment and Containerization

* Docker
* Dockerfile
* Railway deployment configuration

---

# 📁 Project Structure

```text
Textile-Waste-Intelligence-Platform/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── FeatureCard.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Dataset.jsx
│   │   │   └── Inventory.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   ├── postcss.config.js
│   └── package-lock.json
│
├── backend/
│   │
│   ├── model/
│   │   ├── fabric_model.keras
│   │   ├── predict.py
│   │   ├── train_model.py
│   │   ├── prepare_dataset.py
│   │   └── waste_info.py
│   │
│   ├── dataset/
│   │   └── fabric_dataset/
│   │
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env
│
├── README.md
└── .gitignore
```

---

# 🤖 AI Model Details

The project uses a trained **TensorFlow/Keras model** for fabric classification.

### Model Input Shape

```text
(None, 224, 224, 3)
```

This means the model accepts images of:

```text
224 × 224 pixels
3 color channels (RGB)
```

### Model Output Shape

```text
(None, 11)
```

The model predicts probabilities for **11 fabric classes**.

The class with the highest probability is selected as the final prediction.

---

# 🔄 AI Prediction Workflow

```text
User Uploads Fabric Image
           │
           ▼
Image Loaded Using Keras
           │
           ▼
Resize Image to 224 × 224
           │
           ▼
Convert Image to NumPy Array
           │
           ▼
Add Batch Dimension
           │
           ▼
MobileNetV2 Preprocessing
           │
           ▼
TensorFlow/Keras Model Prediction
           │
           ▼
Find Highest Probability
           │
           ▼
Identify Fabric Class
           │
           ▼
Get Fabric and Waste Information
           │
           ▼
Return Detailed Sustainability Result
```

---

# 🧪 Prediction Process

The prediction pipeline performs the following steps:

1. Load the uploaded image.
2. Resize the image to `224 × 224`.
3. Convert the image into a NumPy array.
4. Add a batch dimension.
5. Apply MobileNetV2 preprocessing.
6. Send the processed image to the trained model.
7. Generate prediction probabilities.
8. Find the class with the highest probability.
9. Calculate the confidence percentage.
10. Retrieve detailed fabric information from the waste intelligence database.
11. Return the complete analysis result.

---

# 📊 Example Prediction Response

The AI prediction can provide information in the following format:

```json
{
  "fabric": "Cotton",
  "confidence": 95.42,
  "category": "Natural Fiber",
  "recyclability": "High",
  "recommendation": "Suitable for reuse and textile recycling",
  "fiber_composition": "Cellulose-based natural fiber",
  "material_quality": "Good",
  "texture": "Soft",
  "pattern": "Varies",
  "color_type": "Varies",
  "damage": "Depends on physical condition",
  "contamination": "Check before recycling",
  "reuse_potential": "High",
  "disposal": "Prefer reuse or recycling",
  "recycling_method": "Mechanical textile recycling",
  "environmental_impact": "Moderate",
  "recyclability_score": 9,
  "reuse_potential_score": 9,
  "environmental_impact_score": 6,
  "co2_saving": "Estimated based on reuse/recycling",
  "water_saving": "Estimated based on reuse/recycling",
  "circular_score": 9,
  "blend_identification": "Single or blended material",
  "waste_category": "Reusable/Recyclable Textile Waste",
  "recycling_options": "Reuse, mechanical recycling, upcycling",
  "waste_reduction": "Extend product life through reuse"
}
```

---

# ⚙️ Backend Setup

## Step 1: Navigate to Backend

```bash
cd backend
```

---

## Step 2: Install Dependencies

Using the project's Python environment:

```bash
python -m pip install -r requirements.txt
```

If using the Anaconda Python installation:

```bash
C:\Users\s9424\anaconda3\python.exe -m pip install -r requirements.txt
```

---

## Step 3: Configure Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```env
DATABASE_URL=postgresql+psycopg://USERNAME:PASSWORD@localhost:5432/textile_db
```

> Replace `USERNAME`, `PASSWORD`, and database details with your local PostgreSQL configuration.

---

## Step 4: Run the Backend

```bash
python -m uvicorn main:app --reload
```

Or using Anaconda Python:

```bash
C:\Users\s9424\anaconda3\python.exe -m uvicorn main:app --reload
```

The backend will normally run on:

```text
http://127.0.0.1:8000
```

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

---

# 💻 Frontend Setup

## Step 1: Navigate to Frontend

Open a new terminal and run:

```bash
cd frontend
```

---

## Step 2: Install Dependencies

```bash
npm install
```

---

## Step 3: Run the Frontend

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

---

# ▶️ Running the Complete Project

To run the complete project locally, use **two separate terminals**.

## Terminal 1 — Backend

```bash
cd backend
```

Then:

```bash
C:\Users\s9424\anaconda3\python.exe -m uvicorn main:app --reload
```

Expected backend address:

```text
http://127.0.0.1:8000
```

---

## Terminal 2 — Frontend

```bash
cd frontend
```

Then:

```bash
npm run dev
```

Expected frontend address:

```text
http://localhost:5173
```

### Important

Docker is **not required** for normal local development.

You can run the frontend and backend directly using:

```text
Frontend → npm run dev
Backend  → uvicorn main:app --reload
```

Docker is mainly useful for containerization and deployment.

---

# 🐳 Docker Support

The backend includes Docker support.

Example Dockerfile configuration:

```dockerfile
FROM python:3.11-slim

WORKDIR /app/backend

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD uvicorn main:app --host 0.0.0.0 --port $PORT
```

Build the Docker image:

```bash
docker build -t textile-backend ./backend
```

Run the container:

```bash
docker run --rm --env-file backend\.env -e PORT=8000 -p 8000:8000 textile-backend
```

> Database configuration may need to be adjusted depending on whether PostgreSQL is running locally, inside Docker, or on a cloud database.

---

# 🗄️ Database Architecture

The project uses PostgreSQL through SQLAlchemy.

```text
FastAPI Application
        │
        ▼
SQLAlchemy ORM
        │
        ▼
PostgreSQL Driver (Psycopg)
        │
        ▼
PostgreSQL Database
```

The database can support information related to:

* Users
* Authentication
* Textile inventory
* Dataset information
* Waste tracking
* Future analysis history

---

# 🔐 Environment Variables

Sensitive configuration values should not be hard-coded in the source code.

Example:

```env
DATABASE_URL=postgresql+psycopg://USERNAME:PASSWORD@localhost:5432/textile_db
```

Recommended `.gitignore` entries:

```gitignore
.env
__pycache__/
*.pyc
node_modules/
dist/
```

---

# 🛠️ API Capabilities

The backend is designed to support APIs for:

* User registration
* User login
* Fabric image upload
* Fabric prediction
* Waste analysis
* Inventory operations
* Dataset operations

The FastAPI interactive documentation can be accessed at:

```text
http://127.0.0.1:8000/docs
```

---

# 📈 Project Development Milestones

## Milestone 1 — Project Foundation

Completed major foundational work including:

* Project planning
* Dataset exploration
* Frontend structure
* Backend structure
* React routing
* FastAPI setup
* Database planning
* Initial API development

---

## Milestone 2 — Frontend and Backend Development

Implemented major application components such as:

* Home page
* Login page
* Registration page
* Dashboard
* Dataset management interface
* Inventory interface
* Navbar
* Feature cards
* FastAPI API integration
* Database integration

---

## Milestone 3 — Textile Waste Intelligence

Focused on the AI and sustainability aspects of the project:

* Fabric dataset preparation
* Deep Learning model development
* Fabric classification
* TensorFlow/Keras model integration
* Material information mapping
* Recycling recommendations
* Reuse potential
* Environmental impact analysis
* Sustainability scoring

---

## Milestone 4 — AI Model Integration and Final System Testing

Major work completed during the final stage includes:

### AI Model Integration

* Integrated the trained `fabric_model.keras` model into the backend.
* Successfully verified that the model loads correctly.
* Confirmed model input shape:

```text
(None, 224, 224, 3)
```

* Confirmed model output shape:

```text
(None, 11)
```

### Prediction Pipeline

* Image loading implemented.
* Image resizing to `224 × 224`.
* NumPy conversion implemented.
* MobileNetV2 preprocessing integrated.
* Model inference implemented.
* Highest-confidence class prediction implemented.

### Waste Intelligence Integration

The predicted fabric is connected with detailed sustainability information through `waste_info.py`.

The system provides:

* Fabric information
* Material characteristics
* Recyclability
* Reuse potential
* Recycling methods
* Disposal guidance
* Environmental impact
* Sustainability scores
* Waste reduction suggestions

### Local System Testing

The complete project was tested locally using:

```text
React Frontend
      +
FastAPI Backend
      +
TensorFlow/Keras Model
      +
PostgreSQL Configuration
```

### Deployment Preparation

Deployment-related work included:

* Dockerfile configuration
* Python dependency management
* TensorFlow CPU dependency configuration
* PostgreSQL driver configuration
* Environment variable configuration
* Railway deployment preparation

---

# 🧠 Challenges and Solutions

## Challenge 1: TensorFlow Model Deployment

Deep Learning models can increase deployment complexity because of large dependencies and model files.

### Solution

The model was tested successfully inside the project environment using:

```text
TensorFlow/Keras
compile=False
```

The model successfully loads with the required input and output shapes.

---

## Challenge 2: PostgreSQL Driver Compatibility

Different PostgreSQL drivers can use different SQLAlchemy connection strings.

### Solution

The project configuration was updated to use the appropriate Psycopg driver format:

```text
postgresql+psycopg://
```

This is compatible with Psycopg 3.

---

## Challenge 3: Docker vs Local Database Host

A hostname such as:

```text
host.docker.internal
```

is intended for accessing the host machine from inside a Docker container.

It should not normally be used when running the backend directly on the local machine.

### Local Development

Use:

```text
localhost
```

### Docker Environment

Use an appropriate Docker-accessible host or a container/service name.

---

## Challenge 4: Tailwind/PostCSS Configuration

A frontend dependency issue occurred because newer Tailwind versions use a separate PostCSS package.

### Solution

The frontend PostCSS configuration was updated to use the appropriate Tailwind PostCSS package.

This allowed the Vite frontend to run successfully.

---

# 🔮 Future Enhancements

The following features can be added in future versions:

* Real-time textile waste tracking
* Prediction history
* User-specific dashboards
* Advanced waste image classification
* Damage detection using computer vision
* Contamination detection
* Fabric blend percentage detection
* QR code-based textile tracking
* Recycler and collection-center recommendations
* Geographic map integration
* Advanced sustainability analytics
* Carbon footprint calculation
* Mobile application
* Admin dashboard
* Cloud model deployment
* Automated dataset retraining
* Model performance monitoring
* Multi-language support

---

# 📊 Future AI Workflow

```text
Upload Textile Image
        │
        ▼
Image Classification
        │
        ▼
Fabric Identification
        │
        ├───────────────┐
        ▼               ▼
Material Analysis   Waste Analysis
        │               │
        └───────┬───────┘
                ▼
        Sustainability Analysis
                │
                ▼
        Recycling Recommendation
                │
                ▼
        Reuse / Disposal Guidance
                │
                ▼
          Final Smart Report
```

---

# 🎓 Academic Relevance

This project demonstrates practical implementation of:

* Artificial Intelligence
* Machine Learning
* Deep Learning
* Computer Vision
* Convolutional Neural Networks
* TensorFlow
* Full Stack Web Development
* REST APIs
* Database Management
* Sustainability Technology
* Circular Economy Concepts
* Textile Waste Management

---

# 👨‍💻 Project Workflow

```text
                    ┌──────────────────┐
                    │   User Uploads   │
                    │   Fabric Image   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ React Frontend   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ FastAPI Backend  │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Image Processing │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ TensorFlow Model │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Fabric Prediction│
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Waste Information│
                    │ + Sustainability │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Final AI Result  │
                    └──────────────────┘
```

---

# 👥 Team / Contributors

This project was developed as part of the **Virtual Internship 7.0** program.

Contributors can be added here:

* **Adarsh Sharma** — Full Stack Development, AI/ML Integration, Project Development
* Other team members — Add respective roles

---

# 📌 How to Contribute

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit the changes.

```bash
git commit -m "Add new feature"
```

5. Push the branch.

```bash
git push origin feature/new-feature
```

6. Create a Pull Request.

---

# 📄 License

This project is developed for educational, academic, internship, and research purposes.

---

# 🙏 Acknowledgements

Special thanks to:

* Virtual Internship 7.0
* TensorFlow
* FastAPI
* React
* Vite
* PostgreSQL
* SQLAlchemy
* Open-source community

---

# ⭐ Conclusion

**Textile Waste Intelligence Platform** combines **Artificial Intelligence, Deep Learning, Full Stack Development, and Sustainability** to create an intelligent solution for textile waste analysis.

The platform can analyze textile images, identify fabric types, and provide meaningful information regarding:

* Material properties
* Recyclability
* Recycling methods
* Reuse potential
* Disposal recommendations
* Environmental impact
* Sustainability metrics

The project demonstrates how modern AI technologies can contribute to building smarter and more sustainable waste management systems.

---

## ⭐ If you find this project useful, consider giving the repository a star!

```
```
