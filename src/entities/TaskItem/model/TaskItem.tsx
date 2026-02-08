import { ReactElement, useEffect, useState } from "react";
import TaskChip from "../UI/TaskChip";
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

import type { Task } from "./types";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { deleteTask } from "./slice";
import { useAppDispatch } from "@/shared/lib/hooks";

const TaskItem = ({ id, title, description, category, status, date }: Task) => {
  const [categoryIcon, setCategoryIcon] = useState<ReactElement>(<Clock />);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (category) {
      case "Home":
        setCategoryIcon(<House />);
        break;
      case "Office":
        setCategoryIcon(<Printer />);
        break;
      case "Trip":
        setCategoryIcon(<Plane />);
        break;
      case "Project":
        setCategoryIcon(<Presentation />);
        break;
      case "Other":
        setCategoryIcon(<ChartNoAxesGantt />);
        break;
    }
  }, [status]);

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

          <p className={styles.description}>{description}</p>
          <div className={styles.chip_container}>
            {status && <TaskChip title={status} icon={<Star />} />}
            {category && <TaskChip title={category} icon={categoryIcon} />}
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
