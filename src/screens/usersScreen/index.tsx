import { usersList } from "@/src/api/userApi";
import { HeaderComponent } from "@/src/components/headerComponent";
import { UserCard } from "@/src/components/userCard";
import { UserResponse } from "@/src/types/userType";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function UsersScreen() {
  const [users, setUsers] = useState<UserResponse[]>([]);

  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [filtroNome, setFiltroNome] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<UserResponse[]>([]);

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const router = useRouter();

  const carregarUsuarios = async () => {

    setError(null);

    try {
      const data = await usersList();
      setUsers(data);
    } catch(error) {
      setError("Falha ao carregar usuários.")
      console.error(error);
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  useEffect(() => {
    if (filtroNome === '') {
      setFilteredUsers(users);
    } else {
      const dataFiltrada = users.filter((user) =>
      user.name.toLowerCase().includes(filtroNome.toLowerCase())
    );
    setFilteredUsers(dataFiltrada);
    }
  }, [filtroNome, users]);

  const validateUser = () => {
    if (!selectedUserId) {
      return "Nenhum usuário selecionado. Por favor, escolha um usuário para continuar.";
    }

    return null;
  }

  const handleEntrar = () => {
    setErrorMessage(null);

    const validationError = validateUser();

    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    router.push({
      pathname: '/albums',
      params: { userId: selectedUserId }
    });
  };


  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: "red" }}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
          <View>
            <HeaderComponent
              title="USUÁRIOS CADASTRADOS"
              description="escolha um usuário para entrar"
            />
          </View>

          <View style={styles.filtroContainer}>
            <TextInput
              style={styles.filtroInput}
              placeholder="Filtrar por nome..."
              placeholderTextColor="#888"
              value={filtroNome}
              onChangeText={setFiltroNome}
            />
          </View>

          {errorMessage && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{errorMessage}</Text>
              </View>
            )}

            <FlatList
              style={styles.flatList}
              data={filteredUsers}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <UserCard
                  name={item.name}
                  username={item.username}
                  email={item.email}

                  onPress={() => setSelectedUserId(item.id)}
                  isSelected={item.id === selectedUserId}
                />
              )}
            />

      <View style={styles.footer}>
        <Pressable
          disabled={!selectedUserId}
          style={({ pressed }) => [
            styles.entrarButton,
            !selectedUserId && styles.entrarButtonDisabled,
            pressed && { opacity: 0.7 }
          ]}
          onPress={handleEntrar}
        >
          <Text style={styles.entrarButtonText}>Entrar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
