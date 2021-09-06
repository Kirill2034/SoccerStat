import React, { useState, useEffect } from "react";
import { API_CLIENT } from "../../api/config";
import { LeagueList } from "../../components/LeagueList";
import { Pagination } from "../../components/Pagination";
import { ScreenListHeader } from "../../components/ScreenListHeader";
import { toast } from "react-toastify";
import Container from "@material-ui/core/Container";

function Leagues() {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [carrentPage, setCarrentPage] = useState(1);
  const [leaguesPerPage] = useState(10);

  useEffect(() => {
    const getLeagues = async () => {
      setLoading(true);

      try {
        const { data } = await API_CLIENT.get(
          "https://api.football-data.org/v2/competitions"
        );
        setLeagues(data.competitions);
      } catch (e) {
        toast.error("Ошибка при загрузке команд");
      } finally {
        setLoading(false);
      }
    };

    getLeagues();
  }, []);

  const lastLeaguesIndex = carrentPage * leaguesPerPage;
  const firstLeaguesIndx = lastLeaguesIndex - leaguesPerPage;
  const currentLeagues = leagues.slice(firstLeaguesIndx, lastLeaguesIndex);

  const paginate = (pageNumber) => setCarrentPage(pageNumber);

  return (
    <div>
      <ScreenListHeader />

      <Container>
        <h1>Страница Лиг</h1>

        {loading ? (
          <h2>Загрузка...</h2>
        ) : (
          <LeagueList leagues={currentLeagues} />
        )}

        <Pagination
          perPage={leaguesPerPage}
          total={leagues.length}
          paginate={paginate}
        />
      </Container>
    </div>
  );
}

export default Leagues;
