import { LoadingLayout } from '../components/LoadingLayout';
import { useGetGalleryMedia } from '../hooks/api/gallery';
import { NextPage } from 'next';
import { MediaDisplay } from '../components/MediaDisplay';

const Gallery: NextPage = (): JSX.Element => {
  const galleryQueryData = useGetGalleryMedia();

  if (galleryQueryData.isLoading) {
    return <LoadingLayout />;
  }

  return (
    <div className="h-full pt-20">
      <h1 className="text-white text-5xl text-center pb-8">The Gallery</h1>
      <MediaDisplay mediaInfo={galleryQueryData.data} />
    </div>
  );
};

export default Gallery;
