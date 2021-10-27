/*
 * @Author: lee
 * @Date: 2021-10-27 14:43:33
 * @LastEditors: lee
 * @LastEditTime: 2021-10-27 15:37:41
 * @FilePath: /app/controller/home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hello World';
  }

  async hahaha() {
    const { ctx } = this;
    ctx.body = '<h1>我的天呀！😯</h1>';
  }
}

module.exports = HomeController;
