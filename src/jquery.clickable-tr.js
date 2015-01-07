/*
 * jQuery Clickable Table Row Plugin
 * https://github.com/hikaruhorie/jquery-clickable-tr
 *
 * Copyright 2015 Hikaru Horie
 * License: MIT License
 */

jQuery(function($) {
	$('tbody tr[data-href]')
		.addClass('clickable')
		.click(function(e) {
			window.location = $(this).attr('data-href');
		})
		.find('a, button').hover(
			function() {
				$(this).parents('tr').unbind('click');
			},
			function() {
				$(this).parents('tr').click(function(e) {
					window.location = $(this).attr('data-href');
				});
			});
});
