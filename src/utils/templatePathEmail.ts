import { resolve } from 'path';

function templatePathEmail(nameFileHbs: string) {
  return resolve(
    __dirname,
    '..',
    'modules',
    'customer',
    'views',
    'emails',
    String(nameFileHbs)
  );
}

export default templatePathEmail;
