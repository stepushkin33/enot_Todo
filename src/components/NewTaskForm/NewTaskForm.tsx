import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { FormControl, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useCreateTask } from "../../app/hooks/useCreateTask";
import { Task } from "../../app/services/tasks.service";
import * as styles from "./newTaskForm.styles";

const initialData: Task = {
  id: 0,
  date: dayjs().format("YYYY-MM-DD"),
  title: "",
  description: "",
};

type Props = {
  total: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewTaskForm = ({ total, setOpen }: Props) => {
  const [newTaskData, setNewTaskData] = useState<Task>(initialData);
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [id, setId] = useState<number>(total);

  const handleSetDate = (value: Dayjs | null) => {
    setDate(value);
    value &&
      setNewTaskData({ ...newTaskData, date: value.format("YYYY-MM-DD") });
  };

  const { mutate } = useCreateTask();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    setNewTaskData({ ...newTaskData, id: id });
    setTitle("");
    setDescription("");
    setDate(dayjs());
    mutate(newTaskData);
    setOpen(false);
  };

  const handleSetTitle = (value: string) => {
    setTitle(value);
    setNewTaskData({ ...newTaskData, title: value });
    setId(id + 1);
  };

  const handleSetDescription = (value: string) => {
    setDescription(value);
    setNewTaskData({ ...newTaskData, description: value });
  };

  return (
    <FormControl sx={styles.formStyle}>
      <Typography variant="h4" component="label">
        {" "}
        Add Task{" "}
      </Typography>
      <TextField
        label="Type a tasks title"
        value={title}
        onChange={(event) => handleSetTitle(event.target.value)}
      />
      <TextField
        multiline
        rows={4}
        label="Type a tasks description"
        value={description}
        onChange={(event) => handleSetDescription(event.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          disablePast={true}
          label="Pick a tasks date"
          inputFormat="YYYY-MM-DD"
          value={date}
          onChange={handleSetDate}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled={!(date && title.length)}
        >
          Create Task
        </Button>
      </LocalizationProvider>
    </FormControl>
  );
};

export default NewTaskForm;
