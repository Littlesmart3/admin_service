/*
 * @Author: lee
 * @Date: 2021-10-27 14:43:33
 * @LastEditors: lee
 * @LastEditTime: 2021-10-29 10:48:28
 * @FilePath: /app/router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hahaha', controller.home.hahaha);
  router.get('/my', controller.lee.index);
  router.get('/myGirls', controller.lee.getGirls);
  router.get('/getGirl', controller.lee.getGirl);
  // router.get('/getGirl2/:name', controller.lee.getGirl2);
  router.get('/getGirl2/:name/:age', controller.lee.getGirl2);
  router.post('/add', controller.lee.add);
  router.get('/testGetGirl', controller.home.testGrtGirl);
};
