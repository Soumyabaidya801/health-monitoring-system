import { IoClose } from "react-icons/io5";
import { FiSearch } from 'react-icons/fi'


export default function Sidebar({ open, setOpen,setShowLogin }) {
  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#0f172a] text-white z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}
        md:hidden shadow-2xl`}
      >
        {/* Top Section */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">

          <h2 className="text-xl font-semibold text-cyan-400">
            Menu
          </h2>

          <button onClick={() => setOpen(false)}>
            <IoClose size={30} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-8 p-6 text-lg">

          {/* Mobile Search */}
          <div className="md:flex border border-cyan-400 px-4 py-2 rounded-3xl">
            <input
                type="text"
                placeholder="Search..."
                className='bg-transparent outline-none text-white placeholder-gray-300 w-40'/>
              <button className='ml-2 text-cyan-300'>
                <FiSearch size={20} />
              </button>
          </div>
          <a
            href="/"
            className="hover:text-cyan-400 transition duration-200"
          >
            Home
          </a>

          <a
            href="/about"
            className="hover:text-cyan-400 transition duration-200"
          >
            About
          </a>

          <a
            href="/contact"
            className="hover:text-cyan-400 transition duration-200"
          >
            Contact
          </a>

          {/* Button */}
          <button onClick={()=>{ 
            setShowLogin(true)
            setOpen(false)                 
          }}
          className="mt-4 border border-cyan-400 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}