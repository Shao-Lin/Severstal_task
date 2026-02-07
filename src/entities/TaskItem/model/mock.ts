import type { Task } from "./types";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Задача номер 1",
    description:
      "Описание задачи таково,какаво никакаво иначе,а может и такава",
    category: "Documentation",
    status: "Done",
    priority: "High",
    date: "Jun 10 2014",
  },
  {
    id: "2",
    title: "Задача номер 1",
    description:
      "Описание задачи таково,какаво никакаво иначе,а может и такава",
    category: "Documentation",
    status: "In Progress",
    priority: "High",
    date: "Jun 10 2014",
  },
  {
    id: "3",
    title: "Задача номер 1",
    description:
      "Описание задачи таково,какаво никакаво иначе,а может и такава",
    category: "Documentation",
    status: "To Do",
    priority: "Low",
    date: "Jun 10 2014",
  },
  {
    id: "4",
    title: "Задача номер 1",
    description:
      "Описание задачи таково,какаво никакаво иначе,а может и такава",
    category: "Refactor",
    status: "In Progress",
    priority: "Medium",
    date: "Jun 10 2014",
  },
  {
    id: "5",
    title: "Задача номер 2",
    description:
      "Описание задачи таково,какаво никакаво иначе,а может и такава",
    category: "Bug",
    status: "In Progress",
    priority: "High",
    date: "Jun 10 2014",
  },
  {
    id: "6",
    title: "Задача номер 1",
    description:
      "Описание задачи таково,какаво никакаво иначе,а может и такава",
    category: "Test",
    status: "In Progress",
    priority: "High",
    date: "Jun 10 2014",
  },
];

const data1 = ["Bug", "Feature", "Documentation", "Refactor", "Test"];
const data2 = ["To Do", "In Progress", "Done"];
const data3 = ["Low", "Medium", "High"];
export const ph = ["Category", "Status", "Priority"];
export const allData = [data1, data2, data3];
