import BaseAPI from './BaseAPI';

class UserApi extends BaseAPI {
  constructor() {
    super('users');
  }

  /* 通过这种方式追加api
  // 登录
	async login(param) {
		return await this.$http.post('/api/login/pc/login', param);
	}
  */
}

export default UserApi;
