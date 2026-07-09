
import os
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv
from supabase import create_client, Client
load_dotenv()
app = Flask(__name__)
CORS(app, origins=["*"])

supabase: Client = create_client(
    os.getenv("SUPABASE_URL"),
    os.getenv("SUPABASE_KEY")
)

@app.get("/")
def health():
    return {"status": "Good"}

@app.get("/api/history")
def get_history():
    response = supabase.table("orders").select("*").execute()
    return {"history": response.data}

@app.post("/api/orders")
def create_order():
    data = request.get_json()

    response = supabase.table("orders").insert({
        "customer_id": data["customer_id"],
        "status": data["status"]
    }).execute()
    return {"message": "Order Created", "order": response.data}

if __name__ == "__main__":
    app.run(debug=True)
