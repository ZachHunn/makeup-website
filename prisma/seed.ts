import { PrismaClient, Gallery } from '@prisma/client';
// @ts-ignore
import { serviceItems } from './serviceItems';
import { createServiceItems } from '../repository/servicesRepo';
import axios from 'axios';

const prisma = new PrismaClient();

const token = process.env.INSTAGRAM_TOKEN;
const instaUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${token}`;

async function seedGallery(url: string) {
  const mediaInformation: Gallery[] = await axios
    .get(url)
    .then((res) => res.data.data);
  return mediaInformation.forEach(
    async (mediaInfo: Gallery): Promise<Gallery> => {
      return await prisma.gallery.create({
        data: {
          id: Number(mediaInfo.id),
          caption: mediaInfo.caption,
          media_url: mediaInfo.media_url,
        },
      });
    },
  );
}

async function main() {
  await createServiceItems(serviceItems);
  await seedGallery(instaUrl);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
