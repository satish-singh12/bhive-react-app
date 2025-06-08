import React from "react";

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col bg-[#ffff] h-[80px]  w-[154px] md:w-[300px] md:flex-row items-center justify-center md:justify-start text-center md:text-left m-1 md:m-0">
      <span className="text-sm md:text-md h-[28px] md:h-[auto] w-[28px] md:w-[auto] font-medium md:p-1">
        {icon}
      </span>
      <span className=" text-[14px] md:text-md font-medium mt-2 md:p-1">
        {title}
      </span>
    </div>
  );
};

export default FeatureCard;
