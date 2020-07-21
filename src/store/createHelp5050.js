const { createState, logger, random } = require("../utils");

function createHelp5050() {
  const initialState = {};
  const { get, set, update, select, subscribe } = createState(initialState);
  const setHelp5050 = (answers) => {
    const dataResult1 = answers.filter((item) => item.isCorrect)[0];
    const dataOmit = answers.filter((item) => !item.isCorrect);
    const dataResult2 = random.withArray(dataOmit);
    const result = {
      used: true,
      isRender: true,
      data: random.ramdomAllvalue([dataResult1, dataResult2]),
    };
    return update(() => result);
  };
  const resetHelp5050Data = () => {
    return set({
      used: true,
      isRender: false,
      data: [],
    });
  };
  const resetHelp5050 = () => {
    return set(initialState);
  };
  return {
    get,
    set,
    select,
    subscribe,
    setHelp5050,
    resetHelp5050,
    resetHelp5050Data,
  };
}

const help5050 = logger(createHelp5050)();

export default help5050;
