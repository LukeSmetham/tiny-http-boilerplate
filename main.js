import { App } from '@tinyhttp/app'
import { logger } from '@tinyhttp/logger'
import serveStatic from 'serve-static'
import path from 'path';

const app = new App();

const PORT = 3000;

app
  .use(logger())
  .use(serveStatic(path.join(process.cwd(), 'public')))
  .listen(PORT)

console.log(`Running on ${PORT}`)