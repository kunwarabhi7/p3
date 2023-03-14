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
        <BackgroundCircle
         />
         <img src='https://pbs.twimg.com/profile_images/1634229831000027136/SGHVSziK_400x400.jpg' className="rounded-full mx-auto relative h-32 w-32" />
      <p>
        {text}
        <Cursor cursorColor="red" />
      </p>
    </div>
  );
};

export default Hero;
