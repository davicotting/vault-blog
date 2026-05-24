import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error('Invalid environment variables');
}

export const env = parsed.data;
