import React from 'react';
import Wrapper from './assets/wrappers/AppWrapper';
import { HomePage } from './pages';
import { createTheme, MantineProvider } from '@mantine/core';

// const theme = createTheme({
//   /** Your theme override here */
// });

const App = () => {
  return (
    <MantineProvider>
      <Wrapper>
        <div className="blur" style={{ top: '-18%', right: '0' }}></div>
        <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>

        <HomePage />
        {/* <ProfilePage /> */}
        {/* <AuthPage /> */}
      </Wrapper>
    </MantineProvider>
  );
};

export default App;
