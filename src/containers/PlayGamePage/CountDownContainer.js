import { counter } from "../../utils";
import { countDown } from "../../store";

export default class CountDownContainer {
  constructor() {}
  render() {
    return counter({
      from: 20,
      to: 0,
      onStart: () => {},
      onChange: (from) => {
        return `abc`;
      },
      onEnd: () => {},
    });
  }
  handleDOM() {}
}
