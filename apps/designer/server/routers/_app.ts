import {houseRouter} from './house';
import {t} from '../trpc'
export const appRouter = t.router({
    house:houseRouter
});

export type AppRouter = typeof appRouter;