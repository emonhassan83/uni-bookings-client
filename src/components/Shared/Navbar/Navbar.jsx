import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-[2520px] xl:px-28 md:px-10 sm:px-2 lg:py-2 w-full px-4  mx-auto">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="UniBookings"
          title="UniBookings"
          className="inline-flex items-center"
        >
          <div className="flex items-center justify-center w-40 h-28">
            <h2 className="text-2xl font-bold">UniBookings</h2>
          </div>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex text-black">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/colleges"
              aria-label="Colleges"
              title="Colleges"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Colleges
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admission"
              aria-label="Admission"
              title="Admission"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Admission
            </NavLink>
          </li>
              <li>
                <NavLink
                  to="/myCollege"
                  aria-label="My College"
                  title="My College"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  My College
                </NavLink>
              </li>
        </ul>
        {user ? (
          <div className="hidden lg:flex  items-center gap-1">
            <Link to="/profile">
            <div className="mt-6">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-9 rounded-full">
                  <img title={user?.displayName} src={user?.photoURL} />
                </div>
              </label>
            </div>
            </Link>
            <li>
              <button
                onClick={handleLogOut}
                className="btn btn-outline hidden lg:block btn-sm px-5 rounded-3xl text-black hover:bg-[#A81C51] hover:border-none my-4 uppercase"
              >
                Logout
              </button>
            </li>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline hidden lg:block btn-sm px-5 rounded-3xl text-black hover:bg-[#A81C51] hover:border-none my-4 uppercase">
              Login
            </button>
          </Link>
        )}

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-black" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="UniBookings"
                      title="UniBookings"
                      className="inline-flex items-center"
                    >
                      <div className="flex items-center justify-center w-20 h-16">
                        <h4 className="text-xl font-bold">UniBookings</h4>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/colleges"
                        aria-label="Colleges"
                        title="Colleges"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Colleges
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admission"
                        aria-label="Admission"
                        title="Admission"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Admission
                      </Link>
                    </li>
                    
                        <li>
                          <Link
                            to="/myCollege"
                            aria-label="My College"
                            title="My College"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            My College
                          </Link>
                        </li>
                        {user ? (
                      <>
                        <Link to="/profile">
                        <li>
                          <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                          >
                            <div className="w-9 rounded-full">
                              <img
                                title={user?.displayName}
                                src={user?.photoURL}
                              />
                            </div>
                          </label>
                        </li>
                        </Link>
                        <li>
                          <button
                            onClick={handleLogOut}
                            className="btn btn-outline btn-sm px-5 rounded-3xl text-black hover:bg-[#A81C51] hover:border-none uppercase -ml-2"
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <Link to="/login">
                        <button className="btn btn-outline btn-sm px-5 rounded-3xl text-black hover:bg-[#A81C51] hover:border-none my-4 -ml-2 uppercase">
                          Login
                        </button>
                      </Link>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
