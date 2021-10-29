/*
 * @Author: lee
 * @Date: 2021-10-28 09:53:55
 * @LastEditors: lee
 * @LastEditTime: 2021-10-29 10:42:12
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

  // 自由传参模式
  async getGirl() {
    const { ctx } = this;
    const res = await ctx.service.lee.getGirl('1818');
    ctx.body = res;

  }
  // async getGirl2() {
  //   const { ctx } = this;
  //   ctx.body = ctx.params.name;
  // }
  async getGirl2() {
    const { ctx } = this;
    console.error(ctx);
    // const name = ctx.params.name;
    // const age = ctx.params.age;
    // ctx.body = '大哥你好，我是' + name + ',今年' + age + '岁.欢迎光临红浪漫!';
    ctx.body = ctx;
  }
  // async add() {
  //   const ctx = this.ctx;
  //   ctx.body = 'add';
  // }
  async add() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }
}


module.exports = leeController;
