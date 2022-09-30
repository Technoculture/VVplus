import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { type } from 'os';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateContextOptions {
    //session: Session| null;
}

/**
 * inner function to create context where we create the context.
 * this is useful for testing when we don't want to use the next.js request response
 */


export async function createContextInner(_opts: CreateContextOptions) {
    return {
        //session: opts.session,
    };
}   
export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;


/**
 * Create context for incoming request
 * @link https://trpc.io/docs/context
 */

export async function createContext(opts:trpcNext.CreateNextContextOptions,): Promise<Context> {
    return await createContextInner({});
}