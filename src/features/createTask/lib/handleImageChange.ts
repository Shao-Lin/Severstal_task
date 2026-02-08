import { fileToBase64 } from "@/shared/lib/fileHelper";

export const handleImageChange =
  (setFieldValue: (field: string, value: unknown) => void) =>
  async (file: File | null) => {
    setFieldValue("imageFile", file);

    if (!file) {
      setFieldValue("image", undefined);
      return;
    }

    const base64 = await fileToBase64(file);
    setFieldValue("image", base64);
  };
