export type TaskStatus = "Favorite";
export type TaskCategory = "Home" | "Office" | "Trip" | "Project" | "Other";

export interface Task {
  id: string;
  title: string;
  description: string;
  category?: TaskCategory;
  status?: TaskStatus;
  image?: string;
  imageName?: string;
  date: string;
}

export interface TasksState {
  list: Task[];
}

export type ChipProps = {
  title: string;
  icon: React.ReactElement;
};
