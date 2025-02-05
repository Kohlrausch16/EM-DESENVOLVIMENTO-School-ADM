import LoginCard from '../layouts/LoginCard';
import { ContentArea, FlexContainer } from './FlexController';

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
