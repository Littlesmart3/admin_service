import { Controller } from 'egg';
// interface LoginType {
//   account: string;
//   password: string;
// }

export default class LoginController extends Controller {
  public async getLogin() {
    const { ctx, app } = this;
    const res = await app.mysql.select('user_list');
    ctx.body = res;
  }
  public async postLogin() {
    const { ctx } = this;
    // const res = await app.mysql.select('user_list');
    try {
      ctx.validate({ account: 'string', password: 'string' });
      console.log('123');
    } catch (error) {
      console.log(error);
    }

    // console.log(ctx.request.body);

    ctx.body = ctx;
  }
  public async getWxQrcode() {
    const { ctx } = this;
    ctx.body = 123;
  }
}
