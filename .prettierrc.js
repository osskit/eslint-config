module.exports = {
  ...require('@osskit/prettier-config'),
  plugins: ['prettier-plugin-sort-json'],
  pluginSearchDirs: ['./'],
  jsonRecursiveSort: true,
};
