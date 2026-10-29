import { useState } from 'react';
import './GlobalNav.css';

function GlobalNav({ page, onNavigate }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function toggleMoreMenu() {
    setShowMoreMenu(!showMoreMenu);
  }

  function handleNavigate(event, nextPage) {
    onNavigate(event, nextPage);
    setShowMenu(false);
    setShowMoreMenu(false);
  }

  const navClassName = showMenu
    ? 'global-nav global-nav--menu-open'
    : 'global-nav';

  const menuButtonLabel = showMenu ? 'Close navigation menu' : 'Open navigation menu';

  return (
    <nav className={navClassName} aria-label="Primary">
      <button
        type="button"
        className="global-nav__toggle"
        onClick={toggleMenu}
        aria-label={menuButtonLabel}
        aria-expanded={showMenu ? 'true' : 'false'}
      >
        ☰
      </button>

      <ul className="global-nav__list">
        <li className="global-nav__item">
          <a
            className={page === 'home' ? 'global-nav__link global-nav__link--current' : 'global-nav__link'}
            href="#home"
            onClick={(event) => handleNavigate(event, 'home')}
            aria-current={page === 'home' ? 'page' : undefined}
          >
            Home
          </a>
        </li>

        <li className="global-nav__item">
          <a
            className={
              page === 'destinations'
                ? 'global-nav__link global-nav__link--current'
                : 'global-nav__link'
            }
            href="#destinations"
            onClick={(event) => handleNavigate(event, 'destinations')}
            aria-current={page === 'destinations' ? 'page' : undefined}
          >
            Destinations
          </a>
        </li>

        <li className="global-nav__item">
          <a
            className={page === 'planner' ? 'global-nav__link global-nav__link--current' : 'global-nav__link'}
            href="#planner"
            onClick={(event) => handleNavigate(event, 'planner')}
            aria-current={page === 'planner' ? 'page' : undefined}
          >
            Planner
          </a>
        </li>

        <li className="global-nav__item global-nav__item--dropdown">
          <button
            type="button"
            className="global-nav__link global-nav__dropdown-button"
            onClick={toggleMoreMenu}
            aria-expanded={showMoreMenu ? 'true' : 'false'}
          >
            <span className="global-nav__dropdown-label">More</span>
            <span className="global-nav__dropdown-icon" aria-hidden="true">
              {showMoreMenu ? '▼' : '▶'}
            </span>
          </button>

          {showMoreMenu && (
            <ul className="global-nav__submenu">
              <li className="global-nav__submenu-item">
                <a
                  className={
                    page === 'faq'
                      ? 'global-nav__sublink global-nav__sublink--current'
                      : 'global-nav__sublink'
                  }
                  href="#faq"
                  onClick={(event) => handleNavigate(event, 'faq')}
                  aria-current={page === 'faq' ? 'page' : undefined}
                >
                  FAQ
                </a>
              </li>
              <li className="global-nav__submenu-item">
                <a
                  className={
                    page === 'settings'
                      ? 'global-nav__sublink global-nav__sublink--current'
                      : 'global-nav__sublink'
                  }
                  href="#settings"
                  onClick={(event) => handleNavigate(event, 'settings')}
                  aria-current={page === 'settings' ? 'page' : undefined}
                >
                  Settings
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default GlobalNav;