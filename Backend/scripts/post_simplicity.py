# Post simplicity
from fastapi import HTTPException

def post_commit(item, db):
    db.add(item)
    db.commit()
    db.refresh(item)

def post_rollback(error, db):
    db.rollback()
    raise HTTPException(status_code=500, detail=str(error))