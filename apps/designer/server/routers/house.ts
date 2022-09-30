import {t} from '../trpc';
import {Prisma} from '@prisma/client';

import { TRPCError } from '@trpc/server';
import {z} from 'zod';
import {prisma} from '../../server/prisma';

const defaultHouseSelect = Prisma.validator<Prisma.modelSelect>()({
        model_id: true,
        user_id: true,
        main_gate: true,
        boundary:true,
        balcony:true,
        structure_gf:true,
        structure_ff:true,
        structure_sf:true,
});

export const houseRouter = t.router({
        list:t.procedure
            .input(z.object({
                limit:z.number().optional(),
                cursor:z.number(),
            }),
            )
            .query(async ({input}) => {

                const limit = input.limit ?? 10;
                const cursor={input};
                const houses = await prisma.model.findMany({
                    take:limit,
                    select:defaultHouseSelect,
                });
                return houses;
            }),
         byId:t.procedure
                .input(z.object({
                        model_id:z.string(),
                }))
                .query(async ({input}) => {
                        const house = await prisma.model.findUnique({
                                where:{
                                        model_id:input.model_id,
                                },
                                select:defaultHouseSelect,
                        });
                        if(!house){
                                throw new TRPCError({
                                        code:'NOT_FOUND',
                                        message:'House not found',
                                });
                        }
                        return house;
                }),
        add:t.procedure
                .input(z.object({
                        model_id:z.string(),
                        user_id:z.string(),
                        main_gate:z.string(),
                        boundary:z.string(),
                        balcony:z.string(),
                        structure_gf:z.string(),
                        structure_ff:z.string(),
                        structure_sf:z.string(),
                }),
                )
                .mutation(async ({input}) => {
                        const house = await prisma.model.create({
                                data:{
                                        model_id:input.model_id,
                                        user_id:input.user_id,
                                        main_gate:input.main_gate,
                                        boundary:input.boundary,
                                        balcony:input.balcony,
                                        structure_gf:input.structure_gf,
                                        structure_ff:input.structure_ff,
                                        structure_sf:input.structure_sf,
                                },
                                select:defaultHouseSelect,
                        });
                        return house;
                })});
              
                        
