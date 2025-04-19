/* **   React imports  ** */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* **   Component imports  ** */
import {
  Card,
  Logo,
  CardText,
  TextArea,
  Input,
  ActionButton,
} from "./LoginCardStyle";

/* **   Images imports  ** */
import img from "/assets/images/logo.png";

/* **   Axios imports  ** */
import { login } from "../axios";

const LoginCard = () => {
  const navigate = useNavigate();

  /*  **  Validation of e-mail and password informed by user  ** */
  const [allowProcedeButton, setProcedeButton] = useState<boolean>(false);
  const [informedEmail, setInformedEmail] = useState<string>();
  const [informedPassword, setInformedPassword] = useState<string>();

  /*  **  useEffect that watches the state of button (available or not to press)  ** */  
  useEffect(() => {
    if (informedEmail != null && informedPassword != null) {
      setProcedeButton(true);
      console.log(informedPassword);
    }

    if (informedEmail == "" || informedPassword == "") {
      setProcedeButton(false);
    }
  }, [informedEmail, informedPassword]);

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
      submit("/home");
    }
  });

  /*  **  function that rund the login validation  ** */
  function submit(link: string) {

    let loginAccepted = false;

    login.map((item) => {
       if(item.email === informedEmail && item.password === informedPassword){
        loginAccepted = true
       }
    });

    if (loginAccepted) {
      navigate(link);
    } else {
      return <div> invalido </div>
    }
  }

  return (
    <Card>
      <Logo src={img} />
      <CardText>Realize seu login</CardText>
      <TextArea>
        <Input id="emailInput" type="email" onChange={(e) => setInformedEmail(e.target.value)} placeholder="Informe seu e-mail"/>
      </TextArea>
      <TextArea>
        <Input id="passwordInput" type="password" onChange={(e) => setInformedPassword(e.target.value)} placeholder="Informe sua senha" />
      </TextArea>
      <ActionButton value={allowProcedeButton} id="button" onClick={() => submit("/home")}> Entrar </ActionButton>
    </Card>
  );
};

export default LoginCard;
