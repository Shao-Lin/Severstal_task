import TaskForm from "@/features/task/upsert/ui/taskForm/TaskForm";
import Header from "@/widgets/taskFormHeader/ui/Header";
import styles from "@/shared/ui/PageLayout/PageLayout.module.css";
import { selectAllTasks } from "@/entities/TaskItem/model/slice";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@/shared/lib/hooks";
const EditPage = () => {
  const { id } = useParams<{ id: string }>();
  const tasks = useAppSelector(selectAllTasks);
  const task = tasks.find((t) => t.id === id);

  return (
    <div className={styles.page}>
      <div className={styles.page_container}>
        <Header title="Edit" />
        <TaskForm task={task} />
      </div>
    </div>
  );
};
export default EditPage;
