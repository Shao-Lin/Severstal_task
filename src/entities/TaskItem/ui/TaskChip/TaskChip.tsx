import { Chip } from "@mantine/core";
import styles from "./TaskChip.module.css";
import { ChipProps } from "../../model/types";

const TaskChip = ({ title, icon }: ChipProps) => {
  return (
    <Chip
      icon={<span className={styles.chip_icon}>{icon}</span>}
      checked={true}
      color="gray"
      variant="outline"
      size="xs"
    >
      {title}
    </Chip>
  );
};
export default TaskChip;
