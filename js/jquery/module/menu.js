$(function() {

	var $plus = $('#plus')
	,	$star = $('#global-menu li.menu');

	$plus.bind('click', function() {
		var $menu = $('.menu');
		$menu.each(function(i) {
			var $this = $(this);
			$this.animate({
				top: -($this.data('y'))
			,	left: ($this.data('x'))
			,	opacity: 1
			,	zIndex: 100
			}, (i * 50) + 400, 'easeOutBack');
		});
	});

	$star.bind('click', function() {
		var $menu = $('.menu');
		$menu.each(function(i) {
			var $this = $(this);
			$this.animate({
				top: 0
			,	left: 0
			,	opacity: 0
			,	zIndex: -100
			}, (i * 50) + 400, 'easeInBack');
		});
	});

});
