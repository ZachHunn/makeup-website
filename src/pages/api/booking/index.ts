import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError, ApiResponse } from 'square';
import { client } from '../../../../utils/squareClient';
import dayjs from 'dayjs';
import { z } from 'zod';

export const bookingPostSchema = z.object({
  booking: z.object({
    startAt: z.string(),
    locationId: z.string(),
    customerId: z.string(),
    cusomrtNote: z.string().optional(),
    appointmentSegments: z.array(
      z.object({
        durationMinutes: z.number(),
        serviceVariationId: z.string(),
        teamMemberid: z.string().uuid(),
        serviceVariationVersion: z.bigint(),
      }),
    ),
    locationType: z.string(),
  }),
});

const bookingApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const booking = client.bookingsApi;
  if (req.method !== 'POST') {
    throw new Error('method not allowed');
  }

  try {
    await booking.createBooking(req.body);
  } catch (error) {
    return res.status(500).json(error);
  }

  return res.status(201).json({ message: 'New appointment created' });
};

export default bookingApiHandler;
