import { z } from "zod";

export const schema = z.object({
  id: z.string(),
  title: z.string().min(1),
  description: z.string(),

  status: z.enum(["Favorite"]).optional(),

  category: z.enum(["Home", "Office", "Trip", "Project", "Other"]).optional(),

  date: z.string(),
  image: z.string().optional(),

  imageFile: z.instanceof(File).nullable(),
});

export type FormData = z.infer<typeof schema>;
