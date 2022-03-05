module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  testMatch: [
    '**/*.spec.js'
  ],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
