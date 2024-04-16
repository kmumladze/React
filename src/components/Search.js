import './Search.css';

export function Search({ searchValue, handleChange, direction, handleClick }) {
  return (
    <div className="search-container">
      <input type="text" placeholder="search" value={searchValue} onChange={handleChange} />

      <div className="arrow">
        {direction === 'up' ? (
          <button onClick={() => handleClick('down')}>⬇️</button>
        ) : (
          <button onClick={() => handleClick('up')}>⬆️</button>
        )}
      </div>
    </div>
  );
}
