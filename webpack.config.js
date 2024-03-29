const path = require('path');

module.exports = {
  entry: './src/Modal.js', // Utilisez le chemin vers votre fichier Modal.js comme point d'entrée
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'Modal', // Nom de votre composant, il sera accessible globalement en tant que Modal
    libraryTarget: 'umd', // Format de module universel
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
