import React, { useEffect, useState } from "react";
import { API_CLIENT } from "../../api/config";
import { TeamList } from "../../components/TeamList";
import { Pagination } from "../../components/Pagination";
import { toast } from "react-toastify";
import { ScreenListHeader } from "../../components/ScreenListHeader";
import Container from "@material-ui/core/Container";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [carrentPage, setCarrentPage] = useState(1);
  const [teamsPerPage] = useState(10);

  useEffect(() => {
    const getTeams = async () => {
      setLoading(true);

      try {
        const { data } = await API_CLIENT.get(
          "https://api.football-data.org/v2/teams"
        );

        setTeams(data.teams);
      } catch (e) {
        toast.error("Ошибка при загрузке команд");
      } finally {
        setLoading(false);
      }
    };

    getTeams();
  }, []);

  const lastTeamsIndex = carrentPage * teamsPerPage;
  const firstTeamsIndex = lastTeamsIndex - teamsPerPage;
  const currentTeams = teams.slice(firstTeamsIndex, lastTeamsIndex);

  const paginate = (pageNumber) => setCarrentPage(pageNumber);

  return (
    <div>
      <ScreenListHeader />

      <Container>
        <h1>Страница Команд</h1>

        {loading ? <h2>Загрузка...</h2> : <TeamList teams={currentTeams} />}

        <Pagination
          perPage={teamsPerPage}
          total={teams.length}
          paginate={paginate}
        />
      </Container>
    </div>
  );
}

export default Teams;
