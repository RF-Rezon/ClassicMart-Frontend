import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Allproducts = () => {
  const { allProducts } = useContext(AuthContext);

  return (
    <div>
      <div className="min-h-screen w-full bg-customDarkBlue">
        <div className="pt-28 text-center">
          <p className="text-5xl text-center border-b-customGold border-b-4 text-white inline-block mt-10 mb-5 font-playfair">
            All Products
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 place-items-center gap-6 bg-customDarkBlue py-10 mt-10">
            {allProducts?.map((singleWatch) => (
              <div
                key={singleWatch?._id}
                data-aos="fade-right"
                data-aos-duration="700"
                className=" bg-zinc-700 flex flex-row cursor-pointer items-center rounded-sm flex-wrap justify-center w-[80%] mb-10"
              >
                <div className="basis-[55%] rounded-t-sm bg-zinc-900 hover:bg-zinc-400 transition duration-500 flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={singleWatch?.images[0]}
                    alt=""
                  />
                </div>
                <div className="basis-[45%] flex flex-col items-center flex-1 gap-y-3">
                  <p className="text-white font-medium text-2xl font-playfair py-2 pt-6">
                    {singleWatch?.name}
                  </p>
                  <p className="text-customGray font-semibold text-xl">
                    {singleWatch?.price}
                  </p>
                  <p className="text-customGray font-normal text-lg pb-6 italic">
                    {singleWatch?.vendor}
                  </p>
                  <Link to={`/singleProduct/${singleWatch._id}`}>
                    <button className="uppercase w-56 py-3 px-4 bg-buttonBg font-medium font-playfair border-b-[3px] border-b-customGold text-white text-sm hover:bg-customGold transition duration-500">
                      View Detalis
                    </button>
                  </Link>
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
