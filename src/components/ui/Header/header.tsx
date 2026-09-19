import React from "react";

const Header = () => {
    // header include site title and navigation links and all should be related to nextjs
  return <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <h1>Cine Graph</h1>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>;
};

export default Header;