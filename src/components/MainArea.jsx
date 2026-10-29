import './MainArea.css';
import HomePage from '../pages/HomePage';
import DestinationsPage from '../pages/DestinationsPage';
import PlannerPage from '../pages/PlannerPage';
import FaqPage from '../pages/FaqPage';
import SettingsPage from '../pages/SettingsPage';

function MainArea({
  page,
  travelerProfile,
  theme,
  onNavigate,
  onToggleTheme,
  onSaveTravelerProfile,
}) {
  return (
    <main id="main" className="main-area" tabIndex="-1">
      {page === 'home' && <HomePage onNavigate={onNavigate} />}
      {page === 'destinations' && <DestinationsPage />}
      {page === 'planner' && <PlannerPage />}
      {page === 'faq' && <FaqPage />}
      {page === 'settings' && (
        <SettingsPage
          theme={theme}
          travelerProfile={travelerProfile}
          onToggleTheme={onToggleTheme}
          onSaveTravelerProfile={onSaveTravelerProfile}
        />
      )}
    </main>
  );
}

export default MainArea;