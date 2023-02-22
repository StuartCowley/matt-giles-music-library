const app = require('./src/app');

const APP_PORT = 4000;

app.listen(APP_PORT, () => {
  console.log(`Music Library App is listening on localhost:${APP_PORT}`);
});
