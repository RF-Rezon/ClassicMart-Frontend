import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { AuthContext } from "../../Context/AuthContext";

const Wishlist = () => {
  const { webUrl, user } = useContext(AuthContext);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`${webUrl}/wishlist`, fetcher);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) setItems(data);
  }, [data, error, isLoading]);

  const currentUserCart = items?.filter(
    (item) => item?.userMail === user?.email
  );
  const totalWishlistPrice = currentUserCart?.reduce(
    (acc, cart) => acc + cart.total,
    0
  );

  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center px-4 sm:px-6 md:px-10">
      {/* ✅ Header */}
      <div className="pt-16 text-center w-full">
        <span className="relative inline-block text-3xl sm:text-4xl md:text-5xl text-center text-white mt-10 mb-5 px-3 py-2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.5, ease: "easeIn" }}
            className="relative z-10"
          >
            Your Wishlist
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

      {/* ✅ Table Section */}
      <div className="w-full flex justify-center py-10 my-10">
        <div className="w-full md:w-5/6 overflow-x-auto shadow-sm border border-[#ddd]">
          <table className="table w-full border-separate border-spacing-0">
            {/* Table Head */}
            <thead className="bg-[#f6f6f6] border-b-2 border-[#555555]">
              <tr>
                <th className="text-sm sm:text-base font-semibold text-customRed text-left p-3 pl-6">
                  Product
                </th>
                <th className="text-sm sm:text-base font-semibold text-customRed text-left p-3">
                  Vendor
                </th>
                <th className="text-sm sm:text-base font-semibold text-customRed text-left p-3">
                  Color
                </th>
                <th className="text-sm sm:text-base font-semibold text-customRed text-left p-3">
                  Size
                </th>
                <th className="text-sm sm:text-base font-semibold text-customRed text-left p-3">
                  Price
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {currentUserCart?.length > 0 ? (
                currentUserCart.map((cart) => (
                  <tr
                    key={cart?._id}
                    className="border-t border-b border-[#555555] hover:bg-[#f9f9f9] transition-colors"
                  >
                    <td className="p-3 pl-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-md overflow-hidden border border-[#ddd]">
                          <img
                            src={cart?.image}
                            alt={cart?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-semibold text-black">
                            {cart?.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="badge bg-customRed border-2 border-white p-3 badge-md font-medium text-white">
                        {cart?.vendor}
                      </span>
                    </td>
                    <td className="p-3 text-sm sm:text-base font-semibold text-black">
                      {cart?.color}
                    </td>
                    <td className="p-3 text-sm sm:text-base font-semibold text-black">
                      {cart?.size}
                    </td>
                    <td className="p-3 text-sm sm:text-base font-semibold text-black">
                      {cart?.total}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-10 text-[#666] font-medium"
                  >
                    No items in your wishlist 😢
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full md:w-5/6 flex items-center justify-end space-x-4">
      {/* ✅ Total Box */}
      <div className="text-white bg-customRed px-3 py-2 flex items-center justify-between w-[200px] sm:w-[250px] mb-16 border-2 border-customRed">
        <p className="p-2 text-start font-semibold text-base sm:text-lg">
          Total:
        </p>
        <p className="text-white font-semibold text-base sm:text-lg">
          {totalWishlistPrice?.toFixed(2) || "0.00"}
        </p>
      </div>

      {/* ✅ Checkout Button */}
      {currentUserCart?.length > 0 && (
        <button
          onClick={() => navigate("/checkout")}
          className="hover:text-white bg-white text-black border-2 border-customRed hover: hover:bg-customRed px-3 py-2 flex items-center justify-between w-[200px] sm:w-[250px] mb-16 transition-all"
        >
          <p className="p-2 text-start font-semibold text-base sm:text-lg">Proceed to Checkout</p>
        </button>
      )}
      </div>
    </div>
  );
};

export default Wishlist;
