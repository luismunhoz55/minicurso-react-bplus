import { Button, Card, CardContent } from "@mui/material";
import { useState } from "react";
import { HomeContainer } from "../styles/styles";

export default function Home() {
  const [num, setNum] = useState(0);

  return (
    <HomeContainer>
      <h1>Home</h1>

      <Button variant="contained" href="/login" id="login">
        <strong>Login</strong>
      </Button>

      <Card>
        <CardContent>
          <h2>
            Você apertou o botão {num} {num == 1 ? "vez" : "vezes"}
          </h2>

          <Button
            id="buttonCount"
            onClick={() => {
              setNum((prevNum) => prevNum + 1);
            }}
            variant="outlined"
          >
            Clique!
          </Button>
        </CardContent>
      </Card>
    </HomeContainer>
  );
}
