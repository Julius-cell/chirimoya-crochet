import React from "react";
import "./at-image.css";

interface AtImageProps {
  urlAction: string;
  title: string;
  media: any;
  altText: string;
}

const Atimage: React.FC<AtImageProps> = ({
  urlAction,
  altText,
  media,
  title,
}) => {
  return (
    <a href={urlAction} className="flex justify-center items-center">
      <img alt={altText} src={media} title={title} className="alt-image object-center object-contain max-w-full" />
    </a>
  );
};

export default Atimage;
