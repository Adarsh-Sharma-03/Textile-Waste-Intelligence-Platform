from fastapi import FastAPI, Depends, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import shutil
import os

from database import Base, engine, get_db
import models
import crud

from schemas import (
    RegisterUser,
    LoginUser,
    InventoryItem,
)

from security import verify_password

Base.metadata.create_all(bind=engine)

app = FastAPI()

# ---------------- CORS ---------------- #

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- Home ---------------- #

@app.get("/")
def home():
    return {
        "message": "Welcome to Textile Waste Intelligence Platform"
    }

# ---------------- Register ---------------- #

@app.post("/register")
def register(
    user: RegisterUser,
    db: Session = Depends(get_db)
):

    existing_user = crud.get_user_by_email(
        db,
        user.email
    )

    if existing_user:
        return {
            "success": False,
            "message": "Email already registered"
        }
    print("Password received:", user.password)
    print("Type:", type(user.password))
    crud.create_user(
        db,
        user.name,
        user.email,
        user.password
    )

    return {
        "success": True,
        "message": "Registration Successful"
    }

# ---------------- Login ---------------- #

@app.post("/login")
def login(
    user: LoginUser,
    db: Session = Depends(get_db)
):

    db_user = crud.get_user_by_email(
        db,
        user.email
    )

    if db_user and verify_password(
        user.password,
        db_user.password
    ):
        return {
            "success": True,
            "message": f"Welcome {db_user.name}"
        }

    return {
        "success": False,
        "message": "Invalid Email or Password"
    }

# ---------------- Inventory ---------------- #

@app.get("/inventory")
def get_inventory(
    db: Session = Depends(get_db)
):
    return crud.get_inventory(db)


@app.post("/inventory")
def add_inventory(
    item: InventoryItem,
    db: Session = Depends(get_db)
):

    new_item = crud.add_inventory(
        db,
        item.fabric,
        item.weight
    )

    return {
        "success": True,
        "message": "Fabric Added Successfully",
        "data": {
            "id": new_item.id,
            "fabric": new_item.fabric,
            "weight": new_item.weight,
            "status": new_item.status,
        }
    }

# ---------------- Users ---------------- #

@app.get("/users")
def get_users(
    db: Session = Depends(get_db)
):
    return db.query(models.User).all()

# ---------------- Dataset ---------------- #

@app.post("/dataset")
def upload_dataset(
    file: UploadFile = File(...),
    fabric_type: str = Form(...),
    db: Session = Depends(get_db)
):

    os.makedirs("uploads", exist_ok=True)

    file_path = os.path.join(
        "uploads",
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    dataset = crud.add_dataset(
        db,
        file.filename,
        fabric_type
    )

    return {
        "success": True,
        "message": "Dataset Uploaded Successfully",
        "data": {
            "id": dataset.id,
            "filename": dataset.filename,
            "fabric_type": dataset.fabric_type,
            "status": dataset.status
        }
    }


@app.get("/dataset")
def get_dataset(
    db: Session = Depends(get_db)
):
    return crud.get_datasets(db)

# ---------------- Dashboard ---------------- #

@app.get("/dashboard")
def dashboard_stats(
    db: Session = Depends(get_db)
):
    return crud.get_dashboard_stats(db)