import { createState, logger } from "../utils";

function createAnswerSelected() {
  const { get, update, subscribe, set } = createState("default");
  return {
    get,
    subscribe,
    set,
    setNameAnswer: (name) => update(() => name),
  };
}
const answerSelect = logger(createAnswerSelected)();
export default answerSelect;
