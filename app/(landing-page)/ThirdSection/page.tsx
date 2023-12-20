"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ThirdSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 4 }}
        className="flex flex-col space-y-10 "
      >
        <div className="py-20 bg-[#097969] items-center flex flex-col space-y-10">
          <div className="flex items-start justify-start px-10 text-4xl text-white md:px-0 md:text-6xl md:pb-10 ">
            Why companies choose Bird
          </div>
          <div className="px-10 md:w-3/4">
            <div className="flex items-center justify-center py-10 space-x-10 text-2xl text-white border-t border-b md:space-x-20">
              <CheckCircle2 className="w-10 h-10 md:h-20 md:w-20 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                The only platform with goals built in
              </div>
              <div className="hidden md:w-1/2 md:block">
                See related tasks, collaborators and progress to quickly achieve
                business goals.
              </div>
            </div>
            <div className="flex items-center justify-center py-10 space-x-10 text-2xl text-white border-t border-b md:space-x-20">
              <CheckCircle2 className="w-10 h-10 md:h-20 md:w-20 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                Rated best for cross-team collaboration
              </div>
              <div className="hidden md:w-1/2 md:block">
                Bird is rated as a leader in work management by industry
                experts.
              </div>
            </div>
            <div className="flex items-center justify-center py-10 space-x-10 text-2xl text-white border-t border-b md:space-x-20">
              <CheckCircle2 className="w-10 h-10 md:h-20 md:w-20 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                Simple adoption, with less downtime
              </div>
              <div className="hidden md:w-1/2 md:block">
                Get tailored support to help your teams easily migrate existing
                data and adopt Bird.
              </div>
            </div>

            <div className="flex items-center justify-center p-6 mt-10 bg-gray-200 rounded-lg w-52">
              See how it works
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThirdSection;
