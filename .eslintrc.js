module.exports = {
  root: true,
  env: {
    browser: true, //浏览器全局变量
    es6: true, //启用除模块之外的所有 ECMAScript 6 功能（这会自动将ecmaVersion解析器选项设置为 6）。
    node: true // Node.js 全局变量和 Node.js 范围
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended', //可启用报告常见问题的核心规则子集
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  globals: { // 全局变量
    store: 'readonly',
    Vue: 'writable',
    Vuex: 'writable',
  },
  ignorePatterns: ['dist/**', '.gitignore', 'test/**', 'build/**', 'buildProject/**', 'jenkins/**', 'public/pdf/**'],
  rules: {
    'prettier/prettier': [
      // 内部配置 prettier
      1,
      {
        eslintIntegration: true,
        tabWidth: 2,
        singleQuote: true,
        semi: true, // 格式化不加分号
        printWidth: 140, // 一行的字符数，如果超过会进行换行，默认为80
        trailingComma: 'all', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
        bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
        jsxBracketSameLine: true, // JSX 标签闭合位置，默认false，换行闭合
      },
    ],
    'vue/html-self-closing': 0,
    'vue/attributes-order': 0,
    'vue/order-in-components': 2,
    'vue/max-attributes-per-line': 0,
    'one-var': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': 2,
    'no-console': 0,
    semi: [1, 'always'],
    'no-extra-semi': 2,
    'space-before-function-paren': 0,
    eqeqeq: 0,
    'spaced-comment': 0,
    'no-useless-escape': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'new-cap': 0,
    'no-new': 0,
    indent: 0, // typescript-eslint rules
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-function-return-type': 0, //['warn', { allowExpressions: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: false,
          object: false,
          Function: false,
        },
        extendDefaults: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
  },
}
