import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

// const token = localStorage.getItem("access-token");
const Register = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const { normalRegister, updateUser, webUrl, setLoading } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data?.password !== data?.confirm_password) {
      setErrorMsg("Password didn't match. Check Again");
      return;
    }
    normalRegister(data?.email, data?.password)
      .then(() => {
        updateUser(data?.name, data?.photoURL)
          .then(() => {
            axios
              .post(
                `${webUrl}/users`,
                { name: data?.name, email: data?.email },
                {
                  "Content-Type": "application/json",
                }
              )
              .then((data) => {
                if (data.data.insertedId) {
                  Swal.fire({
                    icon: "success",
                    title: "Ya!..",
                    text: `Sign up successful.`,
                  }),
                    setLoading(false)
                    navigate("/");
                }
              });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "OOps!..",
              text: `Sign up failed.`,
            });
            setLoading(false)
            navigate("/login");
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "OOps!..",
          text: `Sign up failed. Use a new email.`,
        });
        setLoading(false)
        navigate("/login");
      });
  };
  return (
    <div className="bg-custonBlackBg">
      <div className="overflow-hidden min-h-screen">
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center pb-6">
              <h1 className="text-2xl font-bold sm:text-3xl text-white font-playfair">
                REGISTER
              </h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div>
                <label className="sr-only">Name</label>
                <div className="relative">
                  <input
                    {...register("name")}
                    type="text"
                    required
                    className="w-full rounded-sm border-gray-200 text-gray-900 p-4 pe-12 text-base font-medium shadow-sm"
                    placeholder="enter your name"
                  />
                  {errors?.name && (
                    <span className="text-red-500 font-light">
                      Name is required.
                    </span>
                  )}
                  
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative">
                  <input
                    {...register("email")}
                    type="email"
                    required
                    className="w-full rounded-sm border-gray-200 text-gray-900 p-4 pe-12 text-base font-medium shadow-sm"
                    placeholder="Enter email"
                  />
                  {errors?.email && (
                    <span className="text-red-500 font-light">
                      Email field is required
                    </span>
                  )}
                  
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <input
                    {...register("password", {
                      pattern: /^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.{6,})/,
                    })}
                    type="password"
                    required
                    className="w-full rounded-sm border-gray-200 text-gray-900 p-4 pe-12 text-base font-medium shadow-sm"
                    placeholder="Enter password"
                  />
                  {errors?.password && (
                    <span className="text-red-500 font-light">
                      The password should not less than 6 characters. Use at least
                      one capital letter and special character.
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    {...register("confirm_password")}
                    className="w-full rounded-sm border-gray-200 text-gray-900 p-4 pe-12 text-base font-medium shadow-sm"
                    placeholder="Type password again"
                  />
                  {errors?.confirm_password && (
                    <span className="text-red-500 font-light">
                      Confirm Password field is required
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Photo Url
                </label>
                <div className="relative">
                  <input
                    {...register("photoURL")}
                    type="url"
                    required
                    className="w-full rounded-sm border-gray-200 text-gray-900 p-4 pe-12 text-base font-medium shadow-sm"
                    placeholder="Enter photo url"
                  />
                  {errors?.photoURL && (
                    <span className="text-red-500 font-light">
                      This field is required too
                    </span>
                  )}
                  
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white font-playfair">
                  Have Account?
                  <a className="underline ml-3" href="/login">
                    Sign In
                  </a>
                </p>
                <input
                    type="submit"
                    className="uppercase w-[200px] mx-auto py-3 my-4 bg-buttonBg font-medium  font-playfair border-b-[3px] border-b-customGold text-white text-sm hover:bg-customGold transition duration-500"
                    value="Register"
                  />
              </div>
            </form>
            {errorMsg && (
              <p className="text-red-500 font-semibold text-center text-base my-7">
                {errorMsg}
              </p>
            )}
          </div>
          <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
              alt="Welcome"
              src="https://i.ibb.co/5x9XDKg/pexels-the-lazy-artist-gallery-1342609.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;