define([
	'dojo/ready',
	'dojo/_base/window',
	'dojo/parser',
	'myapp/views/mainView',
], function (ready, win, parser, MainView) {

	return function() {
		ready(function() {
			parser.parse();
			var app = new MainView();
			app.placeAt(win.body());
			app.startup();
		});
	};
});
