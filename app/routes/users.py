from app.controllers.aws_controllers.dynamo_db_controller import DynamoDbHandler
from fastapi import  APIRouter,HTTPException,Response

from app.models.SignIn import SignIn
from app.models.User import User



dynamoDB_handler = DynamoDbHandler()
router = APIRouter()

@router.post("/register", status_code=201)
async def sign_up(formData: User):
    try:
        dynamoDB_handler.post_user_table(formData)
        return {"message": "User created successfully!"}
    except:
        raise HTTPException(status_code=401)

@router.post("/login", status_code=200)
async def sign_in(formData: SignIn):
    user_info = formData.__dict__
    db_response = dynamoDB_handler.get_user_info(user_info['email'])
    try:
        pass_verification = dynamoDB_handler.verify_password(user_info['password'],db_response['Items'][0]['password'])
        if pass_verification:
            del db_response['Items'][0]['password']
            return {"message":"Correct credentials","user_info":db_response['Items']}
        else:
            raise HTTPException(status_code=401,detail="Wrong credentials.")
    except Exception as e:
        raise HTTPException(status_code=500)
