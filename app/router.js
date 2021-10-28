/*
 * @Author: lee
 * @Date: 2021-10-27 14:43:33
 * @LastEditors: lee
 * @LastEditTime: 2021-10-28 14:53:35
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
};
