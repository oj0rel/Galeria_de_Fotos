import { AlbumResponse } from "../types/albumType";
import { PlaceHolderApiManager } from "./apiManager";

export const AlbumsList = async (
  userId: number,
): Promise<AlbumResponse[]> => {
  try {
    const response = await PlaceHolderApiManager.get<AlbumResponse[]>(`/users/${userId}/albums`);

    return response.data;
  } catch (error) {
    console.error("Erro na chamada para listar álbums pelo userId: ", error)

    throw error;
  }
}