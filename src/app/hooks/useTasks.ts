import { useQuery } from "@tanstack/react-query";
import { TasksService } from "../services/tasks.service";

export const useTasks = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["task list"],
    queryFn: TasksService.getAll,
    select: ({ data }) => data,
  });

  return {
    data,
    isLoading,
    isError,
  };
};
