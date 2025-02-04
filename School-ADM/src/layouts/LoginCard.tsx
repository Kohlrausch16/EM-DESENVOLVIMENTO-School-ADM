import img from '../assets/images/logo.png';
import { Card, Logo, CardText, TextArea, Input, ActionButton } from './LoginCardStyle';
import { login } from '../axios';


const emailContent = document.getElementById('# emailInput');
const passwordContent = document.getElementById('# passwordInput');


function submit(){

  if(emailContent === null || passwordContent === null){
    alert('E-mail ou senha não informados!');
  } else {
    alert('Login realizado com sucesso!');
  }

};


const LoginCard = () => {
    return(
      <>
        <Card>
            <Logo src={img}/>
            <CardText> Realize seu login </CardText>
              <TextArea>
                  <Input id="emailInput" type='text' placeholder='Informe seu e-mail'/>
              </TextArea>
              <TextArea>
                  <Input id="passwordInput" type='text' placeholder='Informe sua senha'/>
              </TextArea>
              <ActionButton id="button" onClick={submit}> Entrar </ActionButton>
        </Card>
      </>);
  }

export default LoginCard



