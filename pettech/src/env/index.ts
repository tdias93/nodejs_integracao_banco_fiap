import "dotenv/config";

import { z } from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.number().default(3000),
})

const _env = envSchema.safeParse(process.env);

if(!_env.success) {
    console.error("Invalid enviroment variable", _env.error.format());

    throw new Error("Invalid enviroment variable");
}

export const env = _env.data;