import React from 'react';
import './App.css';

import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <h1>Popular Social Network MERN</h1>
      </AppWrapper>
    </div>
  );
}
const AppWrapper = styled.div `
  background-color: #f1f2f5;
`
export default App;
