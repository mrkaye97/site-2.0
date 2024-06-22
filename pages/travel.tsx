import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";
import { imageRoot } from "@/src/common/images";

export default function TravelPhotos({
  imageFilenames,
}: {
  imageFilenames: string[];
}) {
  return (
    <>
      <div className="text-xl font-bold text-seafoam-green my-4">
        Sometimes I go places. When I do, I like taking pictures. These are some
        of my favorites.
      </div>
      <div className="flex flex-wrap justify-center items-center space-y-4 mb-16">
        {imageFilenames.map((el: string) => (
          <div
            key={el}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2"
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                width={600}
                height={400}
                alt={el}
                src={imageRoot + `travel/${el}`}
              />
            </div>
          </div>
        ))}
      </div>
    </>
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
