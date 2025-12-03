import axios from "axios";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const Product = () => {
  const { allProducts, setLoading, user, webUrl } = useContext(AuthContext);
  const [singleProduct, setSingleProduct] = useState([]);

  const [color, setColor] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setLoading(true);
    const sp = allProducts?.filter((sp) => sp._id === id);
    if (sp) {
      setLoading(false);
    }
    setSingleProduct(sp[0]);
  }, [id]);

  const colorHandler = (i) => {
    if (i === 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const addCart = (cartItem) => {
    axios
      .post(`${webUrl}/addtocart`, cartItem, {
        "Content-Type": "application/json",
      })
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Ya!..",
            text: `Cart added successful.`,
          }),
            setLoading(false);
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops!..",
          text: `Cart added problem`,
        }),
          setLoading(false);
        navigate("/");
      });
  };

  const onSubmit = (data, event) => {
    event.preventDefault();
    // Gather the required data from the form
    const selectedColor = color
      ? singleProduct?.colors?.[0]
      : singleProduct?.colors?.[1];
    const selectedImage = color
      ? singleProduct?.images?.[0]
      : singleProduct?.images?.[1];
    const selectedSize = data.size;
    const totalPrice = singleProduct?.price;

    // Create the object containing the required data
    const cartItem = {
      name: singleProduct?.name,
      image: selectedImage,
      price: singleProduct?.price,
      vendor: singleProduct?.vendor,
      type: singleProduct?.type,
      color: selectedColor,
      size: selectedSize,
      total: totalPrice,
      userMail: user.email,
    };

    addCart(cartItem);
  };

  const handleWishlist = () => {
    navigate("/wishlist");
  };

  return (
    <>
      <div className="min-h-screen pt-10 md:pt-16 pb-10">
        {/* 🔧 Responsive Section */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full bg-[#ffffff] min-h-screen md:h-screen pb-20">
          {/* --- LEFT IMAGE SECTION --- */}
          <div
            className="flex items-center justify-center md:justify-end basis-full md:basis-[35%] px-4 md:px-0 py-6 md:py-0"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <motion.div className="w-5/6 md:w-4/6 h-auto md:h-4/6 cursor-move">
              <motion.img
                src={
                  color
                    ? singleProduct?.images?.[0]
                    : singleProduct?.images?.[1]
                }
                className="w-full h-auto object-contain rounded-xl shadow-2xl"
                alt=""
                drag
              />
            </motion.div>
          </div>

          {/* --- RIGHT DETAILS SECTION --- */}
          <div
            className="flex items-center justify-center w-full px-10 basis-full md:basis-[65%] md:px-0"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <div className="w-full">
              <div className="flex justify-center items-center w-full mt-10 mb-14">
                <span className="relative inline-block text-3xl sm:text-4xl md:text-5xl text-center text-white px-3 py-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15, delay: 0.5, ease: "easeIn" }}
                    className="relative z-10"
                  >
                    {singleProduct?.name}
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

              <form
                className="flex flex-col items-center space-y-8 md:space-y-10"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="w-full md:w-[50%] mx-auto text-white text-base md:text-lg font-medium space-y-5 mb-5">
                  <div className="flex items-center justify-between border-b-2 border-b-[#c8c8c8]">
                    <label className="py-2 font-semibold bg-customRed px-3">
                      Price
                    </label>
                    <label className="py-2 font-semibold text-black">
                      &#36;{singleProduct?.price}
                    </label>
                  </div>

                  <div className="flex items-center justify-between border-b-2 border-b-[#c8c8c8]">
                    <label className="py-2 font-semibold bg-customRed px-3">
                      Vendor
                    </label>
                    <label className="py-2 text-black">
                      {singleProduct?.vendor}
                    </label>
                  </div>

                  <div className="flex items-center justify-between border-b-2 border-b-[#c8c8c8]">
                    <label className="py-2 font-semibold bg-customRed px-3">
                      Type
                    </label>
                    <label className="py-2 text-black">
                      {singleProduct?.type}
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="py-2 font-semibold bg-customRed px-3">
                      Color
                    </label>
                    <div className="join">
                      {singleProduct?.colors?.map((color, index) => (
                        <input
                          key={index}
                          className="join-item btn btn-sm md:btn-md"
                          type="radio"
                          name="options"
                          aria-label={color}
                          onClick={() => colorHandler(index)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="py-2 font-semibold bg-customRed px-3">
                      Size
                    </label>
                    <div className="join join-vertical md:join-horizontal">
                      {singleProduct?.sizes?.map((size, index) => (
                        <input
                          key={index}
                          className="join-item btn btn-sm md:btn-md"
                          type="radio"
                          name="options"
                          aria-label={size}
                          value={size}
                          {...register("size", { value: size })}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b-2 border-b-[#c8c8c8]">
                    <label className="py-2 font-semibold bg-customRed px-3">
                      Total
                    </label>
                    <label className="py-2 font-semibold text-black">
                      &#36;{singleProduct?.price} only
                    </label>
                  </div>
                </div>

                {/* Add to Cart */}
                <input
                  disabled={!user}
                  type="submit"
                  className="uppercase w-[200px] mx-auto py-3 my-2 bg-buttonBg font-medium border-b-[3px] border-b-customRed text-white text-sm hover:bg-customRed transition duration-500 rounded-3xl"
                  value={user ? "Add To Wishlist" : "Login To Add"}
                />
              </form>

              {/* Wishlist */}
              <div className="flex items-center justify-center">
                <Link
                  to="/wishlist"
                  onClick={(e) => {
                    if (!user) {
                      e.preventDefault(); // prevent redirect
                      Swal.fire({
                        icon: "info",
                        title: "Please Log In",
                        text: "Log in to add and view your favourites in Wishlist ⌚",
                        confirmButtonColor: "#cca471",
                      });
                    }
                  }}
                  className="uppercase w-2/3 py-3 my-3 border-b-customRed text-white px-4 bg-buttonBg font-medium border-b-[3px] text-sm hover:bg-customRed transition duration-500 rounded-3xl text-center"
                >
                  Watch Wishlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
