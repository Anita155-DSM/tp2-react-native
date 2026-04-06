function SearchFilter({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-wrap">
      <input 
        type="text" 
        placeholder="Buscar Pokémon por nombre..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchFilter;