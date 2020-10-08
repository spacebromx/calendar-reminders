import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="antialiased sans-serif bg-gray-100 h-screen">
      <div className="container mx-auto px-4 py-2 md:py-24">
        <div className="bg-white rounded-lg shadow">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
