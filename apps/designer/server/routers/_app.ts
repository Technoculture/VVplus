import {t} from '../trpc';
import {houseRouter} from './house';

export const appRouter = t.router({
    house: houseRouter,
}); 
// Language: typescript
// Path: apps\designer\server\routers\_house.ts
// Compare this snippet from apps\designer\server\context.ts:
export type AppRouter = typeof appRouter;