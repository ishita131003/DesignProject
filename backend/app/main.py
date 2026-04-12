from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.api import api_router
from app.core.config import settings
from app.db.session import engine, Base, SessionLocal
from app.models.user import User, UserRole
from app.models.order import Order
from app.core.security import get_password_hash

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    version=settings.VERSION
)

# Set up CORS
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(api_router, prefix=settings.API_V1_STR)

@app.on_event("startup")
def create_first_admin():
    db = SessionLocal()
    try:
        user = db.query(User).filter(User.email == settings.FIRST_SUPERUSER).first()
        if not user:
            print(f"DEBUG: Hashing password for admin. Length: {len(settings.FIRST_SUPERUSER_PASSWORD)}")
            db_obj = User(
                email=settings.FIRST_SUPERUSER,
                hashed_password=get_password_hash(settings.FIRST_SUPERUSER_PASSWORD),
                full_name="Admin",
                role=UserRole.ADMIN
            )
            db.add(db_obj)
            db.commit()
    finally:
        db.close()

@app.get("/")
def root():
    return {"message": "Welcome to Aurafiners API"}
