import { TextField, Button } from "@mui/material";
import { LoginStyle } from "./styles";

export default function LoginComponent() {
  return (
    <LoginStyle>
      <h1>Login</h1>
      <TextField
        type="email"
        name="loginEmail"
        id="loginEmail"
        placeholder="E-mail"
      />
      <TextField
        type="password"
        name="loginPassword"
        id="loginPassword"
        placeholder="Password"
      />
      <Button id="loginButton" variant="contained">
        Entrar
      </Button>
    </LoginStyle>
  );
}
