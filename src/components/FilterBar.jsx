import './FilterBar.css';

function FilterBar({ selectedCategory, onSelectCategory }) {
  return (
    <section className="filter-bar" aria-labelledby="filter-bar-title">
      <h2 className="filter-bar__title" id="filter-bar-title">
        Filter destinations
      </h2>
      <div className="filter-bar__controls">
        <button
          type="button"
          className={
            selectedCategory === 'all'
              ? 'filter-bar__button filter-bar__button--current'
              : 'filter-bar__button'
          }
          onClick={() => onSelectCategory('all')}
        >
          All
        </button>
        <button
          type="button"
          className={
            selectedCategory === 'coast'
              ? 'filter-bar__button filter-bar__button--current'
              : 'filter-bar__button'
          }
          onClick={() => onSelectCategory('coast')}
        >
          Coast
        </button>
        <button
          type="button"
          className={
            selectedCategory === 'wine'
              ? 'filter-bar__button filter-bar__button--current'
              : 'filter-bar__button'
          }
          onClick={() => onSelectCategory('wine')}
        >
          Wine
        </button>
        <button
          type="button"
          className={
            selectedCategory === 'nature'
              ? 'filter-bar__button filter-bar__button--current'
              : 'filter-bar__button'
          }
          onClick={() => onSelectCategory('nature')}
        >
          Nature
        </button>
      </div>
    </section>
  );
}

export default FilterBar;