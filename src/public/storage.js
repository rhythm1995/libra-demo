/**
 * 本地存储 $storage
 */
const storage = {
  getJson: (...args) => {
    let value = null;
    try {
      value = JSON.parse(storage.get(...args));
    } catch (ex) {
      console.error('storage.getJson error: ', ex);
    }
    return value;
  },
  get: (...args) => {
    return storage.invoke('getItem', ...args);
  },
  setJson: (...args) => {
    return storage.set(...args);
  },
  set: (key, value) => {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    return storage.invoke('setItem', key, value);
  },
  remove: (key) => {
    return storage.invoke('removeItem', key);
  },
  getKeys: () => {
    let reuslt = [];
    if (typeof localStorage !== 'undefined') {
      reuslt = Object.keys(localStorage);
    }
    return reuslt;
  },
  invoke: (action, ...args) => {
    let result = '';
    if (typeof localStorage !== 'undefined') {
      try {
        result = localStorage[action](...args);
      } catch (ex) {
        console.error('执行异常 localStorage.' + action, ex);
      }
    } else {
      console.error('浏览器不支持 localStorage.' + action);
    }
    return result;
  }
};

export default storage;
