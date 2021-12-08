import { Service } from 'egg';

export default class Login extends Service {
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }
}
