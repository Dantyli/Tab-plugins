//定一个闭包区域,防止插件污染,闭包限定命名空间
;(function($) {
	$.fn.extend({
		'tabs': function(options) {
			//检测参数是否合法
			function isValid(options) {
				return !options || (options && typeof options === "object") ? true : false;
			}
			if (!isValid(options)) {
				return this;
			}
			var defaults = {
				tabNav: '.header>li',
				tabContent: '.contain li',
				currentNav: 'active',
				event: 'mouseover'
			};
			var opts = $.extend({}, defaults, options); //使用jQuery.extend覆盖插件默认参数
			return this.each(function() { //这里的this就是jQuery对象,return jQuery对象,使插件支持链式调用
				$this = $(this);
				$this.find(opts.tabNav).on(opts.event, function() {
					$(this).addClass(opts.currentNav).siblings(opts.tabNav).removeClass(opts.currentNav);
					var index = $(this).index();
					$(opts.tabContent + ':eq(' + index + ')').addClass('liShow').siblings(opts.tabContent).removeClass('liShow');
				})
			})
		}
	})
})(window.jQuery);
