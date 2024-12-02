import prisma from '../utils/prismaClient';
// @ts-ignore
import { createServiceItems } from '../src/repository/servicesRepo';
import {
  getMediaItemsFromStorgae,
  serviceItems,
  GalleryMedia,
} from './setupSeed';
import { supabase } from '../utils/supabaseClient';

async function seedGallery() {
  const mediaInformation = await getMediaItemsFromStorgae('media');
  console.log(mediaInformation);
  if (!mediaInformation) {
    throw new Error('Media is undefined');
  }

  return mediaInformation?.forEach(
    async (mediaInfo: GalleryMedia): Promise<GalleryMedia> => {
      return await prisma.gallery.create({
        data: {
          mediaUrl: mediaInfo.mediaUrl,
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
