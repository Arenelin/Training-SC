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
                <Button as='a' href='https://www.google.ru/' btnType={'link'} primaryColor={MyTheme.colors.primaryColorFirstCard} secondaryColor={MyTheme.colors.secondaryColorFirstCard}>See more</Button>
                <Button btnType={'button'} primaryColor={MyTheme.colors.primaryColorFirstCard} secondaryColor={MyTheme.colors.secondaryColorFirstCard}>Save</Button>
              </BodyBottom>
            </Body>
          </Card>
          <Card>
            <Image src={MyTheme.images.cardImage} />
            <Body>
              <BodyTop>
                <BodyTopHeader>Headline</BodyTopHeader>
                <BodyTopText color={MyTheme.colors.description}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</BodyTopText>
              </BodyTop>
              <BodyBottom>
                <Button as='a' href='https://www.google.ru/' btnType={'link'} primaryColor={MyTheme.colors.primaryColorSecondCard} secondaryColor={MyTheme.colors.secondaryColorSecondCard}>See more</Button>
                <Button btnType={'button'} primaryColor={MyTheme.colors.primaryColorSecondCard} secondaryColor={MyTheme.colors.secondaryColorSecondCard}>Save</Button>
              </BodyBottom>
            </Body>
          </Card>
          <Card>
            <Image src={MyTheme.images.cardImage} />
            <Body>
              <BodyTop>
                <BodyTopHeader>Headline</BodyTopHeader>
                <BodyTopText color={MyTheme.colors.description}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</BodyTopText>
              </BodyTop>
              <BodyBottom>
                <Button as='a' href='https://www.google.ru/' btnType={'link'} primaryColor={MyTheme.colors.primaryColorThirdCard} secondaryColor={MyTheme.colors.secondaryColorThirdCard}>See more</Button>
                <Button btnType={'button'} primaryColor={MyTheme.colors.primaryColorThirdCard} secondaryColor={MyTheme.colors.secondaryColorThirdCard}>Save</Button>
              </BodyBottom>
            </Body>
          </Card>
          <Card>
            <Image src={MyTheme.images.cardImage} />
            <Body>
              <BodyTop>
                <BodyTopHeader>Headline</BodyTopHeader>
                <BodyTopText color={MyTheme.colors.description}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</BodyTopText>
              </BodyTop>
              <BodyBottom>
                <Button as='a' href='https://www.google.ru/' btnType={'link'} primaryColor={MyTheme.colors.primaryColorFourthCard} secondaryColor={MyTheme.colors.secondaryColorFourthCard}>See more</Button>
                <Button btnType={'button'} primaryColor={MyTheme.colors.primaryColorFourthCard} secondaryColor={MyTheme.colors.secondaryColorFourthCard}>Save</Button>
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
gap: 10px;
padding-top: 100px;
display: grid;
grid-template-columns: repeat(4, minmax(280px, 300px));
@media ${MyTheme.mediaQueries.computer}{
  grid-template-columns: repeat(2, minmax(280px, 300px));
  justify-content: center;
  gap: 30px;
};
@media ${MyTheme.mediaQueries.tablet}{
  grid-template-columns: repeat(2, minmax(280px, 300px));
  justify-content: center;
  gap: 15px;
};
@media ${MyTheme.mediaQueries.mobile}{
  grid-template-columns: repeat(1, minmax(280px, 300px));
};
`
export default App;
