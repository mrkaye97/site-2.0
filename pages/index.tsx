import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faStrava,
  faUntappd,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { imageRoot } from "@/src/images";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(imageRoot);
  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen py-24 px-8 ${inter.className}`}
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <div className="text-center mb-8">
        <Image
          src={imageRoot + "headshot.jpg"}
          alt="Headshot"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <h1 className="text-3xl font-bold mt-4">
          Hi! I'm <strong>Matt</strong>
        </h1>
        <p className="text-xl mt-2">
          I'm an engineer at{" "}
          <a href="https://www.klaviyo.com" className="text-blue-600">
            Klaviyo
          </a>
        </p>
        <p className="text-xl mt-2">
          In my free time, I like to ski, read fantasy books, cook, and work on{" "}
          <a href="https://zensearch.jobs" className="text-blue-600">
            ZenSearch
          </a>
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-4 mt-4">
        <a
          href="https://github.com/mrkaye97"
          className="text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Github</span>
        </a>
        <a
          href="https://www.strava.com/athletes/16125633"
          className="text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faStrava} />
          <span className="sr-only">Strava</span>
        </a>
        <a
          href="mailto:mrkaye97@gmail.com"
          className="text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="sr-only">Email</span>
        </a>
        <a
          href="https://app.thestorygraph.com/profile/mrkaye97"
          className="text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faBook} />
          <span className="sr-only">StoryGraph</span>
        </a>
        <a
          href="https://untappd.com/user/mrkaye97"
          className="text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faUntappd} />
          <span className="sr-only">Untappd</span>
        </a>
      </div>
    </main>
  );
}
