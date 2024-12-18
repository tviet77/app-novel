import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon, Bars2Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-y-0 space-y-4">
          <div className="flex justify-between items-center">
            {/* Nút mở menu */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Bars2Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>

            {/* Logo */}
            <Link to="/app-novel" className="text-2xl font-bold text-primary dark:text-white">
              Novel Viet
            </Link>

            {/* Nút bật/tắt dark mode */}
            <div className="flex items-center space-x-4 lg:hidden">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {isDark ? (
                  <SunIcon className="w-6 h-6 text-yellow-500" />
                ) : (
                  <MoonIcon className="w-6 h-6 text-blue-500" />
                )}
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:space-x-4 lg:ml-6">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-screen-sm">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm truyện..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white"
                >
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Navigation */}
            <nav className="hidden lg:flex space-x-1">
              <Link
                to="/app-novel"
                className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
              >
                Trang chủ
              </Link>
              <Link
                to="/the-loai"
                className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
              >
                Thể loại
              </Link>
              <Link
                to="/xep-hang"
                className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
              >
                Xếp hạng
              </Link>
              <Link
                to="/truyen-moi"
                className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
              >
                Truyện mới
              </Link>
              <Link
                to="/hoan-thanh"
                className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
              >
                Đã hoàn thành
              </Link>
            </nav>

            {/* Dark mode toggle - desktop */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {isDark ? (
                  <SunIcon className="w-6 h-6 text-yellow-500" />
                ) : (
                  <MoonIcon className="w-6 h-6 text-blue-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform z-50 duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="mb-4 p-2 rounded-full"
          >
            <XMarkIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          {/* Search in mobile menu */}
          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm truyện..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white"
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </form>

          <nav className="flex flex-col space-y-2">
            <Link
              to="/app-novel"
              className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
              onClick={toggleMenu}
            >
              Trang chủ
            </Link>
            <Link
              to="/the-loai"
              className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
              onClick={toggleMenu}
            >
              Thể loại
            </Link>
            <Link
              to="/xep-hang"
              className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
              onClick={toggleMenu}
            >
              Xếp hạng
            </Link>
            <Link
              to="/truyen-moi"
              className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
              onClick={toggleMenu}
            >
              Truyện mới
            </Link>
            <Link
              to="/hoan-thanh"
              className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
              onClick={toggleMenu}
            >
              Đã hoàn thành
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;