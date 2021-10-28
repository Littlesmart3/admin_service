/*
 * @Author: lee
 * @Date: 2021-10-28 10:02:46
 * @LastEditors: lee
 * @LastEditTime: 2021-10-28 10:05:12
 * @FilePath: /test/app/controller/lee.test.js
 */

'use strict';

const { app } = require('egg-mock/bootstrap');

describe('lee test', () => {
  it('lee index', () => {
    return app.httpRequest().get('/my').expect(200)
      .expect('<h1>I am Lee</h1>');
  });
});
