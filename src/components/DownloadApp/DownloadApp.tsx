import React from "react";

const DownloadApp: React.FC = () => {
  return (
    <section className="py-20 bg-[#F2B304]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Download our app now</h2>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            App Store
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
