import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function ContactPage() {
const { webUrl} = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${webUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setStatus(data.message);
      setForm({ name: "", email: "", message: "" }); 
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message");
    }
  };

  return (
    <div className="max-w-lg mx-auto py-10 px-4 text-center">
      <span className="relative inline-block text-5xl text-center text-white mt-10 mb-10 px-3 py-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15, delay: 0.5, ease: "easeIn" }}
                  className="relative z-10"
                >
                  Contact Us
                </motion.span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.15, delay: 0.5, ease: "easeIn" }}
                  className="absolute inset-0 bg-customRed origin-left"
                  style={{ zIndex: 0 }}
                />
              </span>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border-2 rounded-sm base-white-bg border-customRed text-black outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border-2 rounded-sm base-white-bg border-customRed text-black outline-none"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border-2 rounded-sm base-white-bg border-customRed text-black outline-none"
          required
        ></textarea>

        <button className="w-full bg-customRed text-white py-3 rounded">
          Send Message
        </button>

        {status && <p className="text-center mt-2 text-black">{status}</p>}
      </form>
    </div>
  );
}
