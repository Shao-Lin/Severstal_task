import TaskForm from "@/widgets/taskForm/TaskForm";
import Header from "@/widgets/taskFormHeader/Header";
import styles from "./ChangePages.module.css";

const CreatePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.page_container}>
        <Header title="Create" />
        <TaskForm />
      </div>
    </div>
  );
};
export default CreatePage;
