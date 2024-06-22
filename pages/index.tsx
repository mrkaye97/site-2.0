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
      style={{
        margin: "0 auto",
        background: "linear-gradient(to right, #FF7F50, #fff)",
        color: "#fff",
      }}
    >
      <div className="text-center mb-8">
        <Image
          src={imageRoot + "headshot.jpg"}
          alt="Headshot"
          width={150}
          height={150}
          className="rounded-full mx-auto border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4">
          Hi! I'm <strong>Matt</strong>
        </h1>
        <p className="text-2xl mt-2">
          I'm an engineer at{" "}
          <a
            href="https://www.klaviyo.com"
            className="text-blue-300 hover:text-blue-500 transition-colors"
          >
            Klaviyo
          </a>
        </p>
        <p className="text-2xl mt-2">
          In my free time, I like to ski, read fantasy books, cook, and work on{" "}
          <a
            href="https://zensearch.jobs"
            className="text-blue-300 hover:text-blue-500 transition-colors"
          >
            ZenSearch
          </a>
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-6 mt-6">
        <a
          href="https://github.com/mrkaye97"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <span className="sr-only">Github</span>
        </a>
        <a
          href="https://www.strava.com/athletes/16125633"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FontAwesomeIcon icon={faStrava} size="2x" />
          <span className="sr-only">Strava</span>
        </a>
        <a
          href="mailto:mrkaye97@gmail.com"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <span className="sr-only">Email</span>
        </a>
        <a
          href="https://app.thestorygraph.com/profile/mrkaye97"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FontAwesomeIcon icon={faBook} size="2x" />
          <span className="sr-only">StoryGraph</span>
        </a>
        <a
          href="https://untappd.com/user/mrkaye97"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FontAwesomeIcon icon={faUntappd} size="2x" />
          <span className="sr-only">Untappd</span>
        </a>
      </div>
    </main>
  );
}
