import app from './app';
const config = require('../src/config/config')

async function main() {
    // @ts-ignore
    await app.listen(config.APP_PORT);
    console.log('server on port 3000');
}

main();