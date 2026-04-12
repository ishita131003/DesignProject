from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.api.v1 import deps
from app.models.user import User, UserRole
from app.models.order import Order
from app.schemas.order import Order as OrderSchema, OrderCreate, OrderUpdate

router = APIRouter()

@router.get("/", response_model=List[OrderSchema])
def read_orders(
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    if current_user.role == UserRole.ADMIN:
        return db.query(Order).all()
    return db.query(Order).filter(Order.owner_id == current_user.id).all()

@router.post("/", response_model=OrderSchema)
def create_order(
    *,
    db: Session = Depends(get_db),
    order_in: OrderCreate,
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    order = Order(
        **order_in.model_dump(),
        owner_id=current_user.id
    )
    db.add(order)
    db.commit()
    db.refresh(order)
    return order

@router.patch("/{order_id}", response_model=OrderSchema)
def update_order(
    *,
    db: Session = Depends(get_db),
    order_id: int,
    order_in: OrderUpdate,
    current_user: User = Depends(deps.get_current_active_admin),
) -> Any:
    order = db.query(Order).filter(Order.id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    update_data = order_in.model_dump(exclude_unset=True)
    for field in update_data:
        setattr(order, field, update_data[field])
    
    db.add(order)
    db.commit()
    db.refresh(order)
    return order
