import { Gallery } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { getGalleryImages } from '../../../repository/galleryRepo';

export const galleryApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Gallery[]>,
) => {
  if (req.method !== 'GET') {
    throw new Error('Method not allowed');
  }

  const galleryImages = await getGalleryImages();

  res.status(200).json(galleryImages);
};

export default galleryApiHandler;
