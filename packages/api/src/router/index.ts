// src/server/router/index.ts
import { t } from "../trpc";
import { houseRouter } from "./house";
import { userRouter } from "./user";

export const appRouter = t.router({
  house: houseRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
