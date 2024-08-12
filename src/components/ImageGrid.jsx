import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";

const ImageGrid = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=15`
      );
      const data = await res.json();
      setImages((prevImages) => [...prevImages, ...data]);
      setLoading(false);
    };
    fetchImages();
  }, [page]);

  const loadMoreImages = () => {
    setPage(page + 1);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8 py-4">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
      <div className="col-span-full text-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <button
            onClick={loadMoreImages}
            className="px-4 py-2 bg-[#4E31AA] text-white shadow-2xl hover:bg-[#3A1078]"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageGrid;
