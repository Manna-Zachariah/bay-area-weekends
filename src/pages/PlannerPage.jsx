import { useId, useState } from 'react';
import './PlannerPage.css';
import plannerOptions from '../data/plannerOptions';

function PlannerPage() {
  const id = useId();

  const [travelerName, setTravelerName] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [customArea, setCustomArea] = useState('');
  const [tripLength, setTripLength] = useState('');
  const [tripFocus, setTripFocus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedPlan, setSubmittedPlan] = useState(null);

  const selectedRegionEntry = plannerOptions.regions.find((region) => {
    return region.value === selectedRegion;
  });

  const destinationOptions = selectedRegionEntry ? selectedRegionEntry.destinations : [];

  function handleRegionChange(event) {
    const nextRegion = event.target.value;

    setSelectedRegion(nextRegion);
    setSelectedDestination('');
    setCustomArea('');
    setErrorMessage('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!travelerName.trim()) {
      setErrorMessage('Please enter the traveler name for this weekend plan.');
      setSubmittedPlan(null);
      return;
    }

    if (!selectedRegion) {
      setErrorMessage('Please choose a trip region before continuing.');
      setSubmittedPlan(null);
      return;
    }

    if (selectedRegion === 'other' && !customArea.trim()) {
      setErrorMessage('Please describe the area you want to explore.');
      setSubmittedPlan(null);
      return;
    }

    if (selectedRegion !== 'other' && !selectedDestination) {
      setErrorMessage('Please choose a destination for the selected region.');
      setSubmittedPlan(null);
      return;
    }

    if (!tripLength) {
      setErrorMessage('Please choose how long the trip will be.');
      setSubmittedPlan(null);
      return;
    }

    if (!tripFocus) {
      setErrorMessage('Please choose the main focus for the trip.');
      setSubmittedPlan(null);
      return;
    }

    const finalDestination =
      selectedRegion === 'other'
        ? customArea.trim()
        : destinationOptions.find((destination) => destination.value === selectedDestination)?.label || '';

    const finalRegionLabel =
      selectedRegionEntry?.label || 'Other';

    const finalTripLengthLabel =
      plannerOptions.tripLengths.find((length) => length.value === tripLength)?.label || '';

    const finalTripFocusLabel =
      plannerOptions.tripFocuses.find((focus) => focus.value === tripFocus)?.label || '';

    setErrorMessage('');
    setSubmittedPlan({
      travelerName: travelerName.trim(),
      regionLabel: finalRegionLabel,
      destinationLabel: finalDestination,
      tripLengthLabel: finalTripLengthLabel,
      tripFocusLabel: finalTripFocusLabel,
    });
  }

  const regionOptionElements = plannerOptions.regions.map((region) => (
    <option key={region.value} value={region.value}>
      {region.label}
    </option>
  ));

  const destinationOptionElements = destinationOptions.map((destination) => (
    <option key={destination.value} value={destination.value}>
      {destination.label}
    </option>
  ));

  const tripLengthOptionElements = plannerOptions.tripLengths.map((length) => (
    <option key={length.value} value={length.value}>
      {length.label}
    </option>
  ));

  const tripFocusOptionElements = plannerOptions.tripFocuses.map((focus) => (
    <option key={focus.value} value={focus.value}>
      {focus.label}
    </option>
  ));

  return (
    <div className="planner-page">
      <section className="planner-page__hero" aria-labelledby={`${id}-planner-title`}>
        <h1 className="planner-page__title" id={`${id}-planner-title`}>
          Plan Your Weekend
        </h1>
        <p className="planner-page__intro">
          Build a simple trip plan based on region, destination type, and how you want the weekend to feel.
        </p>
        <p className="planner-page__intro">
          This planner is meant to help you narrow options quickly before you commit to a reservation or a
          full itinerary.
        </p>
      </section>

      <section className="planner-page__form-panel" aria-labelledby={`${id}-form-title`}>
        <h2 className="planner-page__section-title" id={`${id}-form-title`}>
          Weekend planner form
        </h2>

        <form className="planner-page__form" onSubmit={handleSubmit}>
          <label className="planner-page__label" htmlFor={`${id}-traveler-name`}>
            <span className="planner-page__label-text">Traveler name</span>
            <input
              className="planner-page__input"
              id={`${id}-traveler-name`}
              name="traveler-name"
              type="text"
              value={travelerName}
              onInput={(event) => setTravelerName(event.target.value)}
            />
          </label>

          <label className="planner-page__label" htmlFor={`${id}-region`}>
            <span className="planner-page__label-text">Trip region</span>
            <select
              className="planner-page__select"
              id={`${id}-region`}
              name="region"
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="">Select a region</option>
              {regionOptionElements}
            </select>
          </label>

          {selectedRegion !== 'other' && selectedRegion && (
            <label className="planner-page__label" htmlFor={`${id}-destination`}>
              <span className="planner-page__label-text">Destination</span>
              <select
                className="planner-page__select"
                id={`${id}-destination`}
                name="destination"
                value={selectedDestination}
                onChange={(event) => setSelectedDestination(event.target.value)}
              >
                <option value="">Select a destination</option>
                {destinationOptionElements}
              </select>
            </label>
          )}

          {selectedRegion === 'other' && (
            <label className="planner-page__label" htmlFor={`${id}-custom-area`}>
              <span className="planner-page__label-text">Describe the area you want to explore</span>
              <input
                className="planner-page__input"
                id={`${id}-custom-area`}
                name="custom-area"
                type="text"
                value={customArea}
                onInput={(event) => setCustomArea(event.target.value)}
              />
            </label>
          )}

          <label className="planner-page__label" htmlFor={`${id}-trip-length`}>
            <span className="planner-page__label-text">Trip length</span>
            <select
              className="planner-page__select"
              id={`${id}-trip-length`}
              name="trip-length"
              value={tripLength}
              onChange={(event) => setTripLength(event.target.value)}
            >
              <option value="">Select trip length</option>
              {tripLengthOptionElements}
            </select>
          </label>

          <label className="planner-page__label" htmlFor={`${id}-trip-focus`}>
            <span className="planner-page__label-text">Main trip focus</span>
            <select
              className="planner-page__select"
              id={`${id}-trip-focus`}
              name="trip-focus"
              value={tripFocus}
              onChange={(event) => setTripFocus(event.target.value)}
            >
              <option value="">Select a trip focus</option>
              {tripFocusOptionElements}
            </select>
          </label>

          {errorMessage && (
            <p className="planner-page__error-message">
              {errorMessage}
            </p>
          )}

          <button type="submit" className="planner-page__button">
            Save weekend plan
          </button>
        </form>
      </section>

      {submittedPlan && (
        <section className="planner-page__summary" aria-labelledby={`${id}-summary-title`}>
          <h2 className="planner-page__section-title" id={`${id}-summary-title`}>
            Saved trip summary
          </h2>
          <p className="planner-page__summary-text">
            Traveler: {submittedPlan.travelerName}
          </p>
          <p className="planner-page__summary-text">
            Region: {submittedPlan.regionLabel}
          </p>
          <p className="planner-page__summary-text">
            Destination: {submittedPlan.destinationLabel}
          </p>
          <p className="planner-page__summary-text">
            Trip length: {submittedPlan.tripLengthLabel}
          </p>
          <p className="planner-page__summary-text">
            Trip focus: {submittedPlan.tripFocusLabel}
          </p>
        </section>
      )}
    </div>
  );
}

export default PlannerPage;