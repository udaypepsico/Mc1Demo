const postcssBundler = require('@csstools/postcss-bundler');
const postcssMinify = require('@csstools/postcss-minify');
const postcssPlugins = require('postcss-plugins');
const postcssPresetEnv = require('postcss-preset-env');
const postcssCustomMedia = require('postcss-custom-media');
const postcssExtractMediaQuery = require('postcss-extract-media-query');
const postcssFontFamily = require('postcss-font-family');

console.log('postcss');

module.exports = {
  plugins: [
    require("tailwindcss")
  ]
};
