import img from '../assets/images/logo.png';
import { Card, Logo, CardText, TextArea, Input, ActionButton } from './LoginCardStyle';

const LoginCard = () => {
    return(
      <>
        <Card>
            <Logo src={img}/>
            <CardText> Realize seu login </CardText>
            <TextArea>
              <Input type='text' placeholder='Informe seu e-mail'/>
            </TextArea>
            <TextArea>
              <Input type='text' placeholder='Informe sua senha'/>
            </TextArea>
            <ActionButton> Entrar </ActionButton>
        </Card>
        
      </>);
  }

export default LoginCard



