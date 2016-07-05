$(function() {

// Calls jQuery Tabs and Accordians
	$('.mojo-tabs').tabs();
	$('.mojo-accordion, .mojo-accordion-nh').accordion({
		heightStyle: 'content'
	});

// Fixes Breadcrumbs
	var crumbText = $('.breadcrumb a.active').text();
	$('.breadcrumb:not(.admin-crumbs) a.active').html("").parent('li').addClass('active').text(crumbText);
	$('.admin-crumbs, .forumthreadcrumbs').children().wrap('<li></li>');
	var crumbChildren = $('.forumthreadcrumbs').children('li');
	$('.forumthreadcrumbs').removeClass('breadcrumbs').addClass('breadcrumb').html('').append(crumbChildren);

// Memberlist Pagination
	$('.member-pagination').children('ul').addClass('pagination');

// Removes unwanted classes from the upload button
	$('.fileinput-button button').removeClass('ui-button ui-widget ui-state-default ui-corner-all');

// Removes embeded styles on calendar and searchpanel
	$('.event-cal *, .searchpanel').removeAttr('style');

// Function to add .menu-overlay and open the menu
	$('.site-wrap').append('<span class="menu-overlay"></span>');
	$('.menu-open').click(function() {
		$('.form').animate({
			scrollTop: 0
		}, 0);
		$('.html-class').addClass('menu-overflow');
		$('.html-class').addClass('menu-drawer-open');
		return false;
	});
	$('.admin-open').click(function() {
		$('.form').animate({
			scrollTop: 0
		}, 0);
		$('.html-class').addClass('menu-overflow');
		$('.html-class').addClass('admin-drawer-open');
		return false;
	});
	$('.menu-overlay').click(function() {
		$('.html-class').removeClass('menu-drawer-open admin-drawer-open');
		setTimeout(function() {
			$('.html-class').removeClass('menu-overflow');
		}, 200);
	});

// Adds Placeholder to Search
	$('.search-box').attr('placeholder', 'Search Here');

// Pagination Fix
	var pageInfoText = $('span.page-info').text();
	$('.modulepager span.active').parent('li').addClass('active');
	$('span.page-info').parent().parent().parent().prepend('<div class="page-info">' + pageInfoText + '</div>');
	$('li.page-info').remove();

});


$(window).load(function() {

// To remove Non Break Space in settingrows
	$('.settingrow, .normalthread').each(function() {
		if ($(this).html() === '&nbsp;') {
			$(this).html($(this).html().replace(/&nbsp;/g, ''));
		}
	});
});

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());