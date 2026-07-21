"""The entry point to the backend"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="encscribe backend")
app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"]
)

# api endpoint for /
@app.get("/")
def root():
    return {"status": "OK"}


@app.get("/app-details")
def app_details():
    return {"content": "Encscribe: An encrypted note-taking application"}


@app.get("/username")
def get_username():
    return {"content": "Melanie"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("run:app", host="127.0.0.1", port=8000, reload=True)
