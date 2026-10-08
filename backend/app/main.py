from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import cv2

app = FastAPI()

# CORS Enable
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variables
rtsp_url = 0  # Default to Webcam if no RTSP connected

class RTSPConfig(BaseModel):
    username: str
    password: str
    ip: str
    port: str = "554"
    path: str = "stream2"

@app.post("/set_rtsp")
def set_rtsp_stream(config: RTSPConfig):
    global rtsp_url
    
    # Clean slash properly to avoid double slash (//)
    clean_path = config.path.strip("/")
    constructed_url = f"rtsp://{config.username}:{config.password}@{config.ip}:{config.port}/{clean_path}"
    
    print(f"Connecting to: {constructed_url}")
    
    cap = cv2.VideoCapture(constructed_url)
    if not cap.isOpened():
        raise HTTPException(status_code=400, detail="Could not connect to RTSP camera. Check credentials/IP.")
    
    cap.release()
    rtsp_url = constructed_url
    return {"status": "success", "url": constructed_url}

@app.get("/video_feed")
def video_feed():
    from fastapi.responses import StreamingResponse
    from app.detector import detector_service
    # Update detector service url dynamically if needed
    detector_service.rtsp_url = rtsp_url
    return StreamingResponse(
        detector_service.process_and_stream(),
        media_type="multipart/x-mixed-replace; boundary=frame"
    )