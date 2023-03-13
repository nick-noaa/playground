module.exports = {
  plugins: [
    require('postcss-jit-props')({
      files: ['./src/styles/abstracts/**'],
    }),
    require('postcss-preset-env')({ stage: 0 }),
  ],
};
