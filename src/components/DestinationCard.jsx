import './DestinationCard.css';

function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <img
        className="destination-card__image"
        src={destination.image}
        alt={destination.alt}
      />
      <div className="destination-card__content">
        <h3 className="destination-card__title">{destination.name}</h3>
        <p className="destination-card__meta">{destination.driveTime}</p>
        <p className="destination-card__description">{destination.description}</p>
      </div>
    </article>
  );
}

export default DestinationCard;