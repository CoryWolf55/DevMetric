from typing import Optional
from sqlalchemy import Column, Integer, String, BigInteger, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column
from DB.database import Base  # must import the exact Base from database.py

class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    github_id: Mapped[int] = mapped_column(BigInteger, unique=True, nullable=False)
    username: Mapped[str] = mapped_column(String(50), nullable=False)
    password: Mapped[str] = mapped_column(String(255), nullable=False)
    age_range: Mapped[int] = mapped_column(BigInteger, nullable=False)
    access_token: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
