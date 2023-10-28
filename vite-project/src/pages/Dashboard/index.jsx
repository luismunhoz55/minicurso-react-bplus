import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { DashboardContainer } from "../../styles/styles";
import api from "../../services/api";
import { Card, CardContent } from "@mui/material";

export function Dashboard() {
  const [data, setData] = useState([]);
  const [cookies] = useCookies();

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      };
      const response = await api.get("/users", config);

      setData(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  return (
    <DashboardContainer>
      {data.map((item) => (
        <Card key={item.id}>
          <CardContent>
            <img src={item.avatar} width={48} height={48} alt="" />
            <h2>{item.name}</h2>
            <p>E-mail: {item.email}</p>
          </CardContent>
        </Card>
      ))}
    </DashboardContainer>
  );
}
