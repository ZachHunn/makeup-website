import { LoadingLayout } from '../components/LoadingLayout';
import { useGetGalleryMedia } from '../hooks/api/gallery';
import { NextPage } from 'next';
import { MediaDisplay } from '../components/MediaDisplay';

const Gallery: NextPage = (): JSX.Element => {
  const { isLoading, data: galleryQueryData } = useGetGalleryMedia();

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <div className="pt-32">
        <h1 className="text-white text-3xl text-center pb-8">The Gallery</h1>
        <MediaDisplay mediaInfo={galleryQueryData} />
      </div>
    </>
  );
};

export default Gallery;
