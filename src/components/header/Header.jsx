import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import Logo from '../../web_images/Logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { account } = useContext(DataContext);

  // State for controlling the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State for controlling the Logout confirmation dialog
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  // Toggle mobile menu state
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Open the Logout confirmation dialog
  const openLogoutDialog = () => {
    setLogoutDialogOpen(true);
  };

  // Close the Logout confirmation dialog
  const closeLogoutDialog = () => {
    setLogoutDialogOpen(false);
  };

  // Perform Logout action
  const handleLogout = () => {
    closeLogoutDialog();
    navigate('/login');
  };

  return (
    <div className="bg-white text-black shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Seek" className="h-12 ml-12" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                location.pathname === '/'
                  ? 'bg-green-500 text-white'
                  : 'text-black hover:bg-gray-100'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                location.pathname === '/about'
                  ? 'bg-green-500 text-white'
                  : 'text-black hover:bg-gray-100'
              }`}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                location.pathname === '/contact'
                  ? 'bg-green-500 text-white'
                  : 'text-black hover:bg-gray-100'
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Profile Section */}
          <div className="flex items-center space-x-2 relative group">
            <span className="text-sm">Logged In: {account.username}</span>
            <button
              onClick={openLogoutDialog}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group-hover:text-green-500"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </button>
            <button
              onClick={openLogoutDialog}
              className="absolute top-8 right-0 bg-black text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <div className="flex items-center space-x-2 py-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span className="text-sm">Logged In: {account.username}</span>
            </div>
            <Link
              to="/"
              className={`block px-4 py-2 rounded-lg transition-colors duration-300 ${
                location.pathname === '/'
                  ? 'bg-green-500 text-white'
                  : 'text-black hover:bg-gray-100'
              }`}
              onClick={toggleMobileMenu}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2 rounded-lg transition-colors duration-300 ${
                location.pathname === '/about'
                  ? 'bg-green-500 text-white'
                  : 'text-black hover:bg-gray-100'
              }`}
              onClick={toggleMobileMenu}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-2 rounded-lg transition-colors duration-300 ${
                location.pathname === '/contact'
                  ? 'bg-green-500 text-white'
                  : 'text-black hover:bg-gray-100'
              }`}
              onClick={toggleMobileMenu}
            >
              CONTACT
            </Link>
            <button
              onClick={openLogoutDialog}
              className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-100 rounded-lg transition-colors duration-300"
            >
              <span>LOGOUT</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Logout confirmation dialog */}
      {logoutDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-medium mb-4">Confirm logout?</h3>
            <div className="flex justify-end space-x-3">
              <button
                onClick={closeLogoutDialog}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
