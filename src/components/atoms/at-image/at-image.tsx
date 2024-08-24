import React from "react";
import "./at-image.css"


interface AtImageProps {
  urlAction: string;
  title: string;
  media: any;
  altText: string;
}

function Atimage(props: AtImageProps) {

  console.log(props)
  return (
    <a href={props.urlAction}>
      <img
       alt={props.altText}
       src={props.media}
       title={props.title}
       className="alt-image"/>
    </a>
  );
}

export default Atimage;
