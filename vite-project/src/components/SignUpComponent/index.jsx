import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { SignUpStyle } from "./styles";

export default function SignUpComponent() {
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
      <SignUpStyle>
        <h1>Cadastro</h1>
        <TextField
          {...register("nome", { required: "O nome é obrigatório" })}
          type="text"
          placeholder="Nome"
          error={!!errors.nome}
          helperText={errors?.nome?.message}
        />
        <TextField
          {...register("email", { required: "O email é obrigatório" })}
          type="email"
          placeholder="E-mail"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <TextField
          {...register("senha", { required: "A senha é obrigatória" })}
          type="password"
          placeholder="Senha"
          error={!!errors.senha}
          helperText={errors?.senha?.message}
        />
        <TextField
          {...register("confirmarSenha", {
            required: "É necessário confirmar a senha",
          })}
          type="password"
          placeholder="Confirmar senha"
          error={!!errors.confirmarSenha}
          helperText={errors?.confirmarSenha?.message}
        />
        <Button type="submit" variant="contained">
          Cadastrar
        </Button>
      </SignUpStyle>
    </form>
  );
}
