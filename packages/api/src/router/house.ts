import { User } from "@prisma/client";
import { observable } from "@trpc/server/observable";
import { EventEmitter } from "events";
import { prisma } from "../../../db/index";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { Prisma } from "@prisma/client";

const defaultModelSelect = Prisma.validator<Prisma.ModelSelect>()({
  model_id: true,
  user_id: true,
  main_gate: true,
  boundary: true,
  balcony: true,
  structure_gf: true,
  structure_ff: true,
  structure_sf: true,
});

export const houseRouter = router({
  addHouse: publicProcedure
    .input(
      z.object({
        model_id: z.string(),
        user_id: z.string(),
        main_gate: z.string(),
        boundary: z.string(),
        balcony: z.string(),
        structure_gf: z.string(),
        structure_ff: z.string(),
        structure_sf: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const house = await prisma.model.create({
        data: {
          model_id: input.model_id,
          user_id: input.user_id,
          main_gate: input.main_gate,
          boundary: input.boundary,
          balcony: input.balcony,
          structure_gf: input.structure_gf,
          structure_ff: input.structure_ff,
          structure_sf: input.structure_sf,
        },
        select: defaultModelSelect,
      });
      return house;
    }),
});
