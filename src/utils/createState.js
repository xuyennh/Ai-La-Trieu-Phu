export default function createState(initialState, config = {}) {
  let _setters = [];
  let _state = initialState;
  let _prevState = "default";
  let _listeners = [];
  let _compare;
  function _callListeners() {
    _listeners.forEach((listener) => {
      listener(_state);
    });
  }
  function _callCompare() {
    if (!_compare) {
      return _callListeners();
    }
    let _isUpdate = _compare(_prevState, _state);
    _isUpdate && _callListeners();
  }
  function get() {
    return _state;
  }
  function select(callback) {
    _setters.push(callback);
  }
  function selectAsync() {
    return new Promise((resolve) => {
      select(resolve);
    });
  }
  function set(state) {
    _prevState = _state;
    _state = state;
    if (config.isLocalStorage) {
      localStorage.setItem(config.stateName, state);
    }
    _setters.forEach((setter) => setter(_state));
    _callCompare();
    return {
      prevState: _prevState,
      state: _state,
    };
  }
  function update(getState) {
    return set(getState(_state));
  }
  function subscribe(listener) {
    let state = localStorage.getItem(config.stateName);
    if (config.isLocalStorage && !!state) {
      try {
        _state = JSON.parse(state);
      } catch (err) {
        _state = state;
      }
    }
    _listeners.push(listener);
  }
  function shouldUpdate(compare) {
    _compare = compare;
  }

  return {
    get,
    set,
    select,
    selectAsync,
    update,
    subscribe,
    shouldUpdate,
  };
}
