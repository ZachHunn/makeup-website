import { Gallery } from '@prisma/client';
import prisma from '../utils/prismaClient';
// @ts-ignore
import { createServiceItems } from '../repository/servicesRepo';
import { getMediaItemsFromStorgae, serviceItems } from './setupSeed';

import { GalleryMedia } from './setupSeed';

async function seedGallery() {
  const videoFiles = await getMediaItemsFromStorgae('videos');
  const photoFiles = await getMediaItemsFromStorgae('photos');

  const mediaInformation = [...photoFiles, ...videoFiles];

  return mediaInformation.forEach(
    async (mediaInfo: GalleryMedia): Promise<GalleryMedia> => {
      return await prisma.gallery.create({
        data: {
          mediaName: mediaInfo.mediaName,
          mediaType: mediaInfo.mediaType,
        },
      });
    },
  );
}

async function main() {
  await createServiceItems(serviceItems);
  await seedGallery();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
