import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotos = async ({searchParams}) => {
  const {catagory} = await searchParams;
  const res = await fetch("https://pixgen-pearl.vercel.app/data.json");
  const photos = await res.json();

  const filteredPhotos = catagory ? photos.filter((photo)=>(photo.category.toLowerCase() === catagory.toLowerCase())) : photos;
  return (
    <div className="container mx-auto py-5">
      <h2 className="text-xl font-semibold">All Photos</h2>
        <Category></Category>
      <div className="grid grid-cols-4 gap-5">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotos;
