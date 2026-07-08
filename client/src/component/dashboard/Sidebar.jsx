import {
    FaHome,
    FaHeartbeat,
    FaUser,
    FaCog
} from "react-icons/fa";

const Sidebar = () => {
    return (

        <aside className="hidden lg:flex w-64 bg-white shadow min-h-[calc(100vh-64px)]">

            <ul className="w-full p-5 space-y-6">

                <li className="flex items-center gap-3 cursor-pointer hover:text-cyan-600">
                    <FaHome />
                    Dashboard
                </li>

                <li className="flex items-center gap-3 cursor-pointer hover:text-cyan-600">
                    <FaHeartbeat />
                    Health
                </li>

                <li className="flex items-center gap-3 cursor-pointer hover:text-cyan-600">
                    <FaUser />
                    Profile
                </li>

                <li className="flex items-center gap-3 cursor-pointer hover:text-cyan-600">
                    <FaCog />
                    Settings
                </li>

            </ul>

        </aside>

    );
};

export default Sidebar;