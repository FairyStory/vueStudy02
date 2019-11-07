module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:vue/essential"
  ],
  "globals": {
    
  },
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },

  "rules": {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "no-unused-vars":0,
      'no-undef': 0, //不能有未定义的变量
  }
};
