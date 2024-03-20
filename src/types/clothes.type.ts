import { z } from "zod";

export const clotheFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 5 characters.",
  }),
  size: z.array(z.string()).optional(),
  price: z.string(),
  sizeInput: z.string().optional(),
  des: z.string().optional(),
  category: z.string(),
  image: z.string().url({ message: "Provide a valid url !" }),
});

export type TClothe = z.infer<typeof clotheFormSchema>;
