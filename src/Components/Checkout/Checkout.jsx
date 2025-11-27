"use client";

import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { AuthContext } from "../../Context/AuthContext";


const CheckoutPage = () => {
  const { webUrl, user } = useContext(AuthContext);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(`${webUrl}/wishlist`, fetcher);

  const [items, setItems] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (data) setItems(data);
  }, [data]);

  const currentUserCart = items?.filter((item) => item?.userMail === user?.email);
  const totalPrice = currentUserCart?.reduce((acc, cart) => acc + cart.total, 0);

  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const handleCardChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

const handlePurchase = async (e) => {
  e.preventDefault();

  if (!card.number || !card.expiry || !card.cvv) {
    alert("Please fill all card details!");
    return;
  }

  // 1) HIT BACKEND CHECKOUT API
  const response = await fetch(`${webUrl}/api/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail: user?.email,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    alert("Payment failed. Try again.");
    return;
  }

  // 2) Show success UI + confetti
  setSuccess(true);
  mutate(`${webUrl}/wishlist`);
};

  // 🎉 Fire Confetti Automatically on Success
  useEffect(() => {
    if (success) {
      const duration = 2 * 1000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 5,
          startVelocity: 20,
          spread: 180,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2,
          },
          colors: ["#C40D2E", "#FFD700", "#ffffff", "#000000"],
        });

        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }
  }, [success]);

  // --------------------- SUCCESS UI ---------------------
  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-customRed mb-6"
        >
          🎉 Congratulations! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl font-semibold text-black mb-3"
        >
          Your purchase was successful.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-customGray font-medium text-center"
        >
          Thank you for shopping with us, {user?.displayName || "User"}! ❤️  
        </motion.p>
      </div>
    );
  }

  // --------------------- CHECKOUT UI ---------------------
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="pt-16 text-center w-full mb-20">
        <span className="relative inline-block text-3xl sm:text-4xl md:text-5xl text-center text-white mt-10 mb-5 px-3 py-2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.5, ease: "easeIn" }}
            className="relative z-10"
          >
            Checkout
          </motion.span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.15, delay: 0.5, ease: "easeIn" }}
            className="absolute inset-0 bg-customRed origin-left"
          />
        </span>
      </div>

      <form
        onSubmit={handlePurchase}
        className="w-full max-w-md bg-gray-50 shadow-lg p-12 border-2 border-customRed mb-20"
      >
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={card.number}
          onChange={handleCardChange}
          className="w-full p-3 mb-4 border-2 bg-white outline-none border-customGray text-black"
          required
        />
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={card.expiry}
            onChange={handleCardChange}
            className="w-1/2 p-3 border-2 bg-white outline-none border-customGray text-black"
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={card.cvv}
            onChange={handleCardChange}
            className="w-1/2 p-3 border-2 bg-white outline-none border-customGray text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full hover:text-white text-black py-3 font-semibold bg-white hover:bg-customRed border-customRed border-2 transition-all"
        >
          Pay ${totalPrice?.toFixed(2) || "0.00"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
