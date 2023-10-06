import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


function App() {
  return (
    <div>
      <Wrapper>
        <Box>

        </Box>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  background-color: #F5F5F5;
`
const Box = styled.div`
max-width:1250px;
gap: 10px;
`
export default App;
