import { Controller } from 'egg';
export default class LoginController extends Controller {
  public async getLogin() {
    const { ctx } = this;
    const res = await ctx.service.login.login.passport();

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
}
