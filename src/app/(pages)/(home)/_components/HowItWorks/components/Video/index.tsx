'use client';

import { useRef } from 'react';
import Image from 'next/image';

export default function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handleClickVideo() {
    if (!videoRef.current) return;

    videoRef.current.requestFullscreen();
    videoRef.current.play();
  }

  return (
    <>
      <div
        className="w-full h-[224px] md:w-[832px] md:h-[432px] bg-text-primary rounded-3xl flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={handleClickVideo}
      >
        <Image
          src="/images/video-thumbnail.png"
          width={832}
          height={432}
          alt="Video Thumbnail"
        />
      </div>

      <video
        ref={videoRef}
        id="video"
        controls
        preload="none"
        className="absolute top-[-1000rem] right-[-1000rem] z-[-1000]"
      >
        <source src="/videos/how-it-works-v1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
