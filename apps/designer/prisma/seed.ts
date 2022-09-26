/* This file updated-c */


/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const firstHouseId =1;
  const firstUserId=1;
  const main_gate_id=1;
  const boundary=1;
  const balcony=1;
  const structure_gf=1;
  const structure_ff=1;
  const structure_sf=1;
  await prisma.house.upsert({
    where: {
      model_id: firstHouseId,
      user_id:firstUserId,
      main_gate:main_gate_id,
      boundary:boundary,
      balcony:balcony,
      structure_gf:structure_gf,
      structure_ff:structure_ff,
      structure_sf:structure_sf
    },
    create: {
      model_id: firstHouseId,
      user_id:firstUserId,
      main_gate:main_gate_id,
      boundary:boundary,
      balcony:balcony,
      structure_gf:structure_gf,
      structure_ff:structure_ff,
      structure_sf:structure_sf

    },
    update: {},
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
