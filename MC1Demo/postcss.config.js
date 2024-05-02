const postcssBundler = require('@csstools/postcss-bundler');
const postcssMinify = require('@csstools/postcss-minify');
const postcssPlugins= require('postcss-plugins');
const postcssPresetEnv = require('postcss-preset-env');
const postcssCustomMedia = require('postcss-custom-media');
const postcssExtractMediaQuery = require('postcss-extract-media-query');

module.exports = {
	plugins: {
    'postcss-extract-media-query': {
      output: {
        path: path.join(__dirname, 'dist'),
      },
      queries: {
        'screen and (min-width: 1024px)': 'desktop',
        'prefers-reduced-motion':'never'
      },
    },
  },
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'postcss-loader'],
    },
    {
      test: /\.jsx?$/,
      use: ['babel-loader', 'astroturf/loader'],
    },
  ],
};
