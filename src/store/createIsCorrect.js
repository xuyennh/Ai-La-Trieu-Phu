import { createState, logger } from "../utils";

function createIsCorrect() {
  const { set, get, subscribe, update } = createState(true);
  const setIsCorrect = (answers, answerSelected) => {
    return update(() => {
      const { isCorrect } = answers.filter((answer) => {
        return answer.name === answerSelected;
      })[0];
      return isCorrect;
    });
  };
  const resetIsCorrect = () => {
    return update(() => true);
  };
  return {
    set,
    get,
    subscribe,
    setIsCorrect,
    resetIsCorrect,
  };
}

const isCorrect = logger(createIsCorrect)();

export default isCorrect;
