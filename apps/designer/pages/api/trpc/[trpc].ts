import * as trpcNext from '@trpc/server/adapters/next';
import { createContext } from '../../../server/context';
import {appRouter} from '../../../server/routers/_app';

export default trpcNext.createNextApiHandler({
    //here all routers are binded
    router:appRouter,
    createContext,
    onError({error}){
        if(error.code==='INTERNAL_SERVER_ERROR'){
            //server error
            console.error('Something went wrong',error);
        }
    },
    /*A Batch Query enables you to request queries with long-running CPU processing times. Typically, these kind of requests raise timeout errors when using the SQL API. In order to avoid timeouts, you can use Batch Queries to create, read and cancel queries.**/
    batching:{
        enabled:true,
    },
});