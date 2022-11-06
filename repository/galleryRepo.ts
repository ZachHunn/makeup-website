import { PrismaClient, Gallery } from '@prisma/client';

const prisma = new PrismaClient();

export const getImages = async () => {
  return await prisma.gallery.findMany();
};

export const getImage = async (id: number) => {
  return await prisma.gallery.findMany({
    where: { id },
  });
};
