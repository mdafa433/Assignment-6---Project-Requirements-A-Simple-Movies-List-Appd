import React, { useState } from 'react';
function Search({ setQuery }) {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setQuery(input); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-end mt-4">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="w-96 p-2 border border-gray-400 rounded-l"
        placeholder="Search movies..."/>
      <button type="submit" className="bg-black text-white px-4 py-2 rounded-r hover:bg-orange-800">
        Search
      </button>
    </form>
  );
}

export default Search;
