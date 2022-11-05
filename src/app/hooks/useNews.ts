import { useQuery } from "@tanstack/react-query";
import { NewsService } from "../services/news.service";

const randomNewsID = Math.floor(Math.random() * 10);

export const useNews = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["news"],
    queryFn: NewsService.getNews,
    select: ({ data }) => data.value[randomNewsID].name,
  });

  return {
    data,
    isLoading,
    isError,
  };
};
