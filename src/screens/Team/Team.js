import React, { useState, useEffect } from "react";
import { useParams, useHistory, generatePath } from "react-router-dom";
import { API_CLIENT } from "../../api/config";
import { MatchList } from "../../components/MatchList";
import DatePicker from "react-datepicker";
import { Routes } from "../../common/Routes";
import { useQuery } from "../../hooks/useQuery";
import qs from "query-string";
import format from "date-fns/format";
import { toast } from "react-toastify";
import { ScreenListHeader } from "../../components/ScreenListHeader";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function Team() {
  const history = useHistory();
  const { teamId } = useParams();
  const query = useQuery();

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  const dateFrom = query.get("dateFrom");
  const dateTo = query.get("dateTo");

  const selectedDateFrom = dateFrom ? new Date(dateFrom) : null;
  const selectedDateTo = dateTo ? new Date(dateTo) : null;

  useEffect(() => {
    const getTeamMatches = async () => {
      setLoading(true);

      try {
        const search = qs.stringify({ dateFrom, dateTo });

        const { data } = await API_CLIENT.get(
          `https://api.football-data.org/v2/teams/${teamId}/matches?${search}`
        );

        setMatches(data.matches);
      } catch (e) {
        toast.error("Ошибка при загрузке матчей команды");
      } finally {
        setLoading(false);
      }
    };

    if ((dateFrom && !dateTo) || (!dateFrom && dateTo)) {
      toast.error("Пожалуйста, выберите обе даты!");
      return;
    }

    getTeamMatches();
  }, [teamId, dateFrom, dateTo]);

  const onSetDateFrom = (date) => {
    if (selectedDateTo && date > selectedDateTo) {
      toast.error("Дата начала не может быть больше даты окончания!");
      return;
    }

    pushToHistory({ from: format(date, "yyyy-MM-dd"), to: dateTo });
  };

  const onSetDateTo = (date) => {
    if (selectedDateFrom && date < selectedDateFrom) {
      toast.error("Дата окончания не может быть меньше даты начала!");
      return;
    }

    pushToHistory({ from: dateFrom, to: format(date, "yyyy-MM-dd") });
  };

  const pushToHistory = ({ from, to }) => {
    const search = qs.stringify({ dateFrom: from, dateTo: to });

    history.push({ pathname: generatePath(Routes.TEAM, { teamId }), search });
  };

  return (
    <div>
      <ScreenListHeader />
      <Container>
        <h1>Страница Команды</h1>

        <Box mt={2} mb={2} display="flex">
          <Box mr={2}>
            <DatePicker
              selected={selectedDateFrom}
              onChange={onSetDateFrom}
              placeholderText="Выберите дату начала"
            />
          </Box>

          <Box>
            <DatePicker
              selected={selectedDateTo}
              onChange={onSetDateTo}
              placeholderText="Выберите дату окончания"
            />
          </Box>
        </Box>

        {loading ? <h2>Загрузка...</h2> : <MatchList matches={matches} />}
      </Container>
    </div>
  );
}

export default Team;
