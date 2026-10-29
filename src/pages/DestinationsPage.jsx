import { useState } from 'react';
import './DestinationsPage.css';
import destinations from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import FilterBar from '../components/FilterBar';

function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const visibleDestinations = destinations.filter((destination) => {
    if (selectedCategory === 'all') {
      return true;
    }

    return destination.category === selectedCategory;
  });

  const destinationCards = visibleDestinations.map((destination) => (
    <li className="destinations-page__item" key={destination.id}>
      <DestinationCard destination={destination} />
    </li>
  ));

  return (
    <div className="destinations-page">
      <section className="destinations-page__hero" aria-labelledby="destinations-page-title">
        <h1 className="destinations-page__title" id="destinations-page-title">
          Choose a Weekend Destination
        </h1>
        <p className="destinations-page__intro">
          Compare coastal escapes, wine country stops, and scenic nature trips around the Bay Area and
          nearby destinations.
        </p>
        <p className="destinations-page__intro">
          Use the filters below to narrow the list and find a weekend option that fits your travel style.
        </p>
      </section>

      <FilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <section className="destinations-page__gallery" aria-labelledby="destinations-page-gallery-title">
        <h2 className="destinations-page__section-title" id="destinations-page-gallery-title">
          Destination gallery
        </h2>
        <p className="destinations-page__results">
          Showing {visibleDestinations.length} destination
          {visibleDestinations.length === 1 ? '' : 's'}.
        </p>
        <ul className="destinations-page__list">
          {destinationCards}
        </ul>
      </section>
    </div>
  );
}

export default DestinationsPage;