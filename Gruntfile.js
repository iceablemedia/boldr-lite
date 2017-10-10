module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			options: {
				sourceMap: false,
				outputStyle: 'expanded',
			},
			dist: {
				files: {
					'assets/css/boldr.dev.css': 'assets/scss/boldr.scss',
					'assets/css/boldr-unresponsive.dev.css': 'assets/scss/boldr-unresponsive.scss',
				}
			}
		},

		postcss: {
			options: {
				processors: [
					require('autoprefixer')({browsers: 'last 2 versions'}),
				]
			},
			dist: {
				src: 'assets/css/*.dev.css'
			}
		},

		csscomb: {
			dist: {
				options: {
					config: 'assets/css/csscomb.json'
				},
				files: {
					'css/boldr.dev.css': 'assets/css/boldr.dev.css',
					'css/boldr-unresponsive.dev.css': 'assets/css/boldr-unresponsive.dev.css',
				}
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'css/boldr.min.css': 'css/boldr.dev.css',
					'css/boldr-unresponsive.min.css': 'css/boldr-unresponsive.dev.css',
				}
			}
		},

		clean: ['assets/css/*.css'],

		jshint: {
			files: ['Gruntfile.js', 'assets/js/boldr.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},

		concat: {
		 options: {
			separator: '\n\n',
		 },
		 dist: {
			src: [
				'assets/js/boldr.js',
				'assets/js/superfish.js',
			],
			dest: 'js/boldr.dev.js',
		 },
		},

		uglify: {
			build: {
				src: 'js/boldr.dev.js',
				dest: 'js/boldr.min.js'
			}
		},

		makepot: {
			target: {
				options: {
					domainPath: '/languages/',
					potFilename: 'boldr-lite.pot',
					type: 'wp-theme'
				}
			}
		},

		watch: {
				scss: {
						files: ['assets/scss/*.scss'],
						tasks: ['sass', 'postcss', 'csscomb', 'cssmin', 'clean'],
						options: {
							interrupt: true,
						},
					},
				js: {
						files: ['assets/js/*.js'],
						tasks: ['jshint', 'concat', 'uglify'],
						options: {
							interrupt: true,
						},
					},
				pot: {
						files: ['*.php', '**/*.php', '**/**/*.php'],
						tasks: ['makepot'],
						options: {
							interrupt: true,
						},
					}
		},


});

grunt.registerTask('default', ['sass', 'postcss', 'csscomb', 'cssmin', 'clean', 'jshint', 'concat', 'uglify', 'makepot']);

};
