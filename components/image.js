import { getStrapiMedia } from "../lib/media";
import Image from 'next/image';

const Images = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);
  const { url, alternativeText } = image
  const loader = () => {
    return getStrapiMedia(image)
  }

  return (
    <Image
      loader={loader}
      src={imageUrl}
      alt={image.alternativeText || image.name}
      width={image.width}
      height={image.height}
      Layout='responsive'
      Loading="lazy"
      style={style}
      src={url}
      alt={alternativeText || ""}
    />
  );
};

export default Images;