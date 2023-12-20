"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const images = [
  {
    src: "/images/tab-1.webp",
  },
  {
    src: "/images/tab-2.webp",
  },
  {
    src: "/images/tab-3.webp",
  },
];

const FourthSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-20 space-y-10 ">
      <div className="flex py-20 ">
        <div className="flex flex-col space-y-6 ">
          <div className="px-10 text-xl text-gray-800">
            DRIVE EFFICIENCY ACROSS TEAMS
          </div>
          <div className="px-10 text-4xl w-96">Manage complex work easily</div>
          <div className="px-10 text-xl text-gray-600">
            Connect what needs to get done, who is responsible, and how to get
            it done.
          </div>

          <div className="items-center p-10 space-y-10 md:flex md:space-x-60">
            <div className="">
              <Image
                src="/images/tab-1.webp"
                alt="Image"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Timeline</div>
              <div className="text-xl text-gray-600 w-96">
                See how work maps out over time. Manage dependent, overlapping,
                and unscheduled tasks—and create plans your team can count on.
              </div>
              <div className="flex ">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="w-6 h-6 ml-4 " />
              </div>
            </div>
          </div>
          <div className="items-center p-10 space-y-10 md:flex md:space-x-60">
            <div className="">
              <Image
                src="/images/tab-2.webp"
                alt="Image"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Boards</div>
              <div className="text-xl text-gray-600 w-96">
                Make it easy for your team to focus on tasks currently at hand.
                Define each stage of work to see what is important and where
                things are getting stuck.
              </div>
              <div className="flex ">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="w-6 h-6 ml-4 " />
              </div>
            </div>
          </div>
          <div className="items-center p-10 space-y-10 md:flex md:space-x-60">
            <div className="">
              <Image
                src="/images/tab-1.webp"
                alt="Image"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Timeline</div>
              <div className="text-xl text-gray-600 w-96">
                See how work maps out over time. Manage dependent, overlapping,
                and unscheduled tasks—and create plans your team can count on.
              </div>
              <div className="flex ">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="w-6 h-6 ml-4 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
