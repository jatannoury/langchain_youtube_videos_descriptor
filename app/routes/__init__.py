from app.routes import users
from app.routes.ml_models import langchain
routers={
    "users":users.router,
    "langchain": langchain.router
}