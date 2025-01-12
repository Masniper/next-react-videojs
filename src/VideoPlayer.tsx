import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface VideoPlayerProps {
  options: videojs.PlayerOptions;
  onReady?: (player: videojs.Player) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ options, onReady }) => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<videojs.Player | null>(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current?.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      }));
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay ?? false);
      player.src(options.sources ?? []);
    }
  }, [options]);

  useEffect(() => {
    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoPlayer;
