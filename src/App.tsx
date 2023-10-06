// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Card } from './components/Card';
import { Image } from './components/Image';
import { MyTheme } from './styles/Theme';
import { Body } from './components/Body';
import { BodyTop } from './components/BodyTop';
import { BodyBottom } from './components/BodyBottom';
import { BodyTopHeader } from './components/BodyTopHeader';
import { BodyTopText } from './components/BodyTopText';
import { Button } from './components/Button';

function App() {
  return (
    <div>
      <Wrapper>
        <Box>
          <Card>
            <Image src={MyTheme.images.cardImage} />
            <Body>
              <BodyTop>
                <BodyTopHeader>Headline</BodyTopHeader>
                <BodyTopText color={MyTheme.colors.description}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</BodyTopText>
              </BodyTop>
              <BodyBottom>
                <Button as='a' href='https://www.google.ru/' btnType={'link'}>See more</Button>
                <Button btnType={'button'}>Save</Button>
              </BodyBottom>
            </Body>
          </Card>
        </Box>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  background-color: #F5F5F5;
  height: 100vh;
`
const Box = styled.div`
max-width:1250px;
margin: 0 auto;
/* gap: 10px; */
`
export default App;
