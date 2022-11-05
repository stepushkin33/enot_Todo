import React from "react";
import { useContext } from "react";
import { TasksContext } from "../../App";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TaskItem from "../Task/Task";
import * as styles from "./taskDate.styles";
import generator from "../../shared/functions/colorsLoop";

type Props = {
  date: string;
};

const TasksDate = ({ date }: Props) => {
  const colors = ["#FF0000", "#366EFF", "#FFEB33"];
  const colorsLoop = generator(colors);
  const tasks = useContext(TasksContext);

  const thisDateTasks = tasks?.filter((item) => item.date === date);

  return (
    <Box component="article" sx={styles.accordStyle}>
      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={styles.accordSumStyle}
        >
          <Box sx={styles.boxStyle}>
            <Box sx={styles.lineStyle}> </Box>
            <Typography
              sx={styles.textStyle}
              variant="h5"
              component={"p"}
            >{`${date} Tasks`}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "#282828", p: 0 }}>
          {thisDateTasks?.length && (
            <List
              sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {thisDateTasks.map((item, i) => {
                return (
                  <TaskItem
                    color={colorsLoop.next().value}
                    task={item}
                    key={i}
                  />
                );
              })}
            </List>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TasksDate;
