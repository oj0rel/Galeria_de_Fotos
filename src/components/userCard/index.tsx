import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type UserCardProps = {
  name: string;
  username: string;
  email: string;
  onPress?: () => void;
  isSelected?: boolean;
}

export const UserCard = ({ name, username, email, onPress, isSelected = false }: UserCardProps) => {
  return (
    <Pressable
      style={[styles.pressContent, isSelected && styles.pressContentSelected]}
      onPress={ onPress }
    >

        <View style={styles.icon}>
          <Image
            source={require('../../assets/userIcon.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.pressText}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{username}</Text>
          <Text style={styles.text}>{email}</Text>
        </View>

    </Pressable>
  )
}