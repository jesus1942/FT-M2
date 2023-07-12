import React, { useState } from 'react';

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    // Ejecutar la función onSearch pasando el valor de búsqueda
    props.onSearch(searchValue);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleChange} />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
}
