module.exports = ({env}) => ({
  plugins: {
    autoprefixer:
      env === 'development'
        ? false
        : {
            browsers: ['last 2 versions']
          }
  }
});
