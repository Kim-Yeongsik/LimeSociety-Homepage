const config = {
  env: {
    test: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': { modules: 'commonjs' }
          }
        ]
      ]
    }
  },
  ignore: ['.idea', '.vscode', 'docs', 'node_modules'],
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', 'scss'],
        cwd: 'babelrc'
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-optional-chaining'
  ]
}

module.exports = config
