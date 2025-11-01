"use client";
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const ModernNavbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to log out surely?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#cca471",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        LogOut()
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: `Logged Out Successfully`,
            });
            navigate("/"); // logout successful -> redirect home
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  return (
    <div className="shadow-sm bg-[#1e1e1e]">
      {/* Navbar Start */}
      <div className="navbar max-w-7xl mx-auto justify-between">
        <div className="flex-[1/3]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/allProducts"
                  className="t-nav-links text-customGold menu menu-horizontal px-1 cursor-pointer"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="t-nav-links text-customGold menu menu-horizontal px-1 cursor-pointer"
                >
                  News
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink to="/" className="t-logo cursor-pointer text-customGold">
            <p className="text-2xl font-semibold uppercase">Classicmart</p>
            <span className="hidden h-1 w-10 rounded bg-white lg:block"></span>
          </NavLink>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex space-x-5">
          <NavLink
            to="/allProducts"
            className="t-nav-links text-customGold menu menu-horizontal px-1"
          >
            Products
          </NavLink>

          <NavLink
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
            className="t-nav-links text-customGold menu menu-horizontal px-1"
          >
            Wishlist
          </NavLink>
        </div>

        {/* Navbar End / Login-Logout */}
        <div className="flex items-center mt-4 md:mt-0">
          {!user ? (
            <Link
              className="py-[10px] px-[26px] rounded-[5px] t-2 bg-[#cca471] base-white-text hover:bg-[#ddb27a] cursor-pointer transition-all duration-300"
              to="/login"
            >
              Sign In
            </Link>
          ) : (
            <div className="flex items-center justify-center space-x-5">
              {user?.photoURL && (
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={user.photoURL}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <button
                className="py-[10px] px-[26px] rounded-[5px] t-2 bg-[#cca471] base-white-text hover:bg-[#ddb27a] cursor-pointer transition-all duration-300"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernNavbar;
