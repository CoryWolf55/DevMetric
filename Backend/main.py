from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from dependencies import get_db
from models.user import User


#example
app = FastAPI()

@app.get("/users")
def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()