import { promises as fs } from "fs";
import path from "path";
import React from "react";
import Image from "next/image";
import { imageRoot } from "@/src/common/images";

export default function TravelPhotos({
  imageFilenames,
}: {
  imageFilenames: string[];
}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 mb-16">
      {imageFilenames.map((el: string) => (
        <div key={el} className="rounded-lg overflow-hidden">
          <Image
            width={800}
            height={600}
            alt={"alt"}
            src={imageRoot + `travel/${el}`}
          />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const imageDirectory = path.join(process.cwd(), "/public/travel/");
  const imageFilenames = await fs.readdir(imageDirectory);

  return {
    props: {
      imageFilenames,
    },
  };
}
