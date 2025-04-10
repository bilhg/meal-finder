import { z } from "zod"

export const searchSchema = z.object({
    genre: z.string().min(1, {
      message: "ジャンルを選択してください。",
    }),
    budget: z.string().min(1, {
      message: "予算を選択してください。",
    }),
    keyword: z.string().optional(),
  });
  
  export type SearchFormType = z.infer<typeof searchSchema>;