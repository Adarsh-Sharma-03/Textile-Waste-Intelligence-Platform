from pydantic import BaseModel

# ---------- User ----------

class RegisterUser(BaseModel):
    name: str
    email: str
    password: str


class LoginUser(BaseModel):
    email: str
    password: str


# ---------- Inventory ----------

class InventoryItem(BaseModel):
    fabric: str
    weight: str
class DatasetItem(BaseModel):
    filename: str
    fabric_type: str