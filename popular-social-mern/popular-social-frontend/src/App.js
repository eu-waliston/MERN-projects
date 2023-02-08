import React from 'react';
import './App.css';

import styled from 'styled-components';

/* COMPONENTS */
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Header />
      </AppWrapper>
    </div>
  );
}
const AppWrapper = styled.div `
  background-color: #f1f2f5;
`
export default App;
