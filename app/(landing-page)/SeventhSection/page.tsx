//import { ArrowRight } from "lucide-react";
import Image from "next/image";

const SeventhSection = () => {
  return (
    <div className="flex flex-col md:py-20 md:p-40 p-10 bg-[#E5E4E2]  ">
      <div className="flex flex-col pb-10 space-y-6 md:px-20">
        <div className="text-xl ">Get started easily</div>
        <div className="text-4xl ">Prioritize revenue-driving work</div>
        <div className="text-xl ">
          Connect what needs to get done, who is responsible, and how to get it
          done.
        </div>
      </div>
      <div className="space-y-10 md:flex md:px-20 md:space-x-10 md:space-y-0 ">
        <div className="p-8 bg-white rounded-sm">
          <Image
            src="/images/tab-1.webp"
            alt="Picture of the author"
            width={400}
            height={400}
            className=" w-96"
          />

          <div className="pt-8 text-3xl">Start with a template</div>

          <div className="flex justify-between pt-10">
            <div className="text-xl">View Templates</div>

            {/* <ArrowRight className="w-6 h-6 ml-4 " /> */}
          </div>
        </div>

        <div className="p-8 bg-white rounded-sm">
          <Image
            src="/images/tab-3.webp"
            alt="Picture of the author"
            width={400}
            height={400}
            className=" w-96"
          />

          <div className="pt-8 text-3xl">See Bird in action</div>

          <div className="flex justify-between pt-10">
            <div className="text-xl">View demo</div>

            {/* <ArrowRight className="w-6 h-6 ml-4 " /> */}
          </div>
        </div>

        <div className="p-8 bg-white rounded-sm">
          <Image
            src="/images/tab-3.webp"
            alt="Picture of the author"
            width={400}
            height={400}
            className=" w-96"
          />

          <div className="pt-8 text-3xl">Talk with our sales team</div>

          <div className="flex justify-between pt-10">
            <div className="text-xl">Contact Sales</div>

            {/* <ArrowRight className="w-6 h-6 ml-4 " /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
