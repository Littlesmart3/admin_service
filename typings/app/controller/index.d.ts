// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLoginLogin from '../../../app/controller/login/login';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    login: {
      login: ExportLoginLogin;
    }
  }
}
