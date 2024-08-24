import React from 'react';

interface AtButtonProps {
  text: string;
  urlAction: number;
  color: string;
}

const AtButton: React.FC<AtButtonProps> = ({ text, color, urlAction }) => {
  return (
    <button>{text}</button>
  );
};

export default AtButton;