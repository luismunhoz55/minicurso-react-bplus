import { TextField, Button } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { LoginStyle } from "./styles";

export default function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { SignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await SignIn(data.email, data.senha);

      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        alert("Falha na autenticação");
      }
    } catch (error) {
      return error;
    }

    if (response.status === 200) {
      navigate("/dashboard");
    } else if (!response.status) {
      alert("Falha na autenticação");
    }
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
