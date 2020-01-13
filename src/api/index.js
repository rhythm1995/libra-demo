import BaseAPI from './base';
import UserAPI from './user';

/**
 * APIFactory
 * 用于简化 API 声明，简单的 增，删，改 无需在声明新的类
 * 如果，已有的方法需要重载或者添加，可以参照 APIFactory 自定义 API 实现
 *
 * @param namespace {string} - 必须跟 api 路径中的名称保持一致
 */
class APIFactory extends BaseAPI {
  constructor(namespace) {
    super(namespace);
    this.namespace = namespace;
  }
}

const APIS = ($http) => {
  BaseAPI.prototype.$http = $http;

  return Object.assign({}, {
		user: new UserAPI(),
  });
};

export default APIS;
