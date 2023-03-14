import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "HI , I am Abhishek",
      "Guy Who Loves to Code.tsx",
      "<Button Follow me ON TWITEER />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 overflow-hidden text-center items-center justify-center ">
      <BackgroundCircle />
      <img
        src="https://pbs.twimg.com/profile_images/1634229831000027136/SGHVSziK_400x400.jpg"
        className="rounded-full mx-auto relative h-32 w-32"
      />
      <h2 className="text-sm text-gray-500 tracking-[12px] pb-2">
        Front End Web Devloper
      </h2>
      <p className="text4xl lg:text-5xl font-semibold scoll-px-10">
        {text}
        <Cursor cursorColor="red" />
      </p>
      <div className="z-50">
        <Link href='#about'>
        <button className="button">About</button>
        </Link>
        <Link href='#experience'>

        <button className="button">Experience</button>
        </Link>
        <Link href='#skills'>
        <button className="button">Skulls</button>
        </Link>
        <Link href='#projects'>

        <button className="button">Project</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
