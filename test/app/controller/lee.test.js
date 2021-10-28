/*
 * @Author: lee
 * @Date: 2021-10-28 10:02:46
 * @LastEditors: lee
 * @LastEditTime: 2021-10-28 15:11:47
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

describe('lee myGirls test', () => {
  it('lee myGirls', () => {
    return app.httpRequest().get('/myGirls').expect(200)
      .expect('<h1>杨幂，正在向你走来</h1>');
  });
});
