import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Allproducts = () => {
  const { allProducts } = useContext(AuthContext);

  return (
    <div>
      <div className="min-h-screen w-full max-w-[1920px] mx-auto bg-[#ffffff]">
        <div className="pt-10 md:pt-16 text-center">
           <span className="relative inline-block text-5xl text-center text-white mt-10 mb-5 px-3 py-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15, delay: 0.5, ease: "easeIn" }}
                  className="relative z-10"
                >
                  Watches You Love
                </motion.span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.15, delay: 0.5, ease: "easeIn" }}
                  className="absolute inset-0 bg-customRed origin-left"
                  style={{ zIndex: 0 }}
                />
              </span>
        </div>
        <div className=" flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 place-items-center py-10">
            {allProducts?.map((singleWatch) => (
              <div
                key={singleWatch?._id}
                data-aos="fade-right"
                data-aos-duration="700"
                className="card shadow-sm m-8 md:w-[90%] w-[70%] backdrop-blur-xl bg-[#f9f9f9] border-2 border-[#b6b5b5] rounded-md hover:scale-[1.02] transition-transform duration-300"
              >
                <figure className="w-full aspect-square overflow-hidden rounded-t-xl">
                  <img 
                    src={singleWatch?.images[0]} 
                    className="w-full h-full object-contain" 
                    alt="img" 
                  />
                </figure>
                <div className="card-body text-black">
                  <div className="w-full flex items-center justify-between">
                    <h2 className="card-title">{singleWatch?.name}</h2>
                    <h3 className="card-title"> {singleWatch?.price}</h3>
                  </div>
                  <p className="font-semibold text-customRed">{singleWatch?.vendor}</p>
                  <p className="line-clamp-3">
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts card component has a
                    figure, a body part, and inside.
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <Link
                      to={`/singleProduct/${singleWatch._id}`}
                      className="btn btn-primary bg-customRed text-white text-sm hover:bg-[#ea0f37] transition duration-500 outline-none border-none"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;