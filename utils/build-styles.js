const { renderSync } = require('node-sass');

let lastModified = 0;
let cachedStyles = '';

module.exports = function generateCachedStylesheet() {
  if (lastModified < Date.now() - 5000) {
    const { css } = renderSync({
      file: __dirname + '/../_includes/assets/scss/main.scss',
      outputStyle: 'compressed',
    });
    lastModified = Date.now();
    cachedStyles = css;
  }
  return cachedStyles;
};