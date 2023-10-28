import LoginComponent from "../../components/LoginComponent";
import { LoginContainer, LoginContent } from "../../styles/styles";

export default function Login() {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginComponent />
      </LoginContent>
    </LoginContainer>
  );
}
