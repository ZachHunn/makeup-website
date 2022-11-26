import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError, ApiResponse } from 'square';
import { client } from '../../../../utils/squareClient';

export const paymentApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse<ApiError<{}> | ApiResponse<{}>>,
) => {};
