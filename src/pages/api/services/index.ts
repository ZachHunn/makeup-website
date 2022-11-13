import { NextApiRequest, NextApiResponse } from 'next';
import { ServiceItem } from '@prisma/client';
import { getServiceItems } from '../../../repository/servicesRepo';

const serviceItemApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<ServiceItem[]>,
) => {
  if (req.method !== 'GET') {
    throw new Error('Method Not Allowed');
  }

  const serviceItems = await getServiceItems();

  res.status(200).json(serviceItems);
};

export default serviceItemApiHandler;
