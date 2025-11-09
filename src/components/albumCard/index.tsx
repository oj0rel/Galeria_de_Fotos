import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type AlbumCardProps = {
  title: string;
  onPress: () => void;
  isSelected?: boolean;
}

export const AlbumCard = ({ title, onPress, isSelected = false }: AlbumCardProps) => {
  return (
    <Pressable
      style={styles.pressContent}
      onPress={ onPress }
    >
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  )
}
