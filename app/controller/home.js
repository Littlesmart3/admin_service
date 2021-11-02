/*
 * @Author: lee
 * @Date: 2021-10-27 14:43:33
 * @LastEditors: lee
 * @LastEditTime: 2021-10-29 14:29:13
 * @FilePath: /app/controller/home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'Hello World';

    const { ctx, app } = this;
    console.log(app.mysql);
    const res = await app.mysql.select('employees');
    console.log(res);
    ctx.body = res;
  }

  async hahaha() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async testGrtGirl() {
    const { ctx } = this;
    const id = ctx.query.id;
    const res = await ctx.service.lee.getGirl(id);
    ctx.body = res;
  }
}

module.exports = HomeController;

