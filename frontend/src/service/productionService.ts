import type { ProductionSuggestionType } from "../types/production";
import api from "./api";

export const getProductionSuggestions = async () => {
  const response = await api.get<ProductionSuggestionType[]>("products/production-suggestions");
  return response.data;
};
