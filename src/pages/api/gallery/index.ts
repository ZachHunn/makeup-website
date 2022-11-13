import { Gallery } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getGallery } from '../../../repository/galleryRepo';

const galleryApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Gallery[]>,
) => {
  if (req.method !== 'GET') {
    throw new Error('Method not allowed');
  }

  const galleryMedia = await getGallery();

  res.status(200).json(galleryMedia);
};

export default galleryApiHandler;
