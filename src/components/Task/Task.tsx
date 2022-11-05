import { useState } from "react";
import { Typography, Box, ListItemText, ListItem } from "@mui/material";
import { Task } from "../../app/services/tasks.service";
import TodoSwitch from "../../shared/ui/TodoSwitch";
import * as styles from "./task.styles";

type Props = {
  color: string;
  task: Task;
};

const TaskItem = ({ color, task }: Props) => {
  const [isDone, setDone] = useState<boolean>(false);

  const handleSetDone = () => {
    setDone(!isDone);
  };

  const listItemTitleStyle = {
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "28px",
    m: 0,
    textDecoration: isDone ? "line-through" : "none",
  };

  const lineStyle = {
    width: "5px",
    height: "40px",
    backgroundColor: color,
    borderRadius: "12px",
    flexShrink: 0,
    mr: "20px",
  };

  return (
    <ListItem sx={styles.listItemStyle}>
      <Box sx={styles.taskStyle}>
        <Box sx={lineStyle}></Box>
        <Box sx={styles.listItemTextBoxStyle}>
          <ListItemText
            sx={listItemTitleStyle}
            primary={task.title}
            disableTypography={true}
          />
          {task.description.length ? (
            <Typography
              variant="body1"
              component="p"
              sx={styles.listItemDescStyle}
            >
              {task.description}
            </Typography>
          ) : (
            ""
          )}
        </Box>
      </Box>
      <TodoSwitch
        checked={isDone}
        onChange={handleSetDone}
        size="medium"
      ></TodoSwitch>
    </ListItem>
  );
};

export default TaskItem;
