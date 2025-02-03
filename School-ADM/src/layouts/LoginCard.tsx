import img from '../assets/images/logo.png';
import { Card, CardText } from './LoginCardStyle';

const LoginCard = () => {
    return(
      <>
        <Card>
            <img src={img} />
            <CardText> Card test </CardText>
        </Card>
        
      </>);
  }

export default LoginCard



