import axios from "axios";
import { UserResponse } from "../types/userType";
import { PlaceHolderApiManager } from "./apiManager";

export const usersList = async (): Promise<UserResponse[]> => {
  try {
    const response = await PlaceHolderApiManager.get<UserResponse[]>('/users');

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Erro ao listar usuários: ${error.message}`, error.response?.data);
    }

    throw error;
  }
}