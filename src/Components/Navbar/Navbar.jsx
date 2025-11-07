"use client";
import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const ModernNavbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  // ✅ scroll handle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  return (
    <div
      className={`w-full z-[9999] transition-all duration-300 ${
        isSticky
          ? "fixed top-0 left-0 bg-white shadow-md"
          : "relative bg-[#ffffff] shadow-lg"
      }`}
    >
      <div className="navbar max-w-7xl mx-auto justify-between">
        {/* Left */}
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
                <NavLink to="/" className="text-customGray">Home</NavLink>
              </li>
              <li>
                <NavLink to="/allProducts" className="text-customGray">Products</NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-customGray">News</NavLink>
              </li>
            </ul>
          </div>

          <Link
            to="/"
            className="text-[18px] md:text-[26px] font-[700] tracking-[-0.6px] text-white cursor-pointer bg-[#c40d2e] p-2 px-3 uppercase"
          >
            Classicmart
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex space-x-8">
          <NavLink to="/" className="text-customGray cursor-pointer">
            <span className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customGold after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
              Home
            </span>
          </NavLink>
          <NavLink to="/allProducts" className="text-customGray cursor-pointer">
            <span className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customGold after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
              Products
            </span>
          </NavLink>
          <NavLink
            to="/wishlist"
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
                Swal.fire({
                  icon: "info",
                  title: "Please Log In",
                  text: "Log in to add and view your favourites in Wishlist ⌚",
                  confirmButtonColor: "#c40d2e",
                });
              }
            }}
            className="text-customGray cursor-pointer"
          >
            <span className="inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-customGold after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
              Wishlist
            </span>
          </NavLink>
        </div>

        {/* Right */}
        <div className="flex items-center mt-4 md:mt-0">
          {!user ? (
            <Link
              className="py-[10px] px-[26px] rounded-[5px] border-2 border-customGold hover:bg-customGold cursor-pointer transition-all duration-300 text-customGold hover:text-white"
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
                className="py-[10px] px-[26px] rounded-[5px] border-2 border-customGold hover:bg-customGold cursor-pointer transition-all duration-300  text-customGold hover:text-white"
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
