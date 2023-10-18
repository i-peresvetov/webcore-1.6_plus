const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin') //подключение возможности запустить плагин
const {CleanWebpackPlugin} = require('clean-webpack-plugin') //подключение возможности запустить плагин
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin');
const loader = require("sass-loader");

const isDev = process.env.NODE_ENV === 'development' // проверка режима работы
const isProd = !isDev // проверка режима работы
// console.log('IS DEV: ', isDev)

const optimization = () => { //функция, которая возвращает объект конфигурации
  const config = {
    splitChunks: { //без этого подключаемые библиотеки будут паковаться каждый раз при использовании
      chunks: 'all' //с этим - они пакуются отдельными файлами, которые повторно используются
    }
  }

  if (isProd) {
    config.minimizer = [
      new TerserWebpackPlugin(),
      new CssMinimizerWebpackPlugin()
    ]
  }

  return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = extra => {
  const loaders = [
  {    
    loader: MiniCssExtractPlugin.loader,
    options: {

    }
  },
  'css-loader'
  ]

  if (extra) {
    loader.push(extra)
  }
  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'src'), //указываю стартовую папку где искать файлы
  mode: "development", //режим результата упаковки, сейчас дев вариант с комментами
  // второй mode это "production" в котором всё коротко и упаковано
  entry: {    // точка входа, могут быть несколько
    main: "./index.js", //это точка входа с названием main
    analytics: "./analytics.js", //это точка входа с названием analytics
  },
  output: {    // точка выхода
    filename: filename('js'), //вариант названия файла, можно использовать и другие переменные
    // в качестве [name] используется название имени точки входа, [contenthash] хеш файла
    // сейчас используется функция (находится выше), которая делает имя в зависимости от дева или прода
    path: path.resolve(__dirname, "dist"), // текущая папка + dist
  },
  resolve: {
    extensions: ['.js', '.png', '.png'], // расширения файлов, которые обрабатываются, позволяет не писать расширение в коде
    alias: { //позволяет не писать относительные пути
      '@models': path.resolve(__dirname, 'src/models'), //абсолютный путь до папки можно заменить на @models
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: { //использует пакет webpack-dev-server
    port: 4200,
    hot: isDev // горячая замена модулей
  },
  optimization: optimization(),
  plugins: [ //список подключенных плагинов
    new HTMLWebpackPlugin({ //автоматически добавляет JS в HTML и создаёт index.html при сборке
        //title: 'Webpack Lum', //имя странички на выходе, не работает если есть template
        template: './index.html', //на основании какого файла HTML создавать бандл
        minify: { // настройки минификации HTML (вроде в вебпак 5 работает по умолчанию)
          collapseWhitespace: isProd //убрать пробелы
        }
    }),
    new CleanWebpackPlugin(), //очищает dist
    new CopyWebpackPlugin({ //плагин для копирования файлов
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'), // откуда и что копирую
          to: path.resolve(__dirname, 'dist') //куда копирую
        }
      ]
    }),
    new MiniCssExtractPlugin({  // без активации тут не будет работать в лоадерах
      filename: filename('css')
    })
  ],

  // возможность добавления к вебпаку функционал работы с другими файлами
  module: { // ЛОДЕРЫ ЧИТАЮТСЯ СПРАВА НАЛЕВО
    rules: [
        {
          //если вебпак встречает ТАКОЙ файл
          test: /\.css$/,
          //то надо использовать вот эти лоадеры (пропускает через себя справа налево)
          //use: ['style-loader', 'css-loader']
          //лодеры это тоже пакеты     
          //css-loader позволяет понимать импорты CSS в JS
          //style-loader добавляет стили в хедер
          // use: [{
            // loader: MiniCssExtractPlugin.loader,
            // options: {
// 
            // }
          // }, 'css-loader'] // замена style-loader на minicssextract для того что бы css был в отдельном файле
          use: cssLoaders()
        },
        {
          test: /\.less$/, // препроцессор для less
          // use: [{
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {

          //   }
          // }, 'css-loader', 'less-loader'] //сначала less, потом css, потом миницссплагин
          use: cssLoaders('less-loader')
        },
        {
          test: /\.s[ac]ss$/,
          // use: [{
          //   loader: MiniCssExtractPlugin.loader,            
          // }, 'css-loader', 'sass-loader']
          use: cssLoaders('sass-loader')
        },
        {
          test: /\.(png|jpg|svg|gif)$/,            
          type: 'asset/resource'
          //загружает любые файлы...?
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          use: ['file-loader']
        },
        {
          test: /\.xml$/,
          use: ['xml-loader']
        },
        {
          test: /\.csv$/,
          use: ['csv-loader'] // раньше ещё нужен был papaparse
        }
    ]
  }
};
