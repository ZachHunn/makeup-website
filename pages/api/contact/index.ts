import { z } from 'zod';

const contactPostSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: 'Invalid email address' }),
  phone_number: z.string(),
  message: z.string(),
});
