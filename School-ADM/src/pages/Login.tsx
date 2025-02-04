import LoginCard from '../layouts/LoginCard';
import { ContentArea, FlexContainer } from './LoginFlexController';

const Login = () =>{
    return(
      <>
        <ContentArea>
          <FlexContainer>
              <LoginCard />
            </FlexContainer>
          </ContentArea>
      </>);
  }

export default Login;
