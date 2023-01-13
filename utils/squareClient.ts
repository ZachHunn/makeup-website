import { Client, Environment } from 'square';

export const client = new Client({
  accessToken: process.env.SQUARE_SANDBOX_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});
