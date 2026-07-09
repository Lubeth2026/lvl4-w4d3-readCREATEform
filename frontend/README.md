# Order History App

## Overview
This project is a full-stack order management app
The app allows users to:
- View order history stored in a Supabase Database
- Create new order records through React form
- Send requests from React frontend to a Flask backend API
- Store and retrieve order data using Supabase
The project demonstrates communication between:
- React frontend
- Flask backend API
- Supabase database

### How to Run
Backend
1. Open terminal
2. Navigate into backend folder:
cd backend
3. Create a virtual env:
python -m venv .venv
4. Activate the virtual env:
source .venv/Scripts/activate
5. Install dependencies:
python -m pip install -r requirements.txt
6. Start the Flask server:
flask run
7. Backend will run on:
http://127.0.0.1:5000

*Env Variable
The backend requires Supabase connection info
Create .env file inside the backend folder:
SUPABASE_URL=https://zxnhbkkijrscrujegavj.supabase.co
SUPABASE_KEY=sb_publishable__rFHgacthHci1B1J-14lNw_9NY5BhnO

Frontend
1. Open terminal
2. Navigate into frontend folder:
cd frontend
3. Install dependencies:
npm install
4. Start the React page:
npm run dev
5. Frontend will run on:
http://localhost:5173

*Env Variable
The frontend requires the backend URL
Create .env file inside the frontend folder:
VITE_BACKEND=http://127.0.0.1:5000