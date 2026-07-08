
import os
from flask import Flask
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
