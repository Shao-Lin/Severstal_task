import TaskItem from "../../../entities/TaskItem/ui/TaskItem/TaskItem";
import styles from "./GridTasks.module.css";
import { selectFilteredTasks } from "@/features/task/filter/model/selectors";
import { useAppSelector } from "@/shared/lib/hooks";
const GridTasks = () => {
  const tasks = useAppSelector(selectFilteredTasks);
  return (
    <div className={styles.grid_container}>
      {tasks.map((item) => (
        <TaskItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default GridTasks;
