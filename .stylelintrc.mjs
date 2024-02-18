const styleLintConfig = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'selector-class-pattern': [
      '^[a-z_][A-Za-z_]+$',
      {
        message:
          'Expected custom property name to be camelCase or snake_case. PascalCase and snake-case are prohibited.',
      },
    ],
  },
};

export default styleLintConfig;
