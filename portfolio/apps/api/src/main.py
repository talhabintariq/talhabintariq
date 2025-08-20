from fastapi import FastAPI

app = FastAPI(title="Talha API", version="0.1.0")

@app.get("/v1/healthz")
async def healthz():
    return {"ok": True}

@app.get("/")
async def root():
    return {"message": "API is running"}
