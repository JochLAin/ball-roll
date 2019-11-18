const path = require('path');

module.exports.PORT = process.env.PORT || 80;
const PROJECT_DIR = module.exports.PROJECT_DIR = process.env.PROJECT_DIR || path.resolve(__dirname, '../..');
module.exports.PUBLIC_DIR = process.env.PUBLIC_DIR || path.resolve(PROJECT_DIR, 'public');

const dotenv = require('webpack-turnkey/lib/utils/dotenv');
const env = dotenv(path.resolve(PROJECT_DIR, '.env'));
for (const key in env) {
    if (env.hasOwnProperty(key) && !process.env[key]) {
        process.env[key] = env[key];
    }
}
