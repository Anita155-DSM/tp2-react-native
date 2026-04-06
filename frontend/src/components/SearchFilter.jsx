function SearchFilter({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Buscar Pokémon por nombre..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '8px' }}
      />
    </div>
  );
}

export default SearchFilter;