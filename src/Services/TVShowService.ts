import axios from "axios";
import { VITE_BASE_URL } from "../config";

export interface TVShow {
  id: number;
  name: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
}

export class TVShowService {
  static async fetchPopulars(): Promise<TVShow[]> {
    const response = await axios.get<{ results: TVShow[] }>(
      `${VITE_BASE_URL}tv/popular?api_key=${import.meta.env.VITE_API_KEY_PARAM}`
    );
    return response.data.results;
  }

  static async fetchRecommendations(tvShowId: number): Promise<TVShow[]> {
    const response = await axios.get<{ results: TVShow[] }>(
      `${VITE_BASE_URL}tv/${tvShowId}/recommendations?api_key=${
        import.meta.env.VITE_API_KEY_PARAM
      }`
    );
    return response.data.results;
  }

  static async fetchByTitle(title: string): Promise<TVShow[]> {
    const response = await axios.get<{ results: TVShow[] }>(
      `${VITE_BASE_URL}search/tv?api_key=${
        import.meta.env.VITE_API_KEY_PARAM
      }&query=${title}`
    );
    return response.data.results;
  }
}
