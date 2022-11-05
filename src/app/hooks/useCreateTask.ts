import { useMutation } from "@tanstack/react-query";
import { TasksService, Task } from "../services/tasks.service";
import { queryClient } from "../../index";

export const useCreateTask = () => {
  const { isLoading, isSuccess, isError, mutate } = useMutation({
    mutationFn: (data: Task) => TasksService.create(data),
    onSuccess: () => queryClient.invalidateQueries(["task list"]),
  });

  return {
    isError,
    isLoading,
    isSuccess,
    mutate,
  };
};
