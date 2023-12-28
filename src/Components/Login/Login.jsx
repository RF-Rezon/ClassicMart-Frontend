import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { normalLogin, LoginWithGoogle, webUrl , setLoading} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = () => {
    LoginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        axios
          .post(`${webUrl}/users`, {
            name: loggedUser?.displayName,
            email: loggedUser?.email,
          })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Ya!..",
              text: `Sign in successfully with google.`,
            }),
              navigate("/");
          });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops!..",
          text: `Sign in problem with google.`,
        });
        setLoading(false);
      });
  };

  const onSubmit = (data) => {
    normalLogin(data?.email, data?.password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Ya!..",
          text: `Sign in successfully.`,
        }),
          navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "OOps!..",
          text: `Sign in problem with Email And Password.`,
        });
        setLoading(false)
        navigate("/");
      });
  };


  return (
    <div className="bg-custonBlackBg">
      <div className="overflow-hidden min-h-screen">
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 text-white">
            <div className="mx-auto max-w-lg text-center pb-6">
              <h1 className="text-2xl font-bold sm:text-3xl font-playfair">
                LOGIN
              </h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div>
                <label className="sr-only">Email</label>
                <div className="relative">
                  <input
                    {...register("email")}
                    className="w-full rounded-sm border-gray-200 p-4 pe-12 text-base font-medium shadow-sm text-gray-900 "
                    placeholder="Enter email"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    {...register("password")}
                    className="w-full rounded-sm border-gray-200 p-4 pe-12 text-base font-medium shadow-sm text-gray-900"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-playfair font-medium text-white">
                  No account?
                  <a className="underline ml-3" href="/register">
                    Sign up
                  </a>
                </p>
                <input
                  type="submit"
                  className="uppercase w-[200px] mx-auto py-3 my-4 bg-buttonBg font-medium  font-playfair border-b-[3px] border-b-customGold text-white text-sm hover:bg-customGold transition duration-500"
                  value="Login"
                />
              </div>
            </form>
            <div
              onClick={handleGoogleLogin}
              className="cursor-pointer bg-white hover:bg-customGold w-3/5 p-5 flex items-center justify-center my-7 mx-auto mt-20 transition duration-700"
            >
              <div className="mx-auto">
                <FaGoogle fill="black" />
              </div>
            </div>
          </div>
          <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
              alt="Welcome"
              src="https://i.ibb.co/VS8FfnY/pexels-rene-asmussen-2919052.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
