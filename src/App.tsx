import { createContext, useEffect, useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import Header from "./components/Header/Header";
import TodayTasks from "./components/TodayTasks/TodayTasks";
import NewsLine from "./components/NewsLine";
import moment from "moment";
import { Task } from "./app/services/tasks.service";
import { useTasks } from "./app/hooks/useTasks";
import TasksDate from "./components/TasksDate";

export const TasksContext = createContext<Task[] | undefined>([]);

function App() {
  const [isShow, setShow] = useState<boolean>(true);
  const { data: tasks } = useTasks();

  const todayDate = moment().format("YYYY-MM-DD");

  const dates = tasks?.map((item) => item.date);
  const uniqueDates = Array.from(new Set(dates))
    .filter((item) => item !== todayDate)
    .sort();

  return (
    <TasksContext.Provider value={tasks}>
      {isShow ? <NewsLine /> : ""}
      <Container
        maxWidth="sm"
        sx={{
          p: "13px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <header>
          <Header isShow={isShow} setShow={setShow} />
        </header>

        <main>
          <section>
            <TodayTasks />
          </section>

          {tasks && tasks.length && (
            <section>
              {uniqueDates.map((item) => (
                <TasksDate date={item} key={item} />
              ))}
            </section>
          )}
        </main>
      </Container>
    </TasksContext.Provider>
  );
}

export default App;
