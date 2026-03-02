import { ReactElement } from "react";
import TaskChip from "../TaskChip/TaskChip";
import styles from "./TaskItem.module.css";
import {
  ChartNoAxesGantt,
  Clock,
  House,
  Plane,
  Presentation,
  Printer,
  Star,
} from "lucide-react";
import DOMPurify from "dompurify";
import type { Task, TaskCategory } from "../../model/types";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { deleteTask } from "../../model/slice";
import { useAppDispatch } from "@/shared/lib/hooks";

const TaskItem = ({ id, title, description, category, status, date }: Task) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const categoryIconMapper: Record<TaskCategory, ReactElement> = {
    Home: <House />,
    Office: <Printer />,
    Trip: <Plane />,
    Project: <Presentation />,
    Other: <ChartNoAxesGantt />,
  };

  return (
    <article className={styles.task}>
      <div className={styles.task_container}>
        <div className={styles.top_section}>
          <div className={styles.title_container}>
            <p className={styles.title}>{title}</p>
            <div
              onClick={() => dispatch(deleteTask(id))}
              className={styles.trash}
            >
              <FaTrashAlt />
            </div>
          </div>

          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
          <div className={styles.chip_container}>
            {status && <TaskChip title={status} icon={<Star />} />}
            {category && (
              <TaskChip
                title={category}
                icon={category ? categoryIconMapper[category] : <Clock />}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={styles.bottom_section}
        onClick={() => navigate(`/task/${id}`)}
      >
        <div className={styles.click_container}>
          <p className={styles.click}> Click to edit</p>
        </div>
        <div className={styles.date_container}>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </article>
  );
};
export default TaskItem;
