import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="min-h-[82vh] bg-customGold flex flex-col">
        <div className="flex-[0.7] flex justify-center items-end">
          <Link
            to="/"
            className="text-[18px] md:text-[26px] font-[700] tracking-[-0.6px] leading-[24px]; text-white pt-16 cursor-pointer"
          >
            Classicmart
          </Link>
        </div>
        <div className="flex-[0.6] flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-[47%] md:mx-auto gap-8 md:py-[67px] py-[40px]">
            <div>
              <ul className="text-center space-y-1.5 text-white">
                <li className="mb-4 t-1 text-[#ffffffbe] text-[#2b2b2b]">
                  Sitemap
                </li>
                <li className="t-4 cursor-pointer text-[#2b2b2b]">About</li>
                <li className="t-4 cursor-pointer text-[#2b2b2b]">Projects</li>
                <li className="t-4 cursor-pointer text-[#2b2b2b]">News</li>
                <li className="t-4 cursor-pointer text-[#2b2b2b]">Contact</li>
              </ul>
            </div>
            <div>
              <ul className="text-center space-y-1.5 text-white">
                <li className="mb-4 t-1 text-[#ffffffbe] text-[#2b2b2b]">
                  Socials
                </li>
                <li className="t-4 cursor-pointer text-[#2b2b2b]">Facebook</li>
                <li className="t-4 cursor-pointer text-[#2b2b2b]">Instagram</li>
                <li className="t-4 cursor-pointer text-[#2b2b2b]">LinkedIn</li>
                <li className="t-4 cursor-pointer text-[#2b2b2b]">Twitter</li>
              </ul>
            </div>
            <div>
              <ul className="text-center space-y-1.5 text-white">
                <li className="mb-4 t-1 text-[#ffffffbe] text-[#2b2b2b]">
                  More
                </li>
                <li className="t-4 cursor-pointer text-[#2b2b2b]">License</li>
                <li className="t-4 cursor-pointer text-[#2b2b2b]">Grainient</li>
                <li className="t-4 cursor-pointer text-[#2b2b2b]">Inspirux</li>
                <li className="t-4 cursor-pointer text-[#2b2b2b]">Store</li>
              </ul>
            </div>
          </div>
          <div>
            <hr className="text-[#ffffffbe] h-[0.5px] w-[93%] mx-auto" />
            <div className="flex-center h-[70px] w-full">
              <p className="t-1 text-center text-[#ffffffbe] text-[#2b2b2b]">
                © 2025 Classicmart - All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
