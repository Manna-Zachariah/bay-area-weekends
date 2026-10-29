import { useEffect, useId, useRef, useState } from 'react';
import './TravelerProfileDialog.css';

function TravelerProfileDialog({
  travelerProfile,
  onSaveTravelerProfile,
}) {
  const dialogRef = useRef();
  const id = useId();

  const [displayName, setDisplayName] = useState(travelerProfile.displayName);
  const [homeBase, setHomeBase] = useState(travelerProfile.homeBase);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setDisplayName(travelerProfile.displayName);
    setHomeBase(travelerProfile.homeBase);
  }, [travelerProfile]);

  function openDialog() {
    setDisplayName(travelerProfile.displayName);
    setHomeBase(travelerProfile.homeBase);
    setErrorMessage('');
    dialogRef.current.showModal();
  }

  function closeDialog() {
    setErrorMessage('');
    dialogRef.current.close();
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!displayName.trim()) {
      setErrorMessage('Please enter a display name for the traveler profile.');
      return;
    }

    if (!homeBase.trim()) {
      setErrorMessage('Please enter a home base for the traveler profile.');
      return;
    }

    onSaveTravelerProfile({
      displayName: displayName.trim(),
      homeBase: homeBase.trim(),
    });

    setErrorMessage('');
    dialogRef.current.close();
  }

  return (
    <div className="traveler-profile-dialog">
      <button
        type="button"
        className="traveler-profile-dialog__open-button"
        onClick={openDialog}
      >
        Edit traveler profile
      </button>

      <dialog className="traveler-profile-dialog__modal" ref={dialogRef}>
        <form
          className="traveler-profile-dialog__form"
          method="dialog"
          onSubmit={handleSubmit}
        >
          <h3 className="traveler-profile-dialog__title">
            Update traveler profile
          </h3>

          <label
            className="traveler-profile-dialog__label"
            htmlFor={`${id}-display-name`}
          >
            <span className="traveler-profile-dialog__label-text">
              Display name
            </span>
            <input
              className="traveler-profile-dialog__input"
              id={`${id}-display-name`}
              name="display-name"
              type="text"
              value={displayName}
              onInput={(event) => setDisplayName(event.target.value)}
            />
          </label>

          <label
            className="traveler-profile-dialog__label"
            htmlFor={`${id}-home-base`}
          >
            <span className="traveler-profile-dialog__label-text">
              Home base
            </span>
            <input
              className="traveler-profile-dialog__input"
              id={`${id}-home-base`}
              name="home-base"
              type="text"
              value={homeBase}
              onInput={(event) => setHomeBase(event.target.value)}
            />
          </label>

          {errorMessage && (
            <p className="traveler-profile-dialog__error-message">
              {errorMessage}
            </p>
          )}

          <div className="traveler-profile-dialog__actions">
            <button
              type="submit"
              className="traveler-profile-dialog__button"
            >
              Save profile
            </button>
            <button
              type="button"
              className="traveler-profile-dialog__button traveler-profile-dialog__button--secondary"
              onClick={closeDialog}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default TravelerProfileDialog;