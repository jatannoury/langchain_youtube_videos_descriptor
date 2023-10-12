from app.models.YoutubeVideoDiscussion import YoutubeVideoDiscussion
from app.tools.youtube_videos_assistant import create_vector_db_from_youtube_url, get_response_from_query
from fastapi import  APIRouter,HTTPException,Response

router = APIRouter()

@router.get("/youtube_video_discussion", status_code=200)
async def youtube_video_discussion(data:YoutubeVideoDiscussion):
    try:
        db = create_vector_db_from_youtube_url(data.video_url)
        return {
            "message":"success",
            "response": get_response_from_query(db, data.query, k=4)
        }
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500)
