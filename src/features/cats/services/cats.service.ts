import axios from "@/lib/axios";
import type { Cat, Cats } from "../types/cats.types";

export const fetchAll = async () => {
  try {
    const { data } = await axios.get<Cats>("/cats");
    return data;
  } catch (error) {
    console.error("Error fetching data", { cause: error as Error });
  }
};

export const fetchOne = async (id: string) => {
  try {
    const { data } = await axios.get<Cat>(`/cats/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching cat", { cause: error as Error });
  }
};
