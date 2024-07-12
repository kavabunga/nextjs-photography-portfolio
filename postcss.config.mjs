const config = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        features: {
          'custom-properties': false,
          'nesting-rules': true,
        },
      },
    ],
    [
      'postcss-simple-vars',
      {
        variables: {
          // 380px
          'breakpoint-xxs': '23.75em',
          // 480px
          'breakpoint-xs': '30em',
          // 600px
          'breakpoint-sm': '37.5em',
          // 720px
          'breakpoint-md': '45em',
          // 1024px
          'breakpoint-lg': '64em',
          // 1280px
          'breakpoint-xl': '80em',
        },
      },
    ],
  ],
};

export default config;
