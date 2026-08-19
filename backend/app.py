import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()
app = FastAPI(title="Newbiton Demo API")

origins=[x.strip() for x in os.getenv("FRONTEND_ORIGIN","http://localhost:5173").split(",") if x.strip()]
app.add_middleware(CORSMiddleware,allow_origins=origins,allow_credentials=True,allow_methods=["*"],allow_headers=["*"])

class TodoCreate(BaseModel):
    text: str

todos=[{"id":1,"text":"Git branch 만들어보기"},{"id":2,"text":"Pull Request 올려보기"}]

@app.get("/health")
def health():
    return {"status":"ok"}

@app.get("/api/todos")
def get_todos():
    return todos

@app.post("/api/todos", status_code=201)
def create_todo(todo:TodoCreate):
    item={"id":len(todos)+1,"text":todo.text}
    todos.append(item)
    return item
