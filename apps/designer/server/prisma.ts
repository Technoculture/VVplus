import {env} from './env';
import {PrismaClient} from '@prisma/client';

const prismaGlobal = global as typeof global & {
    prisma?: PrismaClient;
};

export const prisma: PrismaClient = prismaGlobal.prisma || new PrismaClient({
    log: env.NODE_ENV === 'development' ? ['query','error','warn'] : ['error'],
});
/**
 * this line of code creating error because due to updates in glbals in nodejs and i am finding any proper alternatiivef o thq
 */


// if(env.NODE_ENV !== 'production'){
//     global.prisma = ()=>prisma;
// }