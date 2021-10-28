/*
 * @Author: lee
 * @Date: 2021-10-28 09:53:55
 * @LastEditors: lee
 * @LastEditTime: 2021-10-28 10:01:32
 * @FilePath: /app/controller/lee.js
 */
'use strict';

const Controller = require('egg').Controller;

class leeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>I am Lee</h1>';
  }
}

module.exports = leeController;
