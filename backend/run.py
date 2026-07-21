"""The entry point to the backend"""

from fastapi import FastAPI

app = FastAPI(title="encscribe backend")




if __name__ == "__main__":
    import uvicorn

    uvicorn.run("run:app", host="127.0.0.1", port=8000, reload=True)
