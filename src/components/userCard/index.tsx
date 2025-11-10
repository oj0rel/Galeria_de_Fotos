import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type UserCardProps = {
  name: string;
  username: string;
  email: string;
  onPress: () => void;
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
            source={require('../../assets/images/userIcon.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.pressText}>
          <Text style={styles.textH1}>{name}</Text>
          <Text style={styles.textH2}>{username}</Text>
          <Text style={styles.textH3}>{email}</Text>
        </View>

    </Pressable>
  )
}