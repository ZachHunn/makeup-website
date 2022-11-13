import { Gallery } from '@prisma/client';
import { serviceItem } from '../src/repository/servicesRepo';
import { supabase } from '../utils/supabaseClient';

export const serviceItems: serviceItem[] = [
  {
    serviceName: 'Special Event Makeup',
    description: 'These sessions are for 60 minutes',
    price: 75,
  },
  {
    serviceName: 'Full Face Glam',
    description: 'This includes Cut Crease & Glitter. ',
    price: 85,
  },
  {
    serviceName: 'Bridal Makeup',
    description:
      'This package starts at $160. Message me for more information and pricing about wedding party packages.',
    price: 160,
  },
  {
    serviceName: 'Eyes Only',
    description: 'These sessions are 45 minutes',
    price: 50,
  },
  {
    serviceName: 'One on One Makeup Lesson',
    description: 'These sessions are 150 minutes',
    price: 120,
  },
  {
    serviceName: 'Photoshoot Makeup',
    description: 'These sessions are 105 minutes',
    price: 80,
  },
  {
    serviceName: 'Prom Makeup',
    description: 'These sessions are 60 minutes',
    price: 80,
  },
  {
    serviceName: 'Basic Makeup Application',
    description: 'This an a no eyeshadow makeup look.',
    price: 75,
  },
  {
    serviceName: 'Travel Fee',
    description:
      "Looking for a house call or on-site stylist? I'll come to you! Travel fees vary based on location, gas, and tolls. (Please Message me for details)",
    price: 40,
  },
];

export type GalleryMedia = Omit<Gallery, 'id'>;

export const getMediaItemsFromStorgae = async (
  bucketName: string,
): Promise<GalleryMedia[]> => {
  const bucketMedia = await supabase.storage
    .from(bucketName)
    .list()
    .then((data) =>
      data.data?.map((media) => {
        const mediaUrlData = supabase.storage
          .from(bucketName)
          .getPublicUrl(media.name).data.publicUrl;
        const mediaData: GalleryMedia = {
          mediaUrl: mediaUrlData,
          mediaName: media.name,
          mediaType: media.metadata.mimetype,
        };
        return mediaData;
      }),
    )
    .catch((error) => console.log(error));
  return bucketMedia!;
};
