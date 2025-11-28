import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="md:min-h-[82vh] bg-white flex flex-col border-t-2 border-t-[#555555]">
        <div className="flex-[0.7] flex justify-center items-end mt-6 md:mt-0">
          <Link
            to="/"
            className="text-[18px] md:text-[26px] font-[700] tracking-[-0.6px] leading-[24px]; text-white cursor-pointer bg-[#c40d2e] p-2 px-3 uppercase mt-6"
          >
            Classicmart
          </Link>
        </div>
        <div className="flex-[0.6] flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[47%] md:mx-auto gap-8 md:py-[70px] py-[50px]">
            <div>
              <ul className="text-center">
                <li className="mb-4 t-1 text-[#ffffffbe] text-customRed">
                  Sitemap
                </li>
                <li className="t-4 cursor-pointer text-customGray mb-3">
                  <Link
                    to="/about"
                    className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customRed after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    About
                  </Link>
                </li>
                <li className="t-4 cursor-pointer text-customGray mb-3">
                  <Link
                    to="/allProducts"
                    className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customRed after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    Products
                  </Link>
                </li>
                {/* <li className="t-4 cursor-pointer text-customGray mb-3">
                  <span className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customRed after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                    News
                  </span>
                </li> */}
                <li className="t-4 cursor-pointer text-customGray mb-3">
                  {" "}
                  <Link
                    to="/contact"
                    className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customRed after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    Contact
                  </Link>
                </li>
                <li className="t-4 cursor-pointer text-customGray mb-3">
                  <Link
                    to="/history"
                    className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customRed after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    Order History
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-center">
                <li className="mb-4 t-1 text-customRed">Socials</li>
                <li className="t-4 cursor-pointer text-customGray mb-3">
                  <Link
                    to="https://facebook.com"
                    className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customRed after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="t-4 cursor-pointer text-customGray mb-3">
                  <Link
                    to="https://instagram.com"
                    className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customRed after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    Instagram
                  </Link>
                </li>

                <li className="t-4 cursor-pointer text-customGray mb-3">
                  <Link
                    to="https://linkedin.com"
                    className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customRed after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="t-4 cursor-pointer text-customGray mb-3">
                  <Link
                    to="https://x.com"
                    className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customRed after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    X
                  </Link>
                </li>
              </ul>
            </div>
            {/* ...................... */}
          </div>
          <div>
            <hr className="text-[#ffffffbe] h-[0.5px] w-[93%] mx-auto" />
            <div className="flex justify-center items-center h-[70px] w-full">
              <p className="t-1 text-center text-[#ffffffbe] text-customGray">
                <span className="t-1 text-center text-[#ffffffbe] text-customGray">
                  © 2025 Classicmart - All rights reserved.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
