import { RiAtLine, RiQuestionLine } from "@remixicon/react"
import { useEffect, useState } from "react"
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <div 
        className="h-[calc(100vh-82px)] justify-center relative w-fit mx-auto flex flex-col items-center gap-3 px-10 lg:justify-start lg:mt-16">
        <p className="text-center bg-neutral-200 flex gap-1 text-neutral-800 py-1 px-1 pr-4 rounded-full items-center">
            <div className="bg-gradient-to-br from-purple-900 to-purple-500 p-1 rounded-full">
                <svg className="w-3 fill-neutral-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.9996 12.0235C17.5625 12.4117 12.4114 17.563 12.0232 24H11.9762C11.588 17.563 6.4369 12.4117 0 12.0235V11.9765C6.4369 11.5883 11.588 6.43719 11.9762 0H12.0232C12.4114 6.43719 17.5625 11.5883 23.9996 11.9765V12.0235Z"></path></svg>
            </div>
            
            Coming Soon
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-extrabold bg-gradient-to-br from-zinc-50 to-zinc-400 bg-clip-text text-transparent py-1">
            Experience Events Reimagined <span className="md:hidden">with Ravolo</span> <br /> <span className="hidden md:block">Organize & Attend with Ravolo</span>
        </h1>
        <p className="max-w-[600px] text-center">
            Embrace the Web3 experience. Get ready to set up events, invite your friends, and start selling tickets - all within minutes. Coming soon with Ravolo!
        </p>

        <HeroNavigation/>
        
    </div>
  )
}

export default Hero


const HeroNavigation = () => {
    return(
        <div className="w-full flex justify-between gap-3">
            <HeroNavigationItem icon={<RiQuestionLine/>} heading="What is Ravolo?"/>
            <HeroNavigationItem icon={<RiAtLine/>} heading="Join Waitlist"/>
        </div>
    )
}

interface HeroNavigationItemProps {
    icon: React.ReactNode;
    heading: string;
}

const HeroNavigationItem = ({icon, heading}:HeroNavigationItemProps) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setCursorPosition({
      x: event.nativeEvent.offsetX - 50,
      y: event.nativeEvent.offsetY - 50
    });
  };

  useEffect(() => {
    console.log(cursorPosition);
  }, [cursorPosition]);
    

    return(
        <div onMouseMove={handleMouseMove} className="bg-neutral-900 w-1/2 rounded p-4 border border-neutral-800 overflow-hidden relative">
            {icon}
            <h2>{heading}</h2>
            <BlurredHoverCursor cursorPosition={cursorPosition}/>
        </div>
    )
}

interface BlurredHoverCursorProps{
    cursorPosition: {x: number, y: number}
}

const BlurredHoverCursor = ({cursorPosition}: BlurredHoverCursorProps) => {
    const {x,y} = cursorPosition  
    return (
      <motion.div
        className="w-20 h-20 absolute bg-neutral-800 rounded-full blur-lg"
        initial={{x,y}}
        animate={{x,y}}
      >
      </motion.div>
    );
  };
  