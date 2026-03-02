import { RichTextEditor } from "@mantine/tiptap";
import styles from "./ReachTextField.module.css";
import { ReachTextFieldProps } from "../../model/types";

export const ReachTextField = ({ errors, editor }: ReachTextFieldProps) => {
  if (!editor) return null;

  return (
    <div className={styles.rte}>
      <RichTextEditor editor={editor} variant="subtle">
        <RichTextEditor.Toolbar sticky stickyOffset={60}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>

      {errors?.description?.message && <p>{errors.description.message}</p>}
    </div>
  );
};
