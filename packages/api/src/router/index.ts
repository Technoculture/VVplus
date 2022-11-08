// src/server/router/index.ts
import { t } from "../trpc";
import { houseRouter } from "./house";

export const appRouter = t.router({
  house: houseRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
