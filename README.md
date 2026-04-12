# DesignProject.co - Premium Logo Design Platform

DesignProject.co is a production-ready full-stack application for a premium branding agency. It features a modern, minimal UI with glassmorphism, gold gradients, and a robust FastAPI backend.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Lucide React
- **Backend**: FastAPI, SQLAlchemy, JWT Auth
- **Database**: SQLite (Production-ready with PostgreSQL)

## Features
- **Premium Landing Page**: Hero, Services, Portfolio, Pricing, Footer.
- **JWT Auth**: Secure Login/Signup.
- **Client Dashboard**: Track logo requests and download assets.
- **Logo Request System**: Detailed form for capturing brand vision.
- **Admin Panel**: Manage all orders, update status, and deliver logo files.

## Local Setup

### Backend
1. Navigate to `backend/`
2. Create a virtual environment: `python -m venv venv`
3. Activate: `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (Mac/Linux)
4. Install dependencies: `pip install -r requirements.txt`
5. Run the server: `uvicorn app.main:app --reload`
6. Swagger UI: `http://localhost:8000/docs`

**Initial Admin Credentials:**
- **Email**: `admin@DesignProject.co`
- **Password**: `admin123`

### Frontend
1. Navigate to `frontend/`
2. Install dependencies: `npm install`
3. Run the dev server: `npm run dev`
4. Access the app: `http://localhost:5173`

## Directory Structure
- `backend/app/`: FastAPI application logic
- `frontend/src/`: React source code
- `designproject.db`: SQLite database file (auto-generated)
