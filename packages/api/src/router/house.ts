import { t } from "../trpc";
import { z } from "zod";

export const houseRouter = t.router({
  all: t.procedure.query(({ ctx }) => {
    return ctx.prisma.model.findMany();
  }),
  byId: t.procedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.model.findFirst({ where: { model_id: input } });
  }),
  create: t.procedure
    .input(z.object({ model_id: z.string() }))
    .mutation(({ ctx, input }) => {
      return "data created";
    }),
});
