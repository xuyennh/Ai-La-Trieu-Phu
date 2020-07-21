import { createState, logger } from "../utils";

function createUserName() {
  const {
    get,
    set,
    select,
    selectAsync,
    subscribe,
    update,
    shouldUpdate,
  } = createState("");
  shouldUpdate((prevUserName, userName) => {
    if (!userName) {
      return false;
    }
    return true;
  });
  return {
    get,
    set,
    select,
    selectAsync,
    subscribe,
    setUserName: (name) => update(() => name),
  };
}

const userName = logger(createUserName)();
export default userName;
