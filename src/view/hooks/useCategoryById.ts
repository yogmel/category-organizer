import { Category } from "../../model";
import { useApplicationViewModel } from "./useApplicationViewModel";

export function useCategoryById(categoryId: number): Category | undefined {
  const {
    categoriesViewModel: { categories },
  } = useApplicationViewModel();

  return categories.find((category) => category.id === categoryId);
}
