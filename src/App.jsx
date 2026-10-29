import { useState } from 'react';
import './App.css';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import MainArea from './components/MainArea';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('home');
  const [theme, setTheme] = useState('light');
  const [travelerProfile, setTravelerProfile] = useState({
    displayName: 'Weekend Explorer',
    homeBase: 'San Jose',
  });

  function navigateToPage(event, nextPage) {
    event.preventDefault();
    setPage(nextPage);
  }

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
      return;
    }

    setTheme('light');
  }

  function saveTravelerProfile(nextProfile) {
    setTravelerProfile(nextProfile);
  }

  const appClassName = theme === 'dark' ? 'app app--dark' : 'app';

  return (
    <div className={appClassName}>
      <SkipLink />
      <Header
        page={page}
        onNavigate={navigateToPage}
        travelerProfile={travelerProfile}
      />
      <MainArea
        page={page}
        travelerProfile={travelerProfile}
        theme={theme}
        onNavigate={navigateToPage}
        onToggleTheme={toggleTheme}
        onSaveTravelerProfile={saveTravelerProfile}
      />
      <Footer />
    </div>
  );
}

export default App;