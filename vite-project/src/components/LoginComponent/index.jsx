import { TextField, Button } from "@mui/material";
import { Form, useForm } from "react-hook-form";
import { LoginStyle } from "./styles";

export default function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginStyle>
        <h1>Login</h1>
        <TextField
          {...register("email", { required: "O E-mail é obrigatório" })}
          type="email"
          id="loginEmail"
          placeholder="E-mail"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <TextField
          {...register("senha", { required: "A senha é obrigatória" })}
          type="password"
          id="loginPassword"
          placeholder="Password"
          error={!!errors.senha}
          helperText={errors?.senha?.message}
        />
        <Button type="submit" id="loginButton" variant="contained">
          Entrar
        </Button>
      </LoginStyle>
    </form>
  );
}
