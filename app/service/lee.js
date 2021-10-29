/*
 * @Author: lee
 * @Date: 2021-10-29 10:38:27
 * @LastEditors: lee
 * @LastEditTime: 2021-10-29 10:40:43
 * @FilePath: /app/service/lee.js
 */
'use strict';

const Service = require('egg').Service;

class LeeService extends Service {
  async getGirl(id) {
    // 因为没有真实连接数据库，所以模拟数据
    return {
      id,
      name: '小红',
      age: 18,
    };

  }
}

module.exports = LeeService;
