import { promises as fs } from "fs";
import path from "path";
import React from "react";
import Image from "next/image";
import { imageRoot } from "@/src/common/images";

export default function GalleryPage({
  imageFilenames,
}: {
  imageFilenames: string[];
}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 mb-16">
      {imageFilenames.map((el: string) => (
        <Image
          width={800}
          height={600}
          alt={"alt"}
          src={imageRoot + `travel/${el}`}
          key={el}
        />
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
