import React from "react";

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center m-1 md:m-0 p-4 border border-[#D3D3D399] hover:shadow-md transition-shadow">
      <span className="text-lg font-medium p-2">{icon}</span>
      <span className="text-lg font-medium p-2">{title}</span>
    </div>
  );
};

export default FeatureCard;
