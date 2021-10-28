/*
 * @Author: lee
 * @Date: 2021-10-28 09:53:55
 * @LastEditors: lee
 * @LastEditTime: 2021-10-28 14:51:06
 * @FilePath: /app/controller/lee.js
 */
'use strict';

const Controller = require('egg').Controller;

class leeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>I am Lee</h1>';
  }

  async getGirls() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>杨幂，正在向你走来</h1>');
      }, 5000);
    });
  }
}


module.exports = leeController;
