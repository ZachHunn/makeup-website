import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError, ApiResponse } from 'square';
import { client } from '../../../../utils/squareClient';

const bookingApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiError<{}> | ApiResponse<{}>>,
) => {
  const booking = client.bookingsApi;
  if (req.method !== 'GET') {
    throw new Error('method not allowed');
  }
  console.log((await booking.listBookings()).result.bookings);
};

export default bookingApiHandler;
