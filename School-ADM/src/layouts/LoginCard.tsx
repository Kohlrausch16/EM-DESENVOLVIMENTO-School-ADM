import { useRef } from 'react';
import img from '../assets/images/logo.png';
import { Card, Logo, CardText, TextArea, Input, ActionButton } from './LoginCardStyle';
import { login } from '../axios';


const LoginCard = () => {

  const emailContent = useRef<HTMLInputElement | null>(null);
  const passwordContent = useRef<HTMLInputElement | null>(null);


  function submit(){

    const emailValue = emailContent.current ? emailContent.current.value : '';
    const passwordValue = passwordContent.current ? passwordContent.current.value : '';

    console.log(emailValue);
    console.log(passwordValue);

      if(emailValue === ''|| passwordValue === ''){
        alert('E-mail ou senha não informados!');
      } else {
        if(emailValue === login.email && passwordValue === login.password){
          alert('Login realizado com sucesso!');
        } else {
          alert('Email e/ou senha incorretos');
        }
        
      }

    }
    
    return(
      <>
        <Card>
            <Logo src={img}/>
            <CardText> Realize seu login </CardText>
              <TextArea>
                  <Input id="emailInput" ref={emailContent} type='email' placeholder='Informe seu e-mail'/>
              </TextArea>
              <TextArea>
                  <Input id="passwordInput" ref={passwordContent} type='password' placeholder='Informe sua senha'/>
              </TextArea>
              <ActionButton id="button" onClick={submit}> Entrar </ActionButton>
        </Card>
      </>);
  };

export default LoginCard



