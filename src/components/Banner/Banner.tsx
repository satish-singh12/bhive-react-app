import React, { useRef, useEffect } from "react";

const Banner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure autoplay works with muted audio (browser requirements)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Required for autoplay in most browsers
    }
  }, []);

  return (
    <section className="pt-[90px] pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-[58px] font-bold leading-none tracking-tight">
              Host your meeting with world-class amenities. Starting at{" "}
              <span className="text-[#F2B304]">₹199/-!</span>
            </h1>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-[300px] h-[300px] md:w-[388px] md:h-[388px] bg-gray-200 mix-blend-multiply">
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <span className="text-gray-500">
                  <video
                    className="w-full max-w-3xl rounded-lg shadow-lg"
                    controls
                    autoPlay
                    loop
                    muted
                    poster="/src/assets/poster.jpg"
                  >
                    <source
                      src="/assets/Coworking video.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
