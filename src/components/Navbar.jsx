import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['HOME', 'COURSES', 'ABOUT', 'CONTACT'];

  return (
    <nav className="w-full bg-[#070F2B] shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px- py-6 flex justify-between items-center ">
        <div className='text-white text-2xl font-bold' >
            Brilliance IT Solution
        </div>

        <ul className="hidden md:flex gap-8 text-white font-sm">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-600 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white px-4 py-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-gray-800 font-medium hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;