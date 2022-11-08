import { PrismaClient, Gallery } from '@prisma/client';

const prisma = new PrismaClient();

export const getGalleryImages = async (): Promise<Gallery[]> => {
  return await prisma.gallery.findMany();
};

export const getGalleyImage = async (id: number) => {
  return await prisma.gallery.findUnique({
    where: { id },
  });
};
