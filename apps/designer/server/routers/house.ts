/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { prisma } from "../prisma";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { router, publicProcedure } from "../trpc";
/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultModelSelect = Prisma.validator<Prisma.modelSelect>()({
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
  byId: publicProcedure
    .input(
      z.object({
        model_id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { model_id } = input;
      const model = await prisma.model.findUnique({
        where: { model_id },
        select: defaultModelSelect,
      });
      if (!model) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `No post with id '${model_id}'`,
        });
      }
      return model;
    }),
  add: publicProcedure
    .input(
      z.object({
        model_id: z.string().uuid(),
        user_id: z.string().min(1).max(32),
        main_gate: z.string().min(1),
        boundary: z.string().min(1),
        balcony: z.string().min(1),
        structure_gf: z.string().min(1),
        structure_ff: z.string().min(1),
        structure_sf: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      const post = await prisma.model.create({
        data: input,
        select: defaultModelSelect,
      });
      return post;
    }),
});
