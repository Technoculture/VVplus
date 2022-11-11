import { user } from "@prisma/client";
import { observable } from "@trpc/server/observable";
import { EventEmitter } from "events";
import { prisma } from "../../../db/index";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { Prisma } from "@prisma/client";

const defaultUserSelect = Prisma.validator<Prisma.userSelect>()({
  user_id: true,
  name: true,
  phone_number: true,
  email_id: true,
});

export const userRouter = router({
  addPhoneNumber: publicProcedure
    .input(
      z.object({
        user_id: z.string(),
        name: z.string(),
        phone_number: z.string(),
        email_id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const user = await prisma.user.create({
        data: input,
        select: defaultUserSelect,
      });
      return user;
    }),
});
