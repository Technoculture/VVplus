// src/server/router/index.ts
import { t } from "../trpc";
import { houseRouter } from "./house";
import { userRouter } from "./user";

export const appRouter = t.router({
  user: userRouter,
  house: houseRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
