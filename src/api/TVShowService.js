import axios from "axios";
import { VITE_BASE_URL } from "../config";

export class TVShowService {
  static async fetchPopulars() {
    const response = await axios.get(
      `${VITE_BASE_URL}tv/popular?api_key=${import.meta.env.VITE_API_KEY_PARAM}`
    );
    return response.data.results;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${VITE_BASE_URL}tv/${tvShowId}/recommendations?api_key=${import.meta.env.VITE_API_KEY_PARAM}`
    );
    return response.data.results;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${VITE_BASE_URL}search/tv?api_key=${import.meta.env.VITE_API_KEY_PARAM}&query=${title}`
    );
    return response.data.results;
  }
}