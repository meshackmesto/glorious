import React, { useRef } from "react";
import "./style/video.css";
import YouTube from "react-youtube";

const VideoPlayer = ({ playState, setPlayState, videoType, videoId, videoSrc }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      {videoType === "youtube" ? (
        <YouTube
          videoId={videoId}
          opts={{
            width: "900px",
            height: "700px",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      ) : (
        <video src={videoSrc} autoPlay muted controls></video>
      )}
    </div>
  );
};

export default VideoPlayer;
