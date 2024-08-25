import React from "react";

interface AtButtonProps {
  text: string;
  urlAction: number;
  primaryColor: string;
  secondaryColor: string;
}

const AtButton: React.FC<AtButtonProps> = ({
  text = "Descubre la colección",
  primaryColor = "#027385",
  secondaryColor = "white",
  urlAction,
}) => {
  return (
    <button className="text-white border py-2 border-white rounded-md w-full bg-[#027385] hover:bg-white hover:text-[#027385] hover:border-[#027385] hover:scale-105 transition-all">
      {text}
    </button>
  );
};

export default AtButton;
