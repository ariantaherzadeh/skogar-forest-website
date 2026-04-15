"use client";

interface VideoEmbedProps {
  videoId: string;
}

export default function VideoEmbed({ videoId }: VideoEmbedProps) {
  const isPlaceholder = !videoId || videoId === "YOUR_VIDEO_ID_HERE";

  if (isPlaceholder) {
    return (
      <div className="aspect-video w-full bg-[#e0dcd3] border border-[#d4cfc4] flex flex-col items-center justify-center text-center rounded-sm">
        <svg
          className="w-14 h-14 text-[#b0a898] mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm text-[#a0998e] mb-1">Video coming soon</p>
        <p className="text-xs text-[#b8b0a4]">
          Set YOUTUBE_VIDEO_ID in src/app/page.tsx
        </p>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full rounded-sm overflow-hidden shadow-md">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title="Skógar — Reforestation in the Westfjords of Iceland"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
