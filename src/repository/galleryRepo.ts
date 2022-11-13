import { Gallery } from '@prisma/client';
import prisma from '../../utils/prismaClient';

export const getGallery = async (): Promise<Gallery[]> => {
  return await prisma.gallery.findMany();
};

export const getGalleyMedia = async (id: number) => {
  return await prisma.gallery.findUnique({
    where: { id },
  });
};
