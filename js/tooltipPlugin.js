(function ($) {
	"use strict";
//define name of plugin and how to call it
    $.fn.tooltipPlugin = function (options) {
        var defaults, settings, tooltip_container, url, elementToGet, toolTipWidth, toolTipHeight, pageWidth;
        
        settings = $.extend({}, defaults, options);
        tooltip_container = $('<div id = "tooltip-container"></div>').hide().appendTo('body');
		return this.each(function () {
			$(this).mouseover(function (e) {
		
		
				if ($(this).attr('data-tip-type') === 'html') {
					url = $(this).attr("rel");
					$('#tooltip-container').load(url);
				}
				if ($(this).attr('data-tip-type') === 'text') {
			
					elementToGet = $(this).attr("tooltip-title");

					$('#tooltip-container').html(elementToGet);
				}
				$('#tooltip-container').css({'display': 'block', 'opacity': 0}).animate({opacity: 1}, 250);
				
			}).mousemove(function (e) {
				toolTipWidth = $('#tooltip-container').outerWidth();
				toolTipHeight = $('#tooltip-container').outerHeight();
				pageWidth = $('body').width();
				if (e.pageX > pageWidth / 2) {
					$('#tooltip-container').css('left', (e.pageX - toolTipWidth + 20) + 'px');
				} else {
					$('#tooltip-container').css('left', (e.pageX - 20) + 'px');
				}
		
				$('#tooltip-container').css('top', (e.pageY + 20) + 'px');
		
		
			});
		
            if ($(this).attr('data-tip-type') === 'text') {
                $(this).mouseout(function (e) {
                    $('#tooltip-container').animate({opacity: 0}, 50, function () {
                        $('#tooltip-container').css('display', 'none').html('');
                    });
                });
            } else {
                $('html').click(function () {

                    $('#tooltip-container').animate({opacity: 0}, 50, function () {
                        $('#tooltip-container').css('display', 'none').html('');
       
                    });
                });
            }
           
        });
         
    };
})(jQuery);