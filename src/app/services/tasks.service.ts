import axios from "axios";

const API_URL = "http://localhost:3004";

axios.defaults.baseURL = API_URL;

export type Task = {
  id: number;
  date: string;
  title: string;
  description: string;
};

export const TasksService = {
  async getAll() {
    return axios.get<Task[]>("/tasks");
  },
  async create(data: Task) {
    return axios.post<Task>("/tasks", data);
  },
};
