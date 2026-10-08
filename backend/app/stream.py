

from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from app.detector import detector_service

router = APIRouter()

@router.get("/video_feed")
async def video_feed():
    return StreamingResponse(
        detector_service.process_and_stream(), 
        media_type="multipart/x-mixed-replace; boundary=frame"
    )