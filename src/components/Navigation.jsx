import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Image */}
        <div className="flex items-center">
          <img 
            src="https://via.placeholder.com/40" // Replace with your logo image URL
            alt="Logo" 
            className="h-8 w-8 mr-2"
          />
          <div className="text-white text-2xl font-bold">
            <a href="/">MyLogo</a>
          </div>
        </div>

        {/* Hamburger Icon (only visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className={`md:flex space-x-6 text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Us</a>
          <a href="#contact" className="hover:text-gray-400">Contact Us</a>
          <a href="#signup" className="hover:text-gray-400">SignUp</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation



{/* <header className='flex justify-between px-7 items-center shadow-xl sticky top-0 backdrop-blur-md bg-white'>
        <div className='flex space-x-3 items-center'>
            <img src="/assets/logo.svg" alt="logo" width={75} />
            <h2 className='text-3xl font-Qwit font-extrabold'>
                School<span className='text-sky-700'>Up</span>
            </h2>
        </div>
        <nav>
            <ul className='flex  justify-between space-x-5 font-bold '>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">SignUp</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">AboutUS</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">ContactUs</NavLink>
                </li>
            </ul>
        </nav>
    </header> */}