import React from 'react';
function Header({ title }) {
  return (
    <header className="px-12 bg-orange-700  py-4">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
    </header>
  );
}

export default Header;
