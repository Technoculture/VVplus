import { router, baseProcedure } from "../trpc";

export const houseRouter = router({
  house: baseProcedure.query(() => "yay!"),
});
