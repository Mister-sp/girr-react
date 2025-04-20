import create from "zustand";
import { getShows, getShowById } from "../services/api";

export type Subject = {
  id: string;
  title: string;
  order: number;
};

export type Show = {
  id: string;
  title: string;
  subjects: Subject[];
};

interface ShowStoreState {
  shows: Show[];
  loading: boolean;
  error: string | null;
  fetchShows: () => Promise<void>;
  fetchShowById: (id: string) => Promise<Show | undefined>;
}

export const useShowStore = create<ShowStoreState>((set) => ({
  shows: [],
  loading: false,
  error: null,
  fetchShows: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getShows();
      set({ shows: data, loading: false });
    } catch (e: any) {
      set({ error: e.message, loading: false });
    }
  },
  fetchShowById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const data = await getShowById(id);
      set({ loading: false });
      return data;
    } catch (e: any) {
      set({ error: e.message, loading: false });
      return undefined;
    }
  },
}));
