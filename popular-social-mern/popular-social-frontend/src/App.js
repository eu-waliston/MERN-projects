import React from 'react';

import styled from 'styled-components';

/* COMPONENTS */
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';
import Login from './components/Login';

import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">

      <AppWrapper>
        {
          user ?
            (
              <>
                <Header />
                <div className='app__body'>
                  <Sidebar />
                  <Feed />
                  <Widget />
                </div>
              </>
            )
            :
            (
              <Login />
            )
        }
      </AppWrapper>

    </div>
  );
}

const AppWrapper = styled.div`
  background-color: #f1f2f5;
  .app__body {
    display: flex;
  }
`
export default App;
