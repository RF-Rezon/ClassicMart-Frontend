import { motion } from "framer-motion";
import { useContext, useEffect, useMemo, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import ProductSkeleton from "./Schelaton";

const Allproducts = () => {
  const { allProducts } = useContext(AuthContext);

  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allProducts) {
      setLoading(false);
    }
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    let data = allProducts || [];

    if (searchText.trim() !== "") {
      const text = searchText.toLowerCase();

      data = data.filter(
        (item) =>
          item.name.toLowerCase().includes(text) ||
          item.vendor.toLowerCase().includes(text) ||
          item.description?.toLowerCase().includes(text) ||
          item.colors?.some((c) => c.toLowerCase().includes(text))
      );
    }

    if (sortType === "low-high") {
      data = [...data].sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      data = [...data].sort((a, b) => b.price - a.price);
    }

    return data;
  }, [searchText, sortType, allProducts]);

  return (
    <div className="min-h-screen w-full max-w-[1920px] mx-auto bg-white">
      <div className="pt-10 md:pt-16 text-center">
        <span className="relative inline-block text-5xl text-white mt-10 mb-5 px-3 py-2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.5 }}
            className="relative z-10"
          >
            Watches You Love
          </motion.span>

          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.15, delay: 0.5 }}
            className="absolute inset-0 bg-customRed origin-left"
            style={{ zIndex: 0 }}
          />
        </span>
      </div>

      <div className="md:max-w-7xl max-w-full mx-auto h-16 mt-12 flex flex-col md:flex-row items-center md:justify-between justify-center px-5 space-y-6 md:space-y-0">
        <div className="flex items-center bg-customRed px-4 rounded-md shadow-lg gap-2 w-[60%] md:w-[40%] border border-[#b6b5b5] py-3">
          <IoSearch className="h-6 w-6" fill="#ffff" />

          <input
            type="text"
            placeholder="Search by name, vendor, description..."
            className="w-full outline-none text-white bg-customRed font-light placeholder-black border-l-white border-l-2 pl-3"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="p-2 py-3 rounded-md shadow-md bg-[#f9f9f9] text-black outline-none border border-[#b6b5b5] cursor-pointer"
        >
          <option value="">Sort By</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>

      <div className="md:max-w-7xl max-w-full mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 place-items-center py-10">
          {loading
            ? allProducts.map((_, idx) => (
                <ProductSkeleton key={idx} />
              ))
            : filteredProducts?.map((singleWatch) => (
                <div
                  key={singleWatch._id}
                  className="card shadow-sm m-8 md:w-[90%] w-[70%] bg-[#f9f9f9] border-2 border-[#b6b5b5] rounded-md hover:scale-[1.02] transition-transform duration-300"
                >
                  <figure className="w-full aspect-square overflow-hidden rounded-t-xl">
                    <img
                      src={singleWatch.images[0]}
                      alt="img"
                      className="w-full h-full object-contain"
                    />
                  </figure>

                  <div className="card-body text-black">
                    <div className="w-full flex items-center justify-between">
                      <h2 className="card-title">{singleWatch.name}</h2>
                      <h3 className="card-title">{singleWatch.price}</h3>
                    </div>

                    <p className="font-semibold text-customRed">
                      {singleWatch.vendor}
                    </p>

                    <p className="line-clamp-3">{singleWatch.description}</p>

                    <div className="card-actions justify-end mt-5">
                      <Link
                        to={`/singleProduct/${singleWatch._id}`}
                        className="btn bg-customRed text-white text-sm hover:bg-[#ea0f37] transition duration-500 border-none"
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
  );
};

export default Allproducts;
