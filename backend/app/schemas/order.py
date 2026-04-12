from typing import Optional, List
from pydantic import BaseModel, ConfigDict
from datetime import datetime

class OrderBase(BaseModel):
    brand_name: str
    tagline: Optional[str] = None
    preferred_colors: Optional[str] = None
    style: Optional[str] = None
    description: Optional[str] = None

class OrderCreate(OrderBase):
    pass

class OrderUpdate(BaseModel):
    status: Optional[str] = None
    delivered_file_url: Optional[str] = None

class Order(OrderBase):
    id: int
    status: str
    created_at: datetime
    delivered_file_url: Optional[str] = None
    owner_id: int

    model_config = ConfigDict(from_attributes=True)
