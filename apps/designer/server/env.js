// eslint-disable-next-line @typescript-eslint/no-var-requires
const {z} = require('zod');

/*eslint sort-keys: "error"*/
const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(['development', 'production', 'test']),
});

const env = envSchema.parse(process.env);

if(!env.success){
    console.error('Environment variables are not valid',
    JSON.stringify(env.error.format(),null,4),);
    process.exit(1);
}

module.exports.env = env.data;