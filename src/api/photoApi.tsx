import { PhotoResponse } from "../types/photoType";
import { MyJsonApiManager } from "./apiManager";

export const PhotoList = async (
  albumId: number,
): Promise<PhotoResponse[]> => {
  try {
      const response = await MyJsonApiManager.get<PhotoResponse[]>(`/photos?albumId=${albumId}`);
  
      return response.data;
    } catch (error) {
      console.error("Erro na chamada para listar fotos pelo albumId: ", error)
  
      throw error;
    }
}

export const OpenPhoto = async (
  photoId: number,
): Promise<PhotoResponse> => {
  try {
      const response = await MyJsonApiManager.get<PhotoResponse>(`/photos/${photoId}`);
  
      return response.data;
    } catch (error) {
      console.error("Erro na chamada para abrir uma foto pelo photoId: ", error)
  
      throw error;
    }
}
