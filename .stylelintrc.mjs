const styleLintConfig = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-clean-order',
  ],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
  },
};

export default styleLintConfig;
