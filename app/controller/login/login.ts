import { Controller } from 'egg';
import crypto = require('crypto');

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
  public async getWechatQrcode() {
    const query = this.ctx.request.query;
    const signature = query.signature;
    const timestamp = query.timestamp;
    const nonce = query.nonce;
    const echostr = query.echostr;
    if (await this.check(timestamp, nonce, signature, 'wechat_token')) {
      this.ctx.body = echostr;
    } else {
      this.ctx.body = 'It is not from weixin';
    }
  }
  async check(timestamp, nonce, signature, token) {
    // eslint-disable-next-line array-bracket-spacing
    const tmp = [token, timestamp, nonce].sort().join('');
    const currSign = crypto.createHash('sha1').update(tmp).digest('hex');
    return currSign === signature;
  }
}
