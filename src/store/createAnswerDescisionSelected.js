import { createState, logger } from "../utils";

function createAnswerDecisionSelected() {
  const { get, update, subscribe, set } = createState("");
  return {
    get,
    subscribe,
    set,
    setNameAnswerDecision: (name) => update(() => name),
  };
}
const answerDecisionSelect = logger(createAnswerDecisionSelected)();
export default answerDecisionSelect;
