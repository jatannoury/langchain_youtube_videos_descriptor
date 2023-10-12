from pydantic import BaseModel, field_validator
from typing import Optional
import re

class SignIn(BaseModel):
    email: Optional[str]
    password: Optional[str]

    @field_validator('email')
    def validate_email(cls, value: str):
        if "@" not in value:
            raise ValueError("Email not in correct format")
        if ".com" not in value:
            raise ValueError("Email should contain Top level domain (TLD)")
        return value
    @field_validator("password")
    def validate_password(cls,value):
        regex_expression = "^(?=.*[A-Z]).{6,}$"
        if re.match(regex_expression,value) == False:
            raise ValueError("Password Shouldbe at least 6 characters and contain at least one upper case letter ")
        return value