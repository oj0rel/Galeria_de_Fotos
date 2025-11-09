import React from 'react';
import { Image, Pressable } from 'react-native';
import { styles } from './styles';

type PhotoCardProps = {
  imageUrl: string;
  title: string;
  onPress?: () => void;
};

export const PhotoCard = ({ imageUrl, title, onPress }: PhotoCardProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        accessibilityLabel={title} 
      />
    </Pressable>
  );
};