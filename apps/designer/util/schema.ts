import { z } from "zod";

export const viewModelSchema = z.object({
  id: z.string().uuid(),
  fileName: z.string(),
  url: z.string(),
  isVisible: z.boolean(),
});

export type viewModel = z.infer<typeof viewModelSchema>;
