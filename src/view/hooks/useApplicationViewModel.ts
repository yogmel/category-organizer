import { ApplicationViewModel } from "../../viewmodel";

export function useApplicationViewModel(): ApplicationViewModel {
  return ApplicationViewModel.getInstance();
}
