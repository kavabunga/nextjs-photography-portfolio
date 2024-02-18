const lintStagedConfig = {
  '*.{css,scss}': 'stylelint --fix',
  '*.{js,ts,tsx,jsx}': 'eslint --fix',
  '*.{js,ts,tsx,jsx,css,scss,html,md,json}': 'prettier --write',
};

export default lintStagedConfig;
