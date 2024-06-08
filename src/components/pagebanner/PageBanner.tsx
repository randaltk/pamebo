import Image from 'next/image';
import { FC } from 'react';

interface PageBannerProps {
  src: string;
  alt: string;
}

const PageBanner: FC<PageBannerProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-24 md:h-36 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="w-full h-full"
      />
    </div>
  );
};

export default PageBanner;
