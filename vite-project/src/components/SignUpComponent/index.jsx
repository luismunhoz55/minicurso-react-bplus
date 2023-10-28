import { Button, TextField } from "@mui/material";
import { SignUpStyle } from "./styles";

export default function SignUpComponent() {
  return (
    <SignUpStyle>
      <h1>Cadastro</h1>
      <TextField type="text" placeholder="Nome" />
      <TextField type="email" placeholder="E-mail" />
      <TextField type="password" placeholder="Senha" />
      <TextField type="password" placeholder="Confirmar senha" />
      <Button variant="contained">Cadastrar</Button>
    </SignUpStyle>
  );
}
