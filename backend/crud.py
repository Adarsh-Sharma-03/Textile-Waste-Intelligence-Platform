from sqlalchemy.orm import Session
import models
from security import hash_password

# ---------------- User ---------------- #

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def create_user(db: Session, name: str, email: str, password: str):

    user = models.User(
        name=name,
        email=email,
        password=hash_password(password),
        role="User"
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user


# ---------------- Inventory ---------------- #

def get_inventory(db: Session):
    return db.query(models.Inventory).all()


def add_inventory(db: Session, fabric: str, weight: str):

    item = models.Inventory(
        fabric=fabric,
        weight=weight,
        status="Available"
    )

    db.add(item)
    db.commit()
    db.refresh(item)

    return item

# ---------------- Dataset ---------------- #

def get_datasets(db: Session):
    return db.query(models.Dataset).all()


def add_dataset(db: Session, filename: str, fabric_type: str):

    dataset = models.Dataset(
        filename=filename,
        fabric_type=fabric_type,
        status="Uploaded"
    )

    db.add(dataset)
    db.commit()
    db.refresh(dataset)

    return dataset

def get_dashboard_stats(db: Session):

    return {
        "users": db.query(models.User).count(),
        "inventory": db.query(models.Inventory).count(),
        "datasets": db.query(models.Dataset).count(),
    }