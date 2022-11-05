import { useState, useContext } from "react";
import {
  Grid,
  IconButton,
  FormControlLabel,
  Checkbox,
  Modal,
  Box,
  Backdrop,
  Fade,
  List,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TasksContext } from "../../App";
import moment from "moment";
import TaskItem from "../Task/Task";
import NewTaskForm from "../NewTaskForm";
import * as styles from "./todayTasks.styles";
import generator from "../../shared/functions/colorsLoop";

const TodayTasks = () => {
  const colors = ["#FF0000", "#366EFF", "#FFEB33"];
  const colorsLoop = generator(colors);
  const [isOpen, setOpen] = useState<boolean>(false);

  const tasks = useContext(TasksContext);

  const todayDate = moment().format("YYYY-MM-DD");

  const todayTasks = tasks?.filter((item) => item.date === todayDate);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        maxWidth="314px"
        alignItems="center"
      >
        <Grid item>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Today tasks"
          />
        </Grid>
        <Grid item>
          <IconButton size="large" onClick={handleOpen}>
            <AddIcon fontSize="inherit" />
          </IconButton>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={isOpen}>
              <Box sx={styles.modalStyle}>
                {tasks && (
                  <NewTaskForm total={tasks.length} setOpen={setOpen} />
                )}
              </Box>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
      <List sx={styles.listStyle}>
        {todayTasks?.length &&
          todayTasks.map((item, i) => {
            return (
              <TaskItem color={colorsLoop.next().value} task={item} key={i} />
            );
          })}
      </List>
    </>
  );
};

export default TodayTasks;
