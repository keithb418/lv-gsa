require.config({
	baseUrl: '../../../app/js',
	paths: {
		'Jasmine': '../../test/unit_tests/libs/jasmine/jasmine',
		'JasmineHtml': '../../test/unit_tests/libs/jasmine/jasmine-html',
		'Boot': '../../test/unit_tests/libs/jasmine/boot',
		'Console': '../../test/unit_tests/libs/jasmine/console'
	},
	shim: {
		'Jasmine': {
			deps: ['Boot', 'Console'],
			exports: 'Jasmine'
		},
		'JasmineHtml': {
			deps: ['Jasmine'],
			exports: 'Jasmine'
		},
		'Boot': {
			exports: 'Boot'
		},
		'Console': {
			exports: 'Console'
		}
	}
});