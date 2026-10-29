import './HomePage.css';
import destinations from '../data/destinations';
import DestinationCard from '../components/DestinationCard';

function HomePage({ onNavigate }) {
  const featuredDestinations = destinations.slice(0, 3);

  const featuredCards = featuredDestinations.map((destination) => (
    <li className="home-page__featured-item" key={destination.id}>
      <DestinationCard destination={destination} />
    </li>
  ));

  return (
    <div className="home-page">
      <section className="home-page__hero" aria-labelledby="home-page-title">
        <h1 className="home-page__title" id="home-page-title">
          Bay Area Weekend Travel Guide
        </h1>
        <p className="home-page__intro">
          Plan short trips from San Jose with ideas for coastal drives, wine country weekends, and scenic
          escapes around Northern California.
        </p>
        <p className="home-page__intro">
          Compare destinations, think through travel time, and choose a weekend plan that fits your mood,
          schedule, and distance.
        </p>
        <p className="home-page__callout">
          Start with a few featured destinations or jump to the planner to sketch your next getaway.
        </p>
        <div className="home-page__actions">
          <a
            className="home-page__link"
            href="#destinations"
            onClick={(event) => onNavigate(event, 'destinations')}
          >
            Explore destinations
          </a>
          <a
            className="home-page__link"
            href="#planner"
            onClick={(event) => onNavigate(event, 'planner')}
          >
            Open the planner
          </a>
        </div>
      </section>

      <section className="home-page__featured" aria-labelledby="home-page-featured-title">
        <h2 className="home-page__section-title" id="home-page-featured-title">
          Featured weekend picks
        </h2>
        <ul className="home-page__featured-list">
          {featuredCards}
        </ul>
      </section>

      <section className="home-page__trip-styles" aria-labelledby="home-page-trip-styles-title">
        <h2 className="home-page__section-title" id="home-page-trip-styles-title">
          Quick ways to choose a trip
        </h2>
        <div className="home-page__panels">
          <article className="home-page__panel">
            <h3 className="home-page__panel-title">Coastal reset</h3>
            <p className="home-page__panel-text">
              Pick a shoreline destination when you want cooler weather, ocean views, and a slower pace for
              a one-day or overnight trip.
            </p>
          </article>
          <article className="home-page__panel">
            <h3 className="home-page__panel-title">Wine country weekend</h3>
            <p className="home-page__panel-text">
              Choose Napa or Sonoma when your plan is more about tasting rooms, scenic drives, and longer
              lunches than packed sightseeing.
            </p>
          </article>
          <article className="home-page__panel">
            <h3 className="home-page__panel-title">Nature first</h3>
            <p className="home-page__panel-text">
              Head toward Monterey, Point Reyes, or Lake Tahoe when you want viewpoints, water, and more
              time outdoors than in town centers.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default HomePage;