import { router, publicProcedure } from '../trpc';

export const houseRouter = router({
  house: publicProcedure.query(() => 'yay!'),
});
