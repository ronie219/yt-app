import VideoItem from "./VideoItem"

const VideoList = ({videos,onClickFunc}) => {
    const List = videos.map( video => {
        return (
            <div className="ui relaxed divided list">
               <VideoItem key = {video.id.videoId}  video={video} onClickFunc={onClickFunc}/>
            </div>
            )
    })
    return <div>{List}</div>
}

export default VideoList