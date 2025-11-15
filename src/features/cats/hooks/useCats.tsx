import { QueryClient, useQuery } from "@tanstack/react-query";
import { fetchAll } from "../services/cats.service";
// import type { Cats } from "../types/cats.types";

export const useCat = () => {
  const queryClient = new QueryClient();

  const { data: fetchCats, isLoading: loadingCats } = useQuery({
    queryKey: ["fetchCats"],
    queryFn: fetchAll,
  });

  return { fetchCats, loadingCats };
};
