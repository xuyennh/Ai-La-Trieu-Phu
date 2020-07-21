import { createState, logger } from "../utils";

function createTotalScore() {
  const { get, update, subscribe, set } = createState(0);
  const resetScore = () => {
    return update(() => 0);
  };
  return {
    get,
    subscribe,
    set,
    resetScore,
    setTotalScore: (totalScore) => update((score) => score + totalScore),
  };
}
const totalScore = logger(createTotalScore)();
export default totalScore;
