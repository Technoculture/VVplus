import {t} from '../trpc';
import {Prisma} from '@prisma/client';
import { TRPCError } from '@trpc/server';
import {number, z} from 'zod';
import {prisma} from '../../server/prisma';


// default selector in order not to leak sensitive in froamtiion
const defaultHouseSelect = Prisma.validator<Prisma.HouseSelect>()({
model_id:true,
user_id:true,
main_gate:true,
boundary:true,
balcony:true,
structure_gf:true,
structure_ff:true,
structure_sf:true
});

export const houseRouter = t.router(
    {
        list:t.procedure
            .input(
                z.object({
                    limit:z.number().min(1).max(100).nullish(),
                    cursor: z.string.nullish(),
                }),
            )
            .query(async ({input})=>{
                const limit = input.limit ?? 50;
                const {cursor} = input;

                const items = await prisma.house.findMany({
                    select:defaultHouseSelect,
                    take:limit+1,
                    where:{},
                    cursor:cursor
                    ? {
                        id:cursor,
                      }
                     : undefined,
                    orderBy:{
                        createdAt:'desc',
                    },
                });
                let nextCursor: trypeof cursor | undefined = undefined;

                if(items.length>limit){
                    const nextItem =items.pop()!;
                    nextCursor:nextItem.id;
                }

                return {
                    items : items.reverse(),
                    nextCursor,
                };
            }),
        byId:t.procedure
            .input(
                z.object({
                    model_id:z.number(),
                }),
            )
            .query(async ({input})=>{
                const {model_id} =input;
                const house= await prisma.house.findUnique({
                    where:{model_id},
                    select : defaultHouseSelect,
                });
                if(!house){
                    throw new TRPCError({
                        code: 'NOT_FOUND',
                        message:`No house with id '${model_id}'`,
                    });
                }
                return house;
            }),
        add:t.procedure
            .input(
                z.object({
                    model_id:z.number(),
                    user_id :z.number(),
                    main_gate:z.number(),
                    boundary:z.number(),
                    balcony:z.number(),
                    structure_gf:number(),
                    structure_ff:number(),
                    structure_sf:number()
                }),
            )
            .mutation(async ({input})=>{
                const house = await prisma.house.create({
                    data:input,
                    Select:defaultHouseSelect,
                });
                return house;
            }),
    }
)