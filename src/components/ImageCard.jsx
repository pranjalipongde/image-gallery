import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="relative group overflow-hidden rounded-sm shadow-lg">
      <img
        src={image.download_url}
        alt={image.author}
        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm flex justify-between items-center">
        <span>{image.author}</span>
        <a
          href={image.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-500"
        >
          View Original
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
