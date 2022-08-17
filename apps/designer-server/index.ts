import fastify from "fastify";
// import { z } from "zod";

const server = fastify();

// const messageSchema = z.object({
//   msg: z.string(),
// });

server.get("/ping", async (request, reply) => {
  return `pong\n`;
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
