import { z } from "zod";

// Schema work still under progress, this part needs to fetch the object from the JSON file. Still has issues and errors.
export const dataModelSchema = z.object({
  type: z.string(),
  url: z.string().url(),
  floors: z.array(
    z.object({
      id: z.string(),
      type: z.string(),
      description: z.string(),
      file: z.string().endsWith(".glb"),
    })
  ),
});

export type viewModel = z.infer<typeof dataModelSchema>;

//done validation using zod
