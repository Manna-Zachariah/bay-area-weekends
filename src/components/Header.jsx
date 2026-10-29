import './Header.css';
import GlobalNav from './GlobalNav';

function Header({ page, onNavigate, travelerProfile }) {
  return (
    <header className="header">
      <div className="header__branding">
        <p className="header__eyebrow">Bay Area Weekend Travel Guide</p>
        <p className="header__traveler">
          Planning for {travelerProfile.displayName} from {travelerProfile.homeBase}
        </p>
      </div>
      <GlobalNav page={page} onNavigate={onNavigate} />
    </header>
  );
}

export default Header;