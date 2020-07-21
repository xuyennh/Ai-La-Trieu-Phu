import { createState, logger } from "../utils";

function createCurrentIndex() {
  const { get, update, subscribe, set, select } = createState(0);
  const resetCurrentIndex = () => {
    return update(() => 0);
  };
  return {
    get,
    subscribe,
    set,
    select,
    resetCurrentIndex,
    setCurrentIndex: () => update((currentIndex) => currentIndex + 1),
  };
}
const currentIndex = logger(createCurrentIndex)();
export default currentIndex;
