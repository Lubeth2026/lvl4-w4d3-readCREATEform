# Order Log Application

## Overview
This app is a full-stack order management system built with a React frontend, Flask backend, and Supabase database.
The app allows users to view, create, update, and delete orders.

## Data Managed
The app manages order data stored in a Supabase `orders` table.
Each order contains:
- `id` - Unique identifier for the order
- `customer_id` - Identifier for the customer associated with the order
- `status` - Current status of the order (examples: pending, completed, shipped)
- `ordered_at` - Date and time the order was created
The application supports the following operations:
- Create new orders
- View order history
- Update an order status
- Delete orders

# Running the Backend (Flask)
1. Make sure Python is installed.
2. Navigate to the backend folder:
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
