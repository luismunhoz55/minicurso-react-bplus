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
    <>
      <DashboardContainer>
        <h1 className="font-bold text-3xl text-center mt-5">Usuários</h1>

        <div className="grid grid-cols-3 gap-5 p-5">
          {data.map((item) => (
            <Card
              key={item.id}
              className="hover:scale-110 hover:transition-all"
            >
              <CardContent className="flex flex-col gap-1">
                <img src={item.avatar} width={48} height={48} alt="" />
                <h2 className="font-bold">{item.name}</h2>
                <p>{item.email}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </DashboardContainer>
    </>
  );
}
