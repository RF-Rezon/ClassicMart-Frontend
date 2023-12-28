import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { AuthContext } from "../../Context/AuthContext";

const Wishlist = () => {

  const { webUrl, setLoading, user } = useContext(AuthContext);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(`${webUrl}/wishlist`, fetcher);
  const [items, setItems] = useState([]);


  useEffect(() => {
    if (error) {
      console.warn("Failed to load:", error);
    }
    if (isLoading) {
    }

    if (data) {
      setItems(data);
    }
  }, [data, error, isLoading]);


  const currentUserCart = items?.filter((item) => item?.userMail === user?.email);
  const totalWishlistPrice = currentUserCart?.reduce((acc, cart) => acc + cart.total, 0);

  return (
    <div>
      <div className="bg-custonBlackBg min-h-screen w-full">
        <div className="pt-28 text-center">
          <p className="text-5xl text-center border-b-customGold border-b-4 text-white inline-block mt-10 mb-5 font-playfair">
            My Wishlist
          </p>
        </div>
        <div className="">
          <div className="py-10 my-10 text-customGray flex items-center justify-center flex-col w-full">
            <div className="overflow-x-auto w-5/6">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th className="text-base font-playfair font-semibold text-white">
                      Product
                    </th>
                    <th className="text-base font-playfair font-semibold text-white">
                      Vendor
                    </th>
                    <th className="text-base font-playfair font-semibold text-white">
                      Color
                    </th>
                    <th className="text-base font-playfair font-semibold text-white">
                      Size
                    </th>
                    <th className="text-base font-playfair font-semibold text-white">
                      Price
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                 {currentUserCart?.map(cart => (
                    <tr key={cart?._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={cart?.image}
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-base font-semibold">
                           {cart?.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-neutral border-2 border-white p-3 badge-md font-medium text-white">
                      {cart?.vendor}
                      </span>
                    </td>
                    <td className="text-sm font-semibold ">{cart?.color}</td>
                    <td className="text-sm font-semibold ">{cart?.size}</td>
                    <td className="text-sm font-semibold text-green-500">
                      {cart?.total}
                    </td>
                  </tr>
                 )) }
                </tbody>
              </table>
            </div>
            <div className="self-end mr-[345px]">
                <p className="p-2 py-3 border-b-2 border-b-customGray text-start font-playfair font-medium text-lg">Total: <span className="ml-10 normal-text text-green-500 font-semibold">{totalWishlistPrice.toFixed(2)}</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
