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
          'breakpoint-xxs': '23.75rem',
          // 480px
          'breakpoint-xs': '30rem',
          // 600px
          'breakpoint-sm': '37.5rem',
          // 720px
          'breakpoint-md': '45rem',
          // 1024px
          'breakpoint-lg': '64rem',
          // 1280px
          'breakpoint-xl': '80rem',
        },
      },
    ],
  ],
};

export default config;
