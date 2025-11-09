import { PhotoList } from "@/src/api/photoApi";
import { HeaderComponent } from "@/src/components/headerComponent";
import { PhotoCard } from "@/src/components/photoCard";
import { PhotoResponse } from "@/src/types/photoType";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Modal, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function PhotosScreen() {
  const [photos, setPhotos] = useState<PhotoResponse[]>([]);

  const [selectedPhoto, setSelectedPhoto] = useState<PhotoResponse | null>(null);

  const [error, setError] = useState<string | null>(null);

  const [selectedPhotoId, setSelectedPhotoId] = useState<number | null>(null);

  const router = useRouter();

  const { albumId } = useLocalSearchParams();

  const carregarFotos = async () => {
    setError(null);

    if (!albumId) {
      setError("ID do album não encontrado.");
      return;
    }

    try {
      const idNumerico = Number(albumId);

      const data = await PhotoList(idNumerico);
      setPhotos(data);
    } catch (error) {
      console.error("Erro ao carregar fotos: ", error);
      setError("Falha ao carregar fotos.");
    }
  };

  useEffect(() => {
    carregarFotos();
  }, [albumId]);

  const handleEntrar = (photoId: number) => {
    setSelectedPhotoId(photoId);
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <View>
        <HeaderComponent
          title="FOTOS"
          description="escolha uma foto para ver"
        />
      </View>

      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <PhotoCard
            imageUrl={item.thumbnailUrl}
            title={item.title}
            onPress={() => setSelectedPhoto(item)}
          />
        )}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={selectedPhoto !== null}
        onRequestClose={() => setSelectedPhoto(null)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Image
              source={{ uri: selectedPhoto?.url }}
              style={styles.modalImage}
            />

            <Text style={styles.modalTitle}>{selectedPhoto?.title}</Text>

            <Pressable
              style={styles.closeButton}
              onPress={() => setSelectedPhoto(null)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </Pressable>

          </View>
        </View>

      </Modal>

    </View>
  );
}
