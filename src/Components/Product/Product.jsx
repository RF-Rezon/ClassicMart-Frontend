import axios from "axios";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
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
    axios.post(
      `${webUrl}/addtocart`,
      cartItem,
      {
        "Content-Type": "application/json",
      }
    ).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Ya!..",
          text: `Cart added successful.`,
        }),
          setLoading(false)
      }
    }).catch((err)=> {
      Swal.fire({
        icon: "error",
        title: "Oops!..",
        text: `Cart added problem`,
      }),
        setLoading(false)
        navigate("/");
    })
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

  const handleWishlist =()=> {
    navigate("/wishlist");
  }
  
  return (
    <>
      <div className="min-h-screen">
        <div className="h-[265px] w-full relative">
          <div className="w-full h-full absolute opacity-10">
            <img
              src={singleProduct?.images?.[0]}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="text-center space-y-4 absolute top-[50%] z-30 w-full mx-auto">
            <p className="text-4xl font-medium tracking-widest font-playfair ">
              {singleProduct.name}
            </p>
            <p className="text-lg font-normal italic">
              Most Classical Watch From Us
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row w-full bg-custonBlackBg pt-10 pb-20">
          <div
            className="flex items-center justify-center  basis-[50%]"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <motion.div className="w-4/6 h-4/6 cursor-move ml-6">
              <motion.img
                src={
                  color
                    ? singleProduct?.images?.[0]
                    : singleProduct?.images?.[1]
                }
                className="w-full h-full object-cover"
                alt=""
                drag
              />
            </motion.div>
          </div>
          <div
            className="flex items-center justify-center basis-[50%]"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <div className="w-full">
              <p className="text-4xl font-medium text-white pb-12 font-playfair text-center">
                {singleProduct?.name}
              </p>
              <div className="pb-2">
                <form
                  className="flex flex-col items-center space-y-10"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className=" w-[50%] mx-auto text-white text-lg font-medium space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="py-2 font-semibold">Price</label>
                      <label className="py-2 font-semibold text-customGold">
                        {singleProduct?.price}
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="py-2 font-semibold">Vendor</label>
                      <label className="py-2">{singleProduct?.vendor}</label>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="py-2 font-semibold">Type</label>
                      <label className="py-2">{singleProduct?.type}</label>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="py-2 font-semibold">Color</label>
                      <div className="join">
                        {singleProduct?.colors?.map((color, index) => (
                          <input
                            key={index}
                            className="join-item btn"
                            type="radio"
                            name="options"
                            aria-label={color}
                            onClick={() => colorHandler(index)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="py-2 font-semibold">Size</label>
                      <div className="join join-vertical md:join-horizontal">
                        {singleProduct?.sizes?.map((size, index) => (
                          <input
                            key={index}
                            className="join-item btn"
                            type="radio"
                            name="options"
                            aria-label={size}
                            value={size}
                            {...register("size", { value: size })}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="py-2 font-semibold">Total</label>
                      <label className="py-2 font-semibold text-green-500">
                        {singleProduct?.price}
                      </label>
                    </div>
                  </div>
                  <input
                    disabled={!user}
                    type="submit"
                    className="uppercase w-[200px] mx-auto py-3 my-4 bg-buttonBg font-medium  font-playfair border-b-[3px] border-b-customGold text-white text-sm hover:bg-customGold transition duration-500"
                    value={user ? "Add To Cart" : "No User - Disabled"}
                  />
                </form>
              </div>
              <div className="flex items-center justify-center">
              <button onClick={handleWishlist} className="uppercase w-2/3 py-3 my-4 border-b-customGold text-white px-4 bg-buttonBg font-medium font-playfair border-b-[3px] text-sm hover:bg-customGold transition duration-500">
                  Watch wishlist
                </button> 
              </div>
              <a href="mailto:info@classicit.com.bd">
                <p className="text-customGray font-semibold text-xl underline mt-10 text-center">
                  Let us know abour your query!
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
