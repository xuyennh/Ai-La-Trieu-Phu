const { createState, logger, random } = require("../utils");

function getMinScore(level) {
  switch (level) {
    case "easy":
      return 70;
    case "normal":
      return 40;
    case "hard":
      return 25;
    default:
      return 60;
  }
}

function createHelpLooker() {
  const initialState = {};
  const { get, set, subscribe, update } = createState(initialState);
  const setHelpLooker = (answers, level) => {
    const result1 = answers
      .filter((item) => item.isCorrect)[0]
      .name.toUpperCase();
    const resultOmit = answers.filter((item) => !item.isCorrect);
    const result2 = resultOmit[0].name.toUpperCase();
    const result3 = resultOmit[1].name.toUpperCase();
    const result4 = resultOmit[2].name.toUpperCase();
    const percentFull = 100;
    const dapandung = random.fromTo(getMinScore(level), 95);
    const dapan2 = Math.floor((percentFull - dapandung) / random.fromTo(1, 6));
    const dapan3 = Math.floor(
      (percentFull - dapandung - dapan2) / random.fromTo(1, 6)
    );
    const dapan4 = percentFull - dapandung - dapan2 - dapan3;

    const result = {
      used: true,
      isRender: true,
      data: [
        {
          name: result1,
          percent: dapandung,
        },
        {
          name: result2,
          percent: dapan2,
        },
        {
          name: result3,
          percent: dapan3,
        },
        {
          name: result4,
          percent: dapan4,
        },
      ],
    };
    return set(result);
  };
  const resetHelpLookerData = () => {
    return set({
      used: true,
      isRender: false,
      data: [],
    });
  };
  const resetHelpLooker = () => {
    return set(initialState);
  };
  return {
    get,
    set,
    subscribe,
    setHelpLooker,
    resetHelpLookerData,
    resetHelpLooker,
  };
}

const helpLooker = logger(createHelpLooker)();
export default helpLooker;
