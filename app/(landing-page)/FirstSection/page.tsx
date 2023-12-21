"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CardWithForm from "./_components/Card";

function FirstSection() {
  return (
    <div className="grayscale-0 ">
      <section className="py-10 space-y-10 md:py-20 bg-[url('/images/home_3.jpg')] bg-cover  ">
        <div className="container mx-auto text-center md:w-1/2">
          <div className="justify-center pb-10 text-6xl text-white font-bold felx md:px-20 drop-shadow-lg">
            Premium Logistics
          </div>
          <p className="mb-10 text-lg md:text-xl text-white font-bold">
            Shipping goods all over the world
          </p>
          {/* <div className="flex justify-center gap-4">
            <button className="px-6 py-3 text-white bg-black rounded-sm">
              Get Started
            </button>
            <Link href={"/contact"} passHref>
              <button className="px-6 py-3 text-white bg-gray-500 rounded-sm">
                See how it works
              </button>
            </Link>
          </div> */}
        </div>
        <div className="container items-center justify-center space-y-10 md:pt-10 md:flex md:mx-auto md:space-x-10 ">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="justify-center px-10 md:px-0 md:w-1/2"
          >
            <CardWithForm />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <p className="mb-10 text-lg md:text-xl decoration-2 font-bold text-white">
              Introducing Premium Logistics, your premier partner in seamless transportation solutions. At Premium Logistics, we redefine efficiency, reliability, and innovation in logistics.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default FirstSection;
