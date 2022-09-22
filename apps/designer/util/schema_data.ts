import { z } from "zod";

// Schema work still under progress, this part needs to fetch the object from the JSON file. Still has issues and errors.
export const dataModelSchema = z.object({
  type: z.string(),
  url: z.string().url(),
  floors: z.array(
    z.object({
      id: z.string(),
      file: z.string().endsWith(".glb"),
      description: z.string(),
    })
  ),
});

export type viewModel = z.infer<typeof dataModelSchema>;

//yet there are changes to be made in this schema
