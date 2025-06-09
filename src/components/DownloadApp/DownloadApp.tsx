import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import { Link, Links } from "react-router-dom";

const DownloadApp: React.FC = () => {
  return (
    <ContainerWrapper>
      {/* Section Header */}
      <div className="w-full h-[45px] text-2xl md:text-3xl my-6 flex items-center justify-between">
        <h2 className="font-bold text-[#263238]">Download our app now</h2>
        <div className="md:hidden">
          <svg
            width="25"
            height="8"
            viewBox="0 0 25 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
              fill="#FFBB00"
            />
          </svg>
        </div>
      </div>

      {/* Card Section */}
      <div className="min-h-[150px] relative">
        <div className="hidden md:block">
          <div className="absolute w-full bottom-0 md:-left-[3%] lg:-left-[7%] md:w-1/2 flex justify-center ">
            {/* Phone 1 - Left Image */}
            <img
              src="/static_assets/phone1.png"
              alt="Phone 1"
              className="w-[120px] md:w-[180px] rounded-t-xl relative z-20 -mr-6 md:-mr-10"
            />

            {/* Phone 2 - Right Image, Lowered */}
            <img
              src="/static_assets/phone2.png"
              alt="Phone 2"
              className="w-[120px] md:w-[180px] ml-[22px] mt-[20px] rounded-t-xl relative z-10"
            />
          </div>
        </div>
        <div className="bg-[#ffff] md:h-[230px] sm:mt-[22%] md:mt-[18%] lg:mt-[16%] xl:mt-[13%] md:my-6 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6 relative">
          {/* App Image(s) */}
          <div className="block md:hidden w-full md:w-1/2">
            <div className="flex justify-center">
              {/* Phone 1 - Left Image */}
              <img
                src="/static_assets/phone1.png"
                alt="Phone 1"
                className="w-[120px] md:w-[180px] rounded-t-xl relative z-20 -mr-6 md:-mr-10"
              />

              {/* Phone 2 - Right Image, Lowered */}
              <img
                src="/static_assets/phone2.png"
                alt="Phone 2"
                className="w-[120px] md:w-[180px] ml-[22px] mt-[20px] rounded-t-xl relative z-10"
              />
            </div>
          </div>

          {/* Text & Buttons */}
          <div className="text-center md:text-left md:pr-16 w-full md:w-1/2 sm:ml-[50%] md:ml-[52%] lg:ml-[38%]">
            <p className="text-gray-600 mb-4 hidden md:block">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="flex justify-content-center md:justify-start gap-2">
              <a
                href="https://play.google.com/store/games?hl=en&pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/static_assets/googleplaystore.png"
                  alt="Google Play"
                  className="h-12"
                />
              </a>
              <a
                href="https://www.apple.com/in/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/static_assets/applepaystore.png"
                  alt="App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default DownloadApp;
