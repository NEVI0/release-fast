'use client';

export default function Video() {
  return (
    <div className="flex w-[324px] h-[182px] md:w-[832px] md:h-[468px] bg-text-primary items-center justify-center overflow-hidden cursor-pointer border border-border">
      <video
        id="video"
        controls
        className="w-[324px] h-[182px] md:w-[832px] md:h-[468px]"
        preload="none"
        poster="/images/video-thumbnail.png"
      >
        <source src="/videos/how-it-works.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
