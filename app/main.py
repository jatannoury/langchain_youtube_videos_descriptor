import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import routers

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(routers['users'], prefix='/users')

@app.get("/")
def ping():
    return {"message": "Ok"}

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
