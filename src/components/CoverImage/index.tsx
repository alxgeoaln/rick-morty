import React from "react";
import { Image, ImageStyle } from 'react-native';

import styles from "./styles";

interface CoverImageProps {
    uri: string,
    style?: ImageStyle
}

const CoverImage: React.FC<CoverImageProps> = ({ uri, style }) => <Image testID="cover-img-test-id" source={{ uri }} style={[styles.image, style]} />

export default CoverImage;