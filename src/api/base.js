/**
 * BaseAPI
 * 提供了继承的方法，其余的 API 均需继承它
 */

class BaseAPI {
  constructor(namspace, version) {
    this.namspace = namspace;
    this.version = version || 'v1';
  }

  /**
   * 查询数据，路由模式 get: /api/v1/{namspace}?query
   * @param query {object} - 查询条件
   */
  async find(query = {}, options = {}) {
    const queryParams = {};
    Object.keys(query).forEach(k => {
      let value = query[k];
      if (value && typeof value !== 'string') {
        value = JSON.stringify(value);
      }
      queryParams[k] = value;
    });

    const resp = await this.$http.get(`/api/${this.version}/${this.namspace}`, Object.assign({
      params: queryParams
    }, options));
    return resp.data || [];
  }

  /**
   * 创建数据，路由模式 post: /api/v1/{namspace}
   */
  async create(params) {
    return await this.$http.post(`/api/${this.version}/${this.namspace}`, params);
  }

  /**
   * 更新数据，路由模式 put: /api/v1/{namspace}/:uuid
   */
  async update(uuid, params) {
    if (typeof uuid === 'object' && !params) {
      params = uuid;
      uuid = params._id || params.id;
    }
    return await this.$http.put(`/api/${this.version}/${this.namspace}/${uuid}`, params);
  }

  /**
   * 删除数据，路由模式 delete: /api/v1/{namspace}/:uuid
   */
  async remove(uuid) {
    return await this.$http.delete(`/api/${this.version}/${this.namspace}/${uuid}`);
  }
}

export default BaseAPI;
