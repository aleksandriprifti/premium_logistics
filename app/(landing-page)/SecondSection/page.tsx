"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { useState } from "react";

const tabs = [
  {
    name: "Marketing Teams",
    title: "Deliver impactful marketing strategies",
    feature1: "Campaign planning",
    feature2:
      "Help teams quickly refocus and reprioritize work as goals change.",
    feature3: "Automate processes for approvals",
    image: "/images/tab-1.webp",
  },
  {
    name: "IT Teams",
    title: "Automate and streamline IT requests",
    feature1: "Reduce digital friction for better team velocity",
    feature2: "Track and manage work across teams",
    feature3: "Automate processes for approvals",
    image: "/images/tab-2.webp",
  },

  {
    name: "Operations Teams",
    title: "Drive operational efficiency",
    feature1: "Track work and see progress in real time",
    feature2: "Standardize and automate processes",
    feature3: "Unblock teams to hit revenue goals",
    image: "/images/tab-3.webp",
  },
  {
    name: "Project Management",
    title: "Manage projects more efficiently",
    feature1: "Track work and see progress in real time",
    feature2: "Standardize and automate processes",
    feature3: "Track resources, goals and progress in one place",
    image: "/images/tab-4.webp",
  },
  {
    name: "Strategic Planning",
    title: "Align teams to execute winning strategies",
    feature1: "Track work and see progress in real time",
    feature2: "Set annual plans to deliver results",
    feature3: "See real-time insights to stay on track and on budget",
    image: "/images/tab-1.webp",
  },
];

const SecondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-10 md:py-20"
    >
      <div className="flex items-center justify-center">
        <div
          style={{
            transform: `translateY(${isInView ? 0 : 100}px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="border-b md:flex md:space-x-20 md:py-10"
        >
          <div className="space-y-10">
            <div className="text-3xl">
              80% of Fortune 100 companies use Bird
            </div>
            <div className="flex items-center space-x-8 text-xl hover:text-blue-500">
              See how customers use Bird
              <ArrowRight className="w-6 h-6 ml-4" />
            </div>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid items-center justify-center grid-cols-2 py-10 md:flex md:space-x-10 "
          >
            <Image
              src="/images/logo/logo-5.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/logo-13.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/logo-8.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/logo-9.svg"
              width={150}
              height={150}
              alt="logo"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="hidden py-20 pt-10 text-4xl md:text-6xl md:block"
      >
        See how teams use Bird
      </motion.div>
      <div></div>

      <div className="items-center justify-center hidden md:flex ">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`
        flex 
        justify-center 
        items-center 
        space-x-10
        w-60
        ${
          activeTab === tab
            ? "border-b-4 pt-2 border-gray-500 text-gray-800"
            : "text-muted-foreground"
        }
        
        `}
            onClick={() => setActiveTab(tab)}
            style={{ cursor: "pointer" }}
          >
            <div className="flex items-center justify-center w-20 h-20 text-3xl text-center">
              <div className="">{tab.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Display content based on the active tab */}
      <div className="hidden pt-10 md:block">
        {activeTab && (
          <div className="flex justify-center">
            <div
              style={{ height: "525px", width: "700px" }}
              className="flex-col p-10 bg-gray-200 rounded-md"
            >
              <p className="py-10 text-4xl underline border-b ">
                {activeTab.title}
              </p>
              <div className="items-center justify-center space-y-10">
                <ul className="flex space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-500" />

                  <li>{activeTab.feature1}</li>
                </ul>
                <ul className="flex space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-500" />

                  <li>{activeTab.feature2}</li>
                </ul>
                <ul className="flex space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-500" />

                  <li>{activeTab.feature3}</li>
                </ul>
              </div>
            </div>

            <div
              style={{ height: "525px", width: "700px" }}
              className="flex items-center justify-center rounded-md bg-gradient-to-r from-gray-400 to-gray-100"
            >
              <Image
                src={activeTab.image}
                width={530}
                height={500}
                alt="logo"
                className="rounded-md "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondSection;
