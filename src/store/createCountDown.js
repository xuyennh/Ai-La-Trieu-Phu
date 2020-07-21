const { createState, logger } = require("../utils");

function createCountDown() {
  const { set, get, subscribe, update, select } = createState(false);
  const setCountDown = (isTrue) => update(() => isTrue);
  return {
    set,
    get,
    subscribe,
    setCountDown,
    select,
  };
}
const countDown = logger(createCountDown)();

export default countDown;
