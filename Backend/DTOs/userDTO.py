# schemas/user.py
from pydantic import BaseModel
from typing import Optional

class UserCreateDTO(BaseModel):
    github_id: int
    username: str
    access_token: str
    age_range: int
    password: str

    class Config:
        from_attributes = True


class UserResponseDTO(BaseModel):
    github_id: int
    username: str

    class Config:
        from_attributes = True

class UserLoginDTO(BaseModel):
    username: str
    password: str

    class Config:
        from_attributes = True

class UserLoginResponseDTO(BaseModel):
    github_id: int
    username: str
    age_range: Optional[int] = None

    class Config:
        from_attributes = True