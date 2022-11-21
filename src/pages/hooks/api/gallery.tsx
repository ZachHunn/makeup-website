import { Gallery } from '@prisma/client';
import axios from 'axios';
import { useQuery } from 'react-query';
import { EUri } from '../../../../const';

export const galleryQueryKeys = {
  image: (id: number) => ['image', id],
  images: () => ['images'],
};

export const useGetGalleryMedia = () => {
  return useQuery<Gallery[]>(galleryQueryKeys.images(), () =>
    axios.get(EUri.GALLERY).then((results) => results.data),
  );
};
