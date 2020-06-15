'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
	/*
	 * 含义：部署应用包时的基本URL
	 * Type: string
	 * Default: '/'
	 */
	publicPath:
		process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',

	/*
	 * 含义：生产环境打包输出目录
	 * Type: string
	 * Default: 'dist'
	 */
	outputDir: 'dist',

	/*
	 * 含义：放置生成的静态资源（js、css、img、fonts）的（相对于outputDir）目录
	 * Type: string
	 * Default: ''
	 */
	assetsDir: '',

	/*
	 * 含义：指定生成的 index.html 的输出路径 (相对于 outputDir)
	 * Type: string
	 * Default: 'index.html'
	 */
	indexPath: 'index.html',

	/*
	 * 含义：生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
	 * Type: boolean
	 * Default: true
	 */
	filenameHashing: true,

	/*
	 * 含义：在multi-page模式下构建应用
	 * Type: Object
	 * Default: undefined
	 */
	pages: undefined,

	/*
	 * 含义：是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
	 * Type: boolean | 'error'
	 * Default: true
	 */
	lintOnSave: process.env.NODE_ENV !== 'production',

	/*
	 * 含义：是否使用包含运行时编译器的 Vue 构建版本
	 * Type: boolean
	 * Default: false
	 */
	runtimeCompiler: false,

	/* 
    * 含义：默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
    如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    * Type: Array<string | RegExp>
    * Default: []
  */
	transpileDependencies: [],

	/*
	 * 含义：如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
	 * Type: boolean
	 * Default: true
	 */
	productionSourceMap: process.env.NODE_ENV !== 'production',

	/*
	 * 含义：设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
	 * Type: string
	 * Default: undefined
	 */
	crossorigin: undefined,

	/*
	 * 含义：在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity
	 * Type: boolean
	 * Default: false
	 */
	integrity: false,

	/*
	 * 含义：配置webpack
	 * Type: Object | Function
	 *
	 */
	configureWebpack: (config) => {
		/* 添加分析工具*/
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置
			if (process.env.npm_config_report) {
				config
					.plugin('webpack-bundle-analyzer')
					.usr(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
					.end()
				config.plugin.delete('prefetch')
			}
		} else {
			// 为开发环境修改配置...
		}
	},

	/*
	 * 含义：配置webpack(链式操作)。是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
	 * Type: Function
	 */
	chainWebpack: (config) => {
		// set svg-sprite-loader
		config.module
			.rule('svg')
			.exclude.add(resolve('src/icons'))
			.end()
		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(resolve('src/icons'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]',
			})
			.end()
	},

	/* css相关 */
	css: {
		/* 
      * 含义：默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
      设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
      * 启用 CSS modules for all css / pre-processor files.
      * Type: boolean
      * Default: false
    */
		requireModuleExtension: true,

		/* 
      * 含义：是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
      提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。
      * Type: boolean | Object
      * Default: 生产环境下是 true，开发环境下是 false
      * 是否使用css分离插件ExtractTextPlugin
    */
		extract: process.env.NODE_ENV === 'production',

		/*
		 * 含义：是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
		 * Type: boolean
		 * Default: false
		 */
		sourceMap: false,

		/*
		 * 含义：向 CSS 相关的 loader 传递选项，即css预设器配置项
		 * Type: Object
		 * Default: {}
		 */
		loaderOptions: {
			css: {
				// 这里的选项会传递给 css-loader
			},
			postcss: {
				// 这里的选项会传递给 postcss-loader
			},
		},
	},

	/*
	 * 含义：webpack-dev-server选项配置
	 * Type：Object
	 */
	devServer: {
		/*
		 * 含义：前端应用和后端 API 服务器没有运行在同一个主机上，需要在开发环境下将 API 请求代理到 API 服务器
		 * Type: string | Object
		 */
		//  proxy: 'http://localhost:4000',
		proxy: {
			'/api': {
				target: '<url>',
				ws: true,
				changeOrigin: true,
			},
			'/foo': {
				target: '<other_url>',
			},
		},
	},
}
