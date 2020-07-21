export default function logger(func) {
  if (process.env.NODE_ENV === "production") {
    return func;
  }
  const date = new Date();
  const hour = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  return (...args) => {
    const state = func(...args);
    return Object.entries(state).reduce((obj, [key, func]) => {
      return {
        ...obj,
        [key]: (...args) => {
          const result = func(...args);

          if (result && !["get", "subscribe"].includes(key)) {
            const { prevState, state } = result;
            console.group("%c action", "color: #999", `${key} @${hour}`);
            console.log(
              "%c prev state ",
              "color: #999; font-weight: 600",
              prevState
            );
            console.log(
              "%c next state ",
              "color: #7ac143; font-weight: 600",
              state
            );
            console.groupEnd();
          }
          return result;
        }
      };
    }, {});
  };
}
