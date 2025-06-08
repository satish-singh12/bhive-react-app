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
    <section
      className="pt-[90px] sm:pb-20"
      style={{
        backgroundImage: "url('/static_assets/bgbanner.png')",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Left - Text (goes to bottom in mobile) */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-4 md:mt-1 text-center sm:text-left mx-6 md:mx-12 font-bold leading-none tracking-tight">
              Host your meeting with world-class amenities. Starting at{" "}
              <span className="text-[#F2B304]">₹199/-!</span>
            </h1>
          </div>

          {/* Right - Video (goes to top in mobile) */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-[300px] h-[300px] md:w-[388px] md:h-[388px] mix-blend-multiply">
              <div className="w-full h-full flex items-center justify-center">
                <span className="">
                  <video
                    className="w-full max-w-3xl mt-0 md:mt-28"
                    controls
                    autoPlay
                    loop
                    muted
                    poster="/static_assets/poster.jpg"
                  >
                    <source
                      src="/static_assets/Coworking video.mp4"
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
