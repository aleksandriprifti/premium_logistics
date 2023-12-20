"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CardWithForm from "./_components/Card";

function FirstSection() {
  return (
    <div>
      <section className="py-10 space-y-10 md:py-20 bg-[url('/images/home.jpg')] bg-cover">
        <div className="container mx-auto text-center md:w-1/2">
          <div className="justify-center pb-10 text-6xl felx md:px-20">
            The best platform for Cross-Functional Work!
          </div>
          <p className="mb-10 text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, amet
            repudiandae. Tempore molestias facere atque perspiciatis suscipit,
            iusto id voluptatibus reprehenderit consequuntur delectus? Deserunt
            hic commodi tenetur quo sapiente quasi!
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 text-white bg-black rounded-sm">
              Get Started
            </button>
            <Link href={"/contact"} passHref>
              <button className="px-6 py-3 text-white bg-gray-500 rounded-sm">
                See how it works
              </button>
            </Link>
          </div>
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
            <p className="mb-10 text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, amet
              repudiandae. Tempore molestias facere atque perspiciatis suscipit,
              iusto id voluptatibus reprehenderit consequuntur delectus?
              Deserunt hic commodi tenetur quo sapiente quasi!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default FirstSection;
