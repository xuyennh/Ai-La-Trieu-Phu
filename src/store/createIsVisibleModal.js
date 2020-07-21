import { createState, logger } from "../utils";

function createIsVisibleModal() {
  const { get, set, subscribe, update } = createState(false);
  return {
    get,
    set,
    subscribe,
    setVisibleModal: visible => update(() => visible)
  };
}

const isVisibleModal = logger(createIsVisibleModal)();

export default isVisibleModal;
