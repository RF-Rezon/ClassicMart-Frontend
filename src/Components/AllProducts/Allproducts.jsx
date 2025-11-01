import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Allproducts = () => {
  const { allProducts } = useContext(AuthContext);

  return (
    <div>
      <div className="min-h-screen w-full max-w-[1920px] mx-auto bg-[#090504]">
        <div className="pt-10 md:pt-16 text-center">
          <p className="text-5xl text-center text-white inline-block mt-10 mb-5 ">
            Watches You Love
          </p>
        </div>
        <div className=" flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 place-items-center py-10">
            {allProducts?.map((singleWatch) => (
              <div
                key={singleWatch?._id}
                data-aos="fade-right"
                data-aos-duration="700"
                className="card bg-base-100 shadow-sm m-8 md:w-[90%] w-[70%] backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl hover:scale-[1.02] transition-transform duration-300 md:max-h-[650px] max-h-[500px]"
              >
                <figure>
                  <img src={singleWatch?.images[0]} alt="img" />
                </figure>
                <div className="card-body text-white">
                  <div className="w-full flex items-center justify-between">
                    <h2 className="card-title ">{singleWatch?.name}</h2>
                    <h3 className="card-title"> {singleWatch?.price}</h3>
                  </div>
                  <p className="font-semibold">{singleWatch?.vendor}</p>
                  <p className="line-clamp-3">
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts card component has a
                    figure, a body part, and inside.
                  </p>
                  <div className="card-actions justify-end mt-5">
                    <Link
                      to={`/singleProduct/${singleWatch._id}`}
                      className="btn btn-primary bg-[#826946] text-white text-sm hover:bg-[#a17f52] transition duration-500 outline-none border-none"
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
