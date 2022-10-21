/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from "../trpc";
import   {houseRouter } from "./house";

export const appRouter = router({
  house: houseRouter,
});

export type AppRouter = typeof appRouter;
