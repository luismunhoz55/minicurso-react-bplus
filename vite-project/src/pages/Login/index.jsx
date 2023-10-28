import { Button } from "@mui/material";
import { useState } from "react";
import LoginComponent from "../../components/LoginComponent";
import SignUpComponent from "../../components/SignUpComponent";
import { LoginContainer, LoginContent } from "../../styles/styles";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <LoginContainer>
      <LoginContent>
        {isLogin ? <LoginComponent /> : <SignUpComponent />}
        <Button
          id="buttonChangePage"
          onClick={() => {
            setIsLogin((prevIsLogin) => !prevIsLogin);
          }}
        >
          {isLogin ? "Fazer cadastro" : "Fazer Login"}
        </Button>
      </LoginContent>
    </LoginContainer>
  );
}
