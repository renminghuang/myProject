// JavaScript Document
(function(){
	
    $.fn.tab=function(obj){
		
		var defualts={
			current:obj.current,
            content:obj.content,
			contentItem:obj.contentItem,
			clickType:obj.clickType,
			eleFind:obj.eleFind
		};
		
		var options=$.extend(defualts, options);
		
		this.each(function(){
			var _this=$(this);
			_this.find(options.eleFind).bind(options.clickType,function(){
				$(this).addClass(options.current).siblings().removeClass(options.current);
				var index=$(this).index();
                $(options.content).find(options.contentItem).eq(index).show().siblings().hide();
			})
		})
	}
})(jQuery);

