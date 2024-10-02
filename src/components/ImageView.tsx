import { Image, ImageProps } from 'react-native';
import React from 'react';

interface ImageViewProps extends ImageProps {
  imgPath: string | number; 
}

const ImageView: React.FC<ImageViewProps> = ({ imgPath, ...props }) => {
  const isRemoteImage = typeof imgPath === 'string';
  
  return (
    <Image
      {...props}
      source={isRemoteImage ? { uri: imgPath } : imgPath}  
    />
  );
};

export default ImageView;
