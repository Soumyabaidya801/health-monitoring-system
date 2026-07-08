import { useState } from "react";
import {
  FaBell,
  FaBars,
  FaUser,
  FaSignOutAlt,
  FaUserEdit
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow h-16 px-6 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <button className="lg:hidden">
          <FaBars size={20} />
        </button>

        <h1 className="text-2xl font-bold text-cyan-600">
          MediTrack
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5 relative">

        <FaBell
          className="cursor-pointer"
          size={20}
        />

        {/* Profile */}
        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          onClick={() => setOpenMenu(!openMenu)}
          className="w-11 h-11 rounded-full cursor-pointer border-2 border-cyan-500"
        />

        {/* Dropdown */}
        {openMenu && (

          <div className="absolute right-0 top-14 w-56 bg-white rounded-xl shadow-xl border overflow-hidden">

            <button
              onClick={() => navigate("/profile")}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100"
            >
              <FaUser />
              My Profile
            </button>

            <button
              onClick={() => navigate("/edit-profile")}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100"
            >
              <FaUserEdit />
              Edit Profile
            </button>

            <hr />

            <button
              onClick={handleLogout}
              className="w-full px-4 py-3 flex items-center gap-3 text-red-600 hover:bg-red-50"
            >
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        )}

      </div>

    </nav>
  );
};

export default Navbar;