"use client";
import Image from "next/image";
import profile from '../public/images/profile/profile.png'
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";
import TransistionEffect from "./components/TransistionEffect";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-between p-4 md:p-24 md:flex-row">
      <TransistionEffect />
      <div className="w-full py-10 md:px-20 md:w-1/2">
        <Image src={profile} alt="teja" className="w-full h-auto" />
      </div>
      <div className="w-full px-4 flex flex-col md:w-1/2">
        <AnimatedText text="Hi, I'm" className="text-5xl text-left md:text-6xl" />
        <TypeAnimation
      sequence={[
        'Sai Santhosh Pothapragada',
        1000,
        'CyberSecurity Champion',
        1000,
        'Team Leader',
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-5xl text-left md:text-6xl"
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
        <p className="font-medium mt-4">Safeguarding the digital world, one line of code at a time.</p>

        <div className="flex items-center self-start mt-2">
          <Link href="/SKTReact1.pdf" target="_blank" download={true}
            className="flex items-center bg-black text-white 
            font-semibold border-solid border-2 border-transparent border-black rounded-full px-6 py-2
            hover:bg-white hover:text-black mr-2 hover:border-black">
            Resume
            <LinkArrow className="w-6 ml-2" />
          </Link>
          <Link href="mailto:teja.pothapragada@gmail.com" target="_blank"
          className="ml-4 text-lg font-medium capitalize text-black underline">Contact</Link>
        </div>
      </div>
    </div>
  );
}
