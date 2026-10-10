import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotos = async () => {
  const res = await fetch("https://pixgen-pearl.vercel.app/data.json");
  const photos = await res.json();
  return (
    <div className="container mx-auto py-5">
      <div className="grid grid-cols-4 gap-5">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotos;
