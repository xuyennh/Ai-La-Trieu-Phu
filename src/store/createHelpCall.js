const { createState, logger, random } = require("../utils");

function createHelpCall() {
  const initialState = {};
  const { get, select, set, subscribe, update } = createState(initialState);
  const setHelpCall = (answers) => {
    const dataResult1 = answers.filter((item) => item.isCorrect)[0].name;
    const dataOmit = answers.filter((item) => !item.isCorrect).name;
    const resultList = [dataResult1, dataResult1, dataResult1, dataOmit];
    const resultRandom = random.withArray(resultList);
    const result = {
      used: true,
      isRender: true,
      data: {
        name: resultRandom,
        isCorrect: true,
      },
    };
    return update(() => result);
  };
  const resetHelpCallData = () => {
    return set({
      used: true,
      isRender: false,
      data: {},
    });
  };
  const resetHelpCall = () => {
    return set(initialState);
  };
  return {
    get,
    set,
    subscribe,
    setHelpCall,
    resetHelpCall,
    resetHelpCallData,
  };
}

const helpCall = logger(createHelpCall)();

export default helpCall;
