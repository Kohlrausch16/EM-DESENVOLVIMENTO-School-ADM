import LoginCard from '../layouts/LoginCard';
import { BackgroundImage, ContentArea, FlexContainer } from './FlexController';

const Login = () =>{
    return(
      <>
        <ContentArea>
          <BackgroundImage>
            <FlexContainer>
              <LoginCard />
            </FlexContainer>
          </BackgroundImage>
        </ContentArea>
      </>);
  }

export default Login;
