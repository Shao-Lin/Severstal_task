import TaskForm from "@/features/task/upsert/ui/taskForm/TaskForm";
import Header from "@/widgets/taskFormHeader/ui/Header";
import styles from "@/shared/ui/PageLayout/PageLayout.module.css";

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
