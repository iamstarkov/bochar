module.exports = function(grunt) {
	
	grunt.initConfig({
		copy: {
			templates: {
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

	/*
	grunt.registerTask('copy', [
		'copy'
		]
	);
	*/

};