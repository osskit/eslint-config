import config from '../eslint.config.js';
import testConfig from '../test.js';
import reactConfig from '../react.js';

export default [...config, ...reactConfig, ...testConfig];
