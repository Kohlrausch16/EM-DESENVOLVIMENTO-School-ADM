/* **   Component imports  ** */
import LoginCard from '../layouts/LoginCard';
import { ContentArea, FlexContainer } from './LoginStyle';

const Login = () =>{
    return(
        <ContentArea>
            <FlexContainer>
              <LoginCard />
            </FlexContainer>
        </ContentArea>
    );
  }

export default Login;