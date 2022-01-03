import { Service } from 'egg';

export default class Login extends Service {
  public async passport() {
    try {
      const { app } = this;
      const res = await app.mysql.select('user_list');
      return { mesasge: res, status: 200 };
    } catch (error) {
      return error;
    }
  }
}
