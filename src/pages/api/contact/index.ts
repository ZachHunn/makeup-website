import { z } from 'zod';
import { sendEmail } from '../../../../utils/sendgrid';
import { NextApiRequest, NextApiResponse } from 'next';

export const contactPostSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: 'Invalid email address' }),
  phone_number: z.string(),
  message: z.string(),
});

const contactApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != 'POST') {
    throw new Error('Method not allowed');
  }
  try {
    sendEmail(req.body);
  } catch (error) {
    return res.status(500).json({
      message: 'There was an error sending the email. Please try again!',
    });
  }
  return res.status(201).json({ message: 'Email has been created' });
};

export default contactApiHandler;
