from pydantic import BaseModel, field_validator
from fastapi import  HTTPException
class YoutubeVideoDiscussion(BaseModel):
    video_url:str
    query:str
    @field_validator('*')
    def enforce_non_empty(cls, value):
        if value is None:
            raise ValueError("Field cannot be None")
        if isinstance(value, str) and not value.strip():
            raise ValueError("Field cannot be empty")
        return value
    @field_validator("video_url")
    def validate_password(cls, value:str):
        if value.startswith("https://www.youtube.com/watch?v=") == False:
            raise HTTPException(status_code=401,detail="Video must be a youtube video.")
        return value