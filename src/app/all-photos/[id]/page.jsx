import {Button, Card, CloseButton} from "@heroui/react";
import React from "react";
import { BiDownload } from "react-icons/bi";

const DetailsPage = async ({ params }) => {
  const res = await fetch("https://pixgen-pearl.vercel.app/data.json");
  const photos = await res.json();
  const { id } = await params;
  const detailApps = photos.find((photo) => photo.id === Number(id));
  console.log(detailApps);
  return (
    <div className="container mx-auto my-5">
      <Card className="w-full items-stretch md:flex-row">
        <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
          <img
            alt={detailApps.title}
            className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
            loading="lazy"
            src={detailApps.imageUrl}
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="pe-8">{detailApps.title}</Card.Title>
            <Card.Description>
             <span>Prompt:</span> {detailApps.prompt}
            </Card.Description>
            <CloseButton
              aria-label="Close banner"
              className="absolute end-3 top-3"
            />
          </Card.Header>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">
                {detailApps.model}
              </span>
              <span className="text-xs text-muted">
                {detailApps.createdAt}
              </span>
            </div>
            <Button className="w-full sm:w-auto" variant="outline"><BiDownload />{detailApps.downloads}</Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default DetailsPage;
