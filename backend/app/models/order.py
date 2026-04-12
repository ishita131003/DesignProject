from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text
from sqlalchemy.orm import relationship
from app.db.session import Base
from datetime import datetime
import enum

class OrderStatus(str, enum.Enum):
    PENDING = "Pending"
    IN_PROGRESS = "In Progress"
    DELIVERED = "Delivered"

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    brand_name = Column(String, index=True)
    tagline = Column(String)
    preferred_colors = Column(String)
    style = Column(String)
    description = Column(Text)
    status = Column(String, default=OrderStatus.PENDING)
    created_at = Column(DateTime, default=datetime.utcnow)
    delivered_file_url = Column(String, nullable=True) # URL to the logo file
    reference_file_url = Column(String, nullable=True) # URL to user-uploaded reference
    
    owner_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User", back_populates="orders")
