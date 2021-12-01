import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/login', controller.login.login.getLogin);
  router.post('/login', controller.login.login.postLogin);
  router.get('/login/qrcode', controller.login.login.getWxQrcode);
};
