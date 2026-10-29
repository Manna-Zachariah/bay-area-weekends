import './SettingsPage.css';
import TravelerProfileDialog from '../components/TravelerProfileDialog';

function SettingsPage({
  theme,
  travelerProfile,
  onToggleTheme,
  onSaveTravelerProfile,
}) {
  return (
    <div className="settings-page">
      <section className="settings-page__hero" aria-labelledby="settings-page-title">
        <h1 className="settings-page__title" id="settings-page-title">
          Settings
        </h1>
        <p className="settings-page__intro">
          Adjust your display preferences and review the traveler profile information used across the app.
        </p>
      </section>

      <section className="settings-page__panel" aria-labelledby="settings-theme-heading">
        <h2 className="settings-page__panel-title" id="settings-theme-heading">
          Theme
        </h2>
        <p className="settings-page__panel-text">
          Current theme: {theme === 'dark' ? 'Dark' : 'Light'}
        </p>
        <button
          type="button"
          className="settings-page__button"
          onClick={onToggleTheme}
        >
          {theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </button>
      </section>

      <section className="settings-page__panel" aria-labelledby="settings-profile-heading">
        <h2 className="settings-page__panel-title" id="settings-profile-heading">
          Traveler Profile
        </h2>
        <p className="settings-page__panel-text">
          Display name: {travelerProfile.displayName}
        </p>
        <p className="settings-page__panel-text">
          Home base: {travelerProfile.homeBase}
        </p>
        <TravelerProfileDialog
          travelerProfile={travelerProfile}
          onSaveTravelerProfile={onSaveTravelerProfile}
        />
      </section>
    </div>
  );
}

export default SettingsPage;