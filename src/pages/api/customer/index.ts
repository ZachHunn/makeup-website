import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { client } from '../../../../utils/squareClient';

export const customerPostSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
});

const customerApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const customer = client.customersApi;
  if (req.method !== 'POST') {
    throw new Error('method not allowed');
  }
  try {
    await customer.createCustomer(req.body);
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'There was an error creating the new customer' });
  }
  return res.status(201).json({ message: 'created' });
};

export default customerApiHandler;
