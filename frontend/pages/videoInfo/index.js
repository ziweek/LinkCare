import React, { useEffect, useState } from "react";
import * as S from "styles/videoInfo";
import { useRouter } from "next/router";
import { useTheme } from "@nextui-org/react";

function VideoInfo() {
  const { theme } = useTheme();

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [viewPort, setViewPort] = useState();
  const [query, setQuery] = useState(router.query);
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    setQuery(() => router.query);
    setViewPort({ width: window.innerWidth, height: window.innerHeight });
    setVideoData({
      StretchandPull: {
        start: 30,
        end: 90,
      },
      ShoulderRotation: {
        start: 90,
        end: 150,
      },
      KneeStretch: {
        start: 153,
        end: 210,
      },
      Squats: {
        start: 212,
        end: 264,
      },
      HighKnees: {
        start: 390,
        end: 450,
      },
    });
  }, []);

  useEffect(() => {
    if (
      videoData[query.name] !== undefined &&
      query !== undefined &&
      viewPort
    ) {
      setLoading(false);
    }
  }, [videoData, query, viewPort]);

  return (
    <div>
      {!loading && (
        <iframe
          width={viewPort.width}
          height={(8 * viewPort.height) / 10}
          src={
            "https://www.youtube.com/embed/PWic8ckZ1q0?" +
            "start=" +
            videoData[router.query.name].start +
            "&end=" +
            videoData[router.query.name].end +
            "&playlist=PWic8ckZ1q0&autoplay=1&muted=1"
          }
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
      <S.MoveBtn
        style={{ background: theme.colors.primary.value }}
        onClick={() => router.push("camera?" + query.name)}
      >
        Let&#39;s Do it!
      </S.MoveBtn>
    </div>
  );
}

export default VideoInfo;
