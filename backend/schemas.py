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


# ---------- Dataset ----------

class DatasetItem(BaseModel):
    filename: str
    fabric_type: str


# ---------- Prediction History ----------

class PredictionHistoryItem(BaseModel):
    fabric: str
    confidence: str

    category: str
    recyclability: str
    recommendation: str

    fiber_composition: str
    material_quality: str

    texture: str
    pattern: str
    color_type: str

    damage: str
    contamination: str

    reuse_potential: str
    disposal: str

    recycling_method: str

    environmental_impact: str

    co2_saving: str
    water_saving: str

    circular_score: str

    created_at: str