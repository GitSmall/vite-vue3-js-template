import { post } from "@/utils/request";

export default class User {
  /**
   * 登录
   * @param {string} username 用户名
   * @param {string} password 密码
   * @returns
   */
  static async login(username, password) {
    return post("/login", {
      username,
      password,
    });
  }
}

/**
  在需要使用接口的地方，引入对应的业务模型文件，参考如下：
  import User from "@/api/user'
  methods: {
    async login() {
      const res = await User.login(this.username, this.password);
      console.log(res);
    }
  }
 **/
