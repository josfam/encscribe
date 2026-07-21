"""The entry point to the backend"""

from fastapi import FastAPI

app = FastAPI(title="encscribe backend")


# api endpoint for /
@app.get("/")
def root():
    return {"status": "OK"}


@app.get("/app-details")
def app_details():
    return {"content": "Encscribe: An encrypted note-taking application"}


@app.get("/username")
def get_username():
    return {"content": "Maria"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("run:app", host="127.0.0.1", port=8000, reload=True)
