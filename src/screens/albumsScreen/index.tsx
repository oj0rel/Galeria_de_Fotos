import { AlbumsList } from "@/src/api/albumApi";
import { AlbumCard } from "@/src/components/albumCard";
import { HeaderComponent } from "@/src/components/headerComponent";
import { AlbumResponse } from "@/src/types/albumType";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function AlbumsScreen() {
  const [albums, setAlbums] = useState<AlbumResponse[]>([]);

  const [error, setError] = useState<string | null>(null);

  const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null);

  const router = useRouter();

  const { userId } = useLocalSearchParams();

  const carregarAlbums = async () => {
    setError(null);

    if (!userId) {
      setError("ID do usuário não encontrado.");
      return;
    }

    try {
      const idNumerico = Number(userId);

      const data = await AlbumsList(idNumerico);
      setAlbums(data);
    } catch (error) {
      console.error("Erro ao carregar álbuns: ", error);
      setError("Falha ao carregar álbuns.");
    }
  };

  useEffect(() => {
    carregarAlbums();
  }, [userId]);

  const handleEntrar = (albumId: number) => {
    setSelectedAlbumId(albumId);

    router.push({
      pathname: "/photos",
      params: { albumId: selectedAlbumId },
    });
  };

  if (error) {
    return (
      <SafeAreaView style={styles.containerError}>
        <Text style={styles.textError}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HeaderComponent
          title="ÁLBUMS"
          description="escolha um álbum para ver as fotos"
        />
      </View>

      <FlatList
        style={styles.flatList}
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AlbumCard
            title={item.title}
            onPress={() => handleEntrar(item.id)}
            isSelected={item.id === selectedAlbumId}
          />
        )}
      />
    </SafeAreaView>
  );
}
