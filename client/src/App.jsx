import React from 'react';
import Wrapper from './assets/wrappers/AppWrapper';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';

const App = () => {
  return (
    <Wrapper>
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>

      {/* <HomePage /> */}
      {/* <ProfilePage /> */}
      <AuthPage />
    </Wrapper>
  );
};

export default App;
