import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import PhotoCard from "./PhotoCard";

const TopGeneration = async () => {
  const res = await fetch("https://pixgen-pearl.vercel.app/data.json");
  const photos = await res.json()
    const topPhotos = photos.slice(0, 8)
    return (
        <div>
            <h1 className="text-2xl font-bold my-5">Top Generations</h1>

            <div className="grid grid-cols-4 gap-5">
                {topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
            </div>
        </div>
    );
};

export default TopGeneration;
