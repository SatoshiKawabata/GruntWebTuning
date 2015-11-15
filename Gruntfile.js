module.exports = function(grunt) {
	grunt.initConfig({
		uncss: {
			dist: {
				files: {
					'./build/all.css': ['./src/index.html']
				}
			}
		},
		csso: {
			dist: {
				files: {
					'./build/all.min.css': ['./build/all.css']
				}
			}
		},
		concat: {
			files: {
				src: [
					'./src/test.js',
					'./src/hoge.js'
				],
				dest: './build/all.js'
			}
		},
		uglify: {
			dist : {
				files : {
					'./build/all.min.js' : ['./build/all.js']
				}
			}
		},
		htmlmin : {
			dist : {
				options : {
					removeComments : true,
					collapseWhitespace : true,
					minifyJS : true,
					minifyCSS : true
				},
				files : {
					'./build/index.min.html' : './src/index.html'
				}
			}
		},
		watch : {
			options : {
				livereload : true
			},
			watch_all: {
		    	files: ['./src/**/*'],
		    	tasks: ['uncss', 'csso', 'concat', 'uglify', 'htmlmin']
		    }
		},
		image: {
			// static: {
			// 	options: {
			// 		pngquant: true,
			// 		optipng: false,
			// 		zopflipng: true,
			// 		advpng: true,
			// 		jpegRecompress: false,
			// 		jpegoptim: true,
			// 		mozjpeg: true,
			// 		gifsicle: true,
			// 		svgo: true
			// 	},
			// 	files: {
			// 		'./build/img.png': 'src/img.png',
			// 		'./build/img.jpg': 'src/img.jpg',
			// 		'./build/img.gif': 'src/img.gif',
			// 		'./build/img.svg': 'src/img.svg'
			// 	}
			// },
			dynamic: {
				options: {
					pngquant: true,
					optipng: false,
					zopflipng: true,
					advpng: true,
					jpegRecompress: false,
					jpegoptim: true,
					mozjpeg: true,
					gifsicle: true,
					svgo: true
				},
				files: [
					{
						expand: true,
						cwd: 'src',
						src: ['**/*.{png,jpg,gif,svg}'],
						dest: './dist/'
					}
				]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-image');

	grunt.registerTask('css_min', ['uncss', 'csso']);
	grunt.registerTask('js_min', ['concat', 'uglify']);
	grunt.registerTask('html_min', ['htmlmin']);
};