import { z } from "zod";

// Schema work still under progress, this part needs to fetch the object from the JSON file. Still has issues and errors.

const FloorStructure = z.object({
  structId: z.number(),
  file: z.string().endsWith('.glb'),
  description: z.string()
})

const Floors = z.object({
  id: z.string(),
  floorName: z.string(),
  floorStructure: z.array(FloorStructure)
})

export const viewModelSchema = z.object({
  uuid: z.string().uuid(),
  type: z.string(),
  baseUrl: z.string().url(),
  floors: z.array(Floors),
});

export type viewModel = z.infer<typeof viewModelSchema>;
