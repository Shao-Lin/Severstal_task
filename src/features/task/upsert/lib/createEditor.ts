import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { normalizeHtml } from "./normalizeHtml";
import Highlight from "@tiptap/extension-highlight";
import { UseTaskEditorArgs } from "../model/types";

export const useTaskEditor = ({
  description,
  setFieldValue,
}: UseTaskEditorArgs) => {
  return useEditor({
    shouldRerenderOnTransaction: true,
    extensions: [StarterKit, Highlight],
    content: description || "<p></p>",
    onUpdate: ({ editor }) => {
      setFieldValue("description", normalizeHtml(editor.getHTML()));
    },
  });
};
