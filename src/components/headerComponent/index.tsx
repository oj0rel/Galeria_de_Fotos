import { Text, View } from "react-native";
import { styles } from "./styles";

type HeaderScreenProps = {
  title: string;
  description: string;
}

export const HeaderComponent = ({ title, description }: HeaderScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textH1}>{title}</Text>
      <Text style={styles.textH2}>{description}</Text>
    </View>
  )
}