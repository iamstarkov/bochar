module.exports = function(grunt) {
	
	grunt.initConfig({
		copy: {
			postinstall: {
				files: [
					{
						src: './templates/default.mustache',
						dest: './node_modules/cleaver/templates/default.mustache'
					},
					{
						src: './templates/layout.mustache',
						dest: './node_modules/cleaver/templates/layout.mustache'
					},
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');


};