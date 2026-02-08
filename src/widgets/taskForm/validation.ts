import * as Yup from "yup";

export const schema = Yup.object({
  title: Yup.string().required("Введите название"),
  description: Yup.string().required("Описание обязательно"),
  status: Yup.string(),
  category: Yup.string(),
  image: Yup.string(),
});
