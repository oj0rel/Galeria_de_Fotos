import { Text, View } from "react-native";
import { styles } from "./styles";

type HeaderScreenProps = {
  title: string;
  description: string;
}

export const HeaderComponent = ({ title, description }: HeaderScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  )
}