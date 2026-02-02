// lint-staged.config.js
module.exports = {
  '*.{ts,tsx}': [() => 'tsc --noEmit --incremental false'],
  '**/*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0', 'prettier -w'],
  '**/*.{json,css,scss,md}': ['prettier -w'],
};
