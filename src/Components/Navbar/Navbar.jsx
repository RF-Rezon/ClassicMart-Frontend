import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const Nav = () => {
  const { user, LogOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to log out surely??`,
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
              text: `Logged Out Sucessfully`,
            }),
              navigate("/");
          })
          .catch((error) => {});
      }
    });
  };
  return (
    <div>
      <header className="fixed top-0 w-full z-50 bg-customBlue border-white py-10 pb-28 border-b-[3px] md:pb-3 md:py-3 border-b-white text-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex md:flex-row flex-col h-16 items-center justify-between gap-4">
            <div
              className="md:flex md:items-center md:gap-12"
            >
              <>
                <NavLink className="block text-customGold" to="/">
                  <span className="sr-only">Home</span>
                  <p className="text-2xl font-semibold font-playfair uppercase">
                    Classicmart
                  </p>
                  <span className="hidden h-1 w-10 rounded bg-white lg:block"></span>
                </NavLink>
              </>
            </div>

            <div>
              <nav aria-label="Global">
                <ul className="flex items-center md:gap-8 gap-4 text-sm">
                  <li  exact activeclassname="active">
                    <NavLink
                      className="text-lg font-medium hover:font-semibold font-playfair"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>

                  <li activeclassname="active">
                    <NavLink
                      className="text-lg font-medium hover:font-semibold font-playfair"
                      to="/allProducts"
                    >
                      Products
                    </NavLink>
                  </li>

                  {user && (
                    <>
                      <li>
                        <Link className="avatar" to="/">
                          {user?.photoURL && (
                            <div className="w-10 h-10 rounded-full">
                              <img src={user.photoURL} />
                            </div>
                          )}
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>

            <div className="flex items-center mt-4 md:mt-0">
              {!user ? (
                <div>
                  <>
                    <Link
                      className=" uppercase mx-auto py-2.5 px-5 bg-buttonBg font-medium  font-playfair border-b-[3px] border-b-customGold text-white text-sm hover:bg-customGold transition duration-500"
                      to="/login"
                    >
                      Sign In
                    </Link>
                  </>
                </div>
              ) : (
                <div>
                  <>
                    <Link
                      className=" uppercase mx-auto py-2.5 px-5 bg-buttonBg font-medium  font-playfair border-b-[3px] border-b-customGold text-white text-sm hover:bg-customGold transition duration-500"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </Link>
                  </>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
