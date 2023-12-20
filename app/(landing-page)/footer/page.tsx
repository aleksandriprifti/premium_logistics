import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <div>
      <section className="hidden md:flex flex-col py-20 justify-between bg-[#3a3b3c]">
        <div className="flex justify-between space-x-20 text-center text-white px-80">
          <div className="">©2024 Bird, Inc. All rights reserved.</div>
          <div>
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>Terms & Conditions</div>
          <div className="flex space-x-2">
            <div className="p-2 bg-black rounded-full ">
              <Twitter className="w-6 h-6 text-white" />
            </div>
            <div className="p-2 bg-black rounded-full">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div className="p-2 bg-black rounded-full">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <div className="p-2 bg-black rounded-full">
              <Facebook className="w-6 h-6 text-white" />
            </div>
            <div className="p-2 bg-black rounded-full">
              <Youtube className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
