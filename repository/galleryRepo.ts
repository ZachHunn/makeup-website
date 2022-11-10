import { Gallery } from '@prisma/client';
import prisma from '../prisma/prisma';

export const getGalleryImages = async (): Promise<Gallery[]> => {
  return await prisma.gallery.findMany();
};

export const getGalleyImage = async (id: number) => {
  return await prisma.gallery.findUnique({
    where: { id },
  });
};
